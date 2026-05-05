import React, {useState, useEffect} from 'react'
import './Analytics.css'
import Navbar from '../components/Navbar'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

export default function Analytics() {
  const [transactions, setTransactions] = useState([])
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/transactions')
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
  return (
    <div className='baseAnalytics'>
      <Navbar titlename='Analytics' titlemessage='Track your spending habits'/>
      <div className='chart1'>
          <Bar 
            data={{
              labels:dates,
              datasets:[
                {
                  label: 'Income',
                  data: incomes,
                  borderRadius: 5,
                  backgroundColor: '#343438'
                },
                {
                  label: 'Expenses',
                  data: expenses,
                  borderRadius: 5,
                  backgroundColor: '#56565E'
                },
                {
                  label: 'Savings',
                  data: savings,
                  borderRadius: 5,
                  backgroundColor: '#19191a'
                },
              ]
            }}
          />
      </div>
      <div className='bottomCharts'>
        <div className='chart2'>
          <Doughnut
            data={{
              labels:['Food', 'Water', 'Transport'],
              datasets:[
                {
                  label: 'Spending Overview',
                  data:[80, 100, 120]
                }
                
              ]
            }}
          />
        </div>
        <div className='chart3'>
          <Line
            data={{
              labels:['Food', 'Water', 'Transport'],
              datasets:[
                {
                  label: 'Spending Overview',
                  data:[80, 100, 120]
                }
                
              ]
            }}
          />
        </div>
      </div>
    </div>
  )
}
