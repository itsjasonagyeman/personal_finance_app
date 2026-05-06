import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import DashboardFunctionalityCard from '../components/DashboardFunctionalityCard'
import BudgetTrackCard from '../components/BudgetTrackCard'
import AnalyticsPreviewCard from '../components/AnalyticsPreviewCard'
import TransactionsPreviewCard from '../components/TransactionsPreviewCard'
import Navbar from '../components/Navbar'
import { authFetch } from '../authfetch'
import { useCurrentUser } from '../useCurrentUser'

export default function Dashboard() {
  const userProfile = useCurrentUser()
  const [transaction, setTransactions] = useState([])
  useEffect (()=> {
    authFetch("http://127.0.0.1:8000/transactions")
    .then(res => res.json())
    .then(data => setTransactions(data))
    .catch(err => console.log(err))
  }, []);
  const total = transaction.reduce((sum, tx) => sum + Number(tx.amount), 0);
  let income = 0
  let expense = 0
  let savings = 0
  for (let i=0; i < transaction.length; i++){
    let tx = transaction[i]
    if (tx.category === 'INCOME'){
      income += Number(tx.amount)
    }
  }
  for (let i=0; i < transaction.length; i++){
    let tx = transaction[i]
    if (tx.category === 'EXPENSE'){
      expense += Number(tx.amount)
    }
  }
  for (let i=0; i < transaction.length; i++){
    let tx = transaction[i]
    if (tx.category === 'SAVINGS'){
      savings += Number(tx.amount)
    }
  }

  return (
    <div className='dashboardmain'>
      <Navbar titlename={`Welcome Back, ${userProfile?.firstName ?? ''}`} titlemessage="It's time to manage your finances" profilename={userProfile?.fullName ?? ''} profileemail={userProfile?.email ?? ''}/>
      <div className='functionality'>
        <DashboardFunctionalityCard cardwidth='30px' text='a' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
        <DashboardFunctionalityCard cardwidth='100px' text='This Month' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
      </div>
      <div className='budgettrack'>
        <BudgetTrackCard title='Total Balance' amount={`$${total}`} percent='3.6%' color='red'/>
        <BudgetTrackCard title='Income' amount={`$${income}`} percent='2.6%' color='green'/>
        <BudgetTrackCard title='Expenses' amount={`$${expense}`} percent='2.6%' color='red'/>
        <BudgetTrackCard title='Savings' amount={`$${savings}`} percent='4.6%' color='green'/>
      </div>
      <div className='analytics-preview'>
        <AnalyticsPreviewCard />
      </div>
      <div className='transactions-preview'>
        <TransactionsPreviewCard />
      </div>
    </div>
  )
}
