import React from 'react'
import './Dashboard.css'
import DashboardFunctionalityCard from '../components/DashboardFunctionalityCard'
import BudgetTrackCard from '../components/BudgetTrackCard'
import AnalyticsPreviewCard from '../components/AnalyticsPreviewCard'
import TransactionsPreviewCard from '../components/TransactionsPreviewCard'
import Navbar from '../components/Navbar'

export default function Dashboard() {
  return (
    <div className='dashboardmain'>
      <Navbar titlename='Welcome Back, Adelaide' titlemessage="It's time to manage your finances"/>
      <div className='functionality'>
        <DashboardFunctionalityCard cardwidth='30px' text='a'/>
        <DashboardFunctionalityCard cardwidth='100px' text='This Month'/>
      </div>
      <div className='budgettrack'>
        <BudgetTrackCard title='Total Balance' amount='$30,000' percent='3.6%' color='red'/>
        <BudgetTrackCard title='Income' amount='$20,000' percent='2.6%' color='green'/>
        <BudgetTrackCard title='Expenses' amount='$5,000' percent='2.6%' color='red'/>
        <BudgetTrackCard title='Savings' amount='$5,000' percent='4.6%' color='green'/>
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
