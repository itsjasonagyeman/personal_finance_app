import React, {useState, useEffect} from 'react'
import './Analytics.css'
import Navbar from '../components/Navbar'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import { authFetch } from '../authfetch'
import { useCurrentUser } from '../useCurrentUser'

export default function Analytics() {
  const userProfile = useCurrentUser()
  const [transactions, setTransactions] = useState([])
  useEffect(()=>{
    authFetch('http://127.0.0.1:8000/transactions')
    .then(res => res.json())
    .then(data => setTransactions(data))
    .catch(err => console.log(err))
  }, [])

  let grouped = {};
  for (let i = 0; i < transactions.length; i++) {
      let tx = transactions[i];

      let date = tx.date;

      if (!grouped[date]) {
        grouped[date] = {
          income: 0,
          expense: 0,
          savings: 0
        };
      }

      if (tx.category === "INCOME") {
        grouped[date].income += Number(tx.amount);
      }

      if (tx.category === "EXPENSE") {
        grouped[date].expense += Number(tx.amount);
      }

      if (tx.category === "SAVINGS") {
        grouped[date].savings += Number(tx.amount);
      }
    }
    let dates = [];
    let incomes = [];
    let expenses = [];
    let savings = [];

    for (let date in grouped) {
        dates.push(date);
        incomes.push(grouped[date].income);
        expenses.push(grouped[date].expense);
        savings.push(grouped[date].savings);
  }
  let nameTotals = {};
  for (let i = 0; i < transactions.length; i++) {
    let tx = transactions[i];

    let name = tx.name;
    let amount = Number(tx.amount);

    if (!nameTotals[name]) {
      nameTotals[name] = 0;
    }

    nameTotals[name] = nameTotals[name] + amount;
  }
  let nameLabels = [];
  let nameValues = [];

  for (let key in nameTotals) {
    nameLabels.push(key);
    nameValues.push(nameTotals[key]);
  }
  function generateColors(length) {
    const colors = [
      '#ff6384', '#36a2eb', '#ffce56',
      '#4bc0c0', '#9966ff', '#ff9f40',
      '#2ecc71', '#e74c3c', '#3498db'
    ];

    let result = [];
    for (let i = 0; i < length; i++) {
      result.push(colors[i % colors.length]);
    }

    return result;
  }
  return (
    <div className='baseAnalytics'>
      <Navbar titlename='Analytics' titlemessage='Track your spending habits' profilename={userProfile?.fullName ?? ''} profileemail={userProfile?.email ?? ''}/>
      <div className='chart1'>
          <Bar 
            data={{
              labels:dates,
              datasets:[
                {
                  label: 'Income',
                  data: incomes,
                  borderRadius: 5,
                  backgroundColor: '#1ed136'
                },
                {
                  label: 'Expenses',
                  data: expenses,
                  borderRadius: 5,
                  backgroundColor: '#ff0000'
                },
                {
                  label: 'Savings',
                  data: savings,
                  borderRadius: 5,
                  backgroundColor: '#2121dd'
                },
              ]
            }}
          />
      </div>
      <div className='bottomCharts'>
        <div className='chart2'>
          <Doughnut
            data={{
              labels:nameLabels,
              datasets:[
                {
                  label: 'Spending Overview',
                  data:nameValues,
                  backgroundColor: generateColors(nameValues.length)
                }
                
              ]
            }}
          />
        </div>
        <div className='chart3'>
          <Line
            data={{
              labels:nameLabels,
              datasets:[
                {
                  label: 'Spending Overview',
                  data:nameValues,
                  backgroundColor: generateColors(nameValues.length)
                }
                
              ]
            }}
          />
        </div>
      </div>
    </div>
  )
}
