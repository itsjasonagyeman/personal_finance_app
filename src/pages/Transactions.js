import React from 'react'
import './Transactions.css'
import Navbar from '../components/Navbar'
import DashboardFunctionalityCard from '../components/DashboardFunctionalityCard'
import Transactionheader from '../components/Transactionheader'
import { useState } from 'react'
import Addnewform from '../components/Addnewform'

export default function Transactions() {
  const [headers, setHeaders] = useState([
  { backgroundColor: '#D0D0D4', showShadow: false },
  { backgroundColor: 'white', showShadow: true }
  ])
  function addNewHeader() {
    setHeaders([
      ...headers,
      { backgroundColor: 'white', showShadow: true }
    ])
  }
  return (
    <div className='transactionsmain'>
      <Addnewform/>
      <Navbar titlename='Transactions' titlemessage='Overview of your activities'/>
      <div className='transactionsfunctionality'>
        <div className='transfunca'>
          <DashboardFunctionalityCard cardwidth='35px' text='c' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
          <DashboardFunctionalityCard cardwidth='130px' text='25 Jun - 28 Jun' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
          <DashboardFunctionalityCard cardwidth='35px' text='c' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
        </div>
        <DashboardFunctionalityCard cardwidth='100px' text='Add new' hoverbackgroundcolor='black' hovertextcolor='white' hovercursor='pointer' onClickFunction={addNewHeader}/>
      </div>
      {headers.map((header, index) => (
        <Transactionheader
          key={index}
          backgroundColor={header.backgroundColor}
          showShadow={header.showShadow}
        />
      ))}        
    </div>
  )
}
