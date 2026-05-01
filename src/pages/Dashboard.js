import React from 'react'
import './Dashboard.css'
import DashboardFunctionalityCard from '../components/DashboardFunctionalityCard'
import BudgetTrackCard from '../components/BudgetTrackCard'
import AnalyticsPreviewCard from '../components/AnalyticsPreviewCard'
import TransactionsPreviewCard from '../components/TransactionsPreviewCard'

function NavIcon(){
  return(
    <div className='navicon'>
      H
    </div>
  )
}

function NavProfile(){
  return(
    <div className='navprofile'>
      <div className='profilepicture'></div>
      <div className='profileinfo'>
        <div className='profilename'>Adelaide Agyeman</div>
        <div className='profileemail'>adelaideagyeman@gmail.com</div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className='main'>
      <div className='navbar'>
        <div className='welcome'>
          <div className='welcomename'>Welcome Back, Adelaide</div>
          <div className='welcomemessage'>It's time to manage your finances</div>
        </div>
        <div className='navicons'>
          <NavIcon/>
          <NavIcon/>
          <NavProfile/>
        </div>
      </div>
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
