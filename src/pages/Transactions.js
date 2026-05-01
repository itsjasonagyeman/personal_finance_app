import React from 'react'
import './Transactions.css'
import Navbar from '../components/Navbar'
import DashboardFunctionalityCard from '../components/DashboardFunctionalityCard'
import Transactionheader from '../components/Transactionheader'

export default function Transactions() {
  return (
    <div class='transactionsmain'>
      <Navbar titlename='Transactions' titlemessage='Overview of your activities'/>
      <div className='transactionsfunctionality'>
        <div className='transfunca'>
          <DashboardFunctionalityCard cardwidth='35px' text='c' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
          <DashboardFunctionalityCard cardwidth='130px' text='25 Jun - 28 Jun' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
          <DashboardFunctionalityCard cardwidth='35px' text='c' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
        </div>
        <DashboardFunctionalityCard cardwidth='100px' text='Add new' hoverbackgroundcolor='black' hovertextcolor='white' hovercursor='pointer'/>
      </div>
      <Transactionheader backgroundColor='#D0D0D4' showShadow={false}/>      
      <Transactionheader backgroundColor='white' showShadow={true}/>      
      <Transactionheader backgroundColor='white' showShadow={true}/>      
      <Transactionheader backgroundColor='white' showShadow={true}/>      
    </div>
  )
}
