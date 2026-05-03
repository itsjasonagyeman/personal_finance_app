import React from 'react'
import './Transactions.css'
import Navbar from '../components/Navbar'
import DashboardFunctionalityCard from '../components/DashboardFunctionalityCard'
import Transactionheader from '../components/Transactionheader'
import { useState } from 'react'
import Addnewform from '../components/Addnewform'
import Popup from '../components/Popup'

export default function Transactions() {
  const [showForm, setShowForm] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [transactions, setTransactions] = useState([])
  return (
    <div className='transactionsmain'>
      {showPopup && <Popup setShowPopup ={setShowPopup}/>}
      {showForm && <Addnewform setShowForm = {setShowForm} addTransactions = {setTransactions}/>}
      <Navbar titlename='Transactions' titlemessage='Overview of your activities'/>
      <div className='transactionsfunctionality'>
        <div className='transfunca'>
          <DashboardFunctionalityCard cardwidth='35px' text='c' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
          <DashboardFunctionalityCard cardwidth='130px' text='25 Jun - 28 Jun' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
          <DashboardFunctionalityCard cardwidth='35px' text='c' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
        </div>
        <DashboardFunctionalityCard cardwidth='100px' text='Add new' hoverbackgroundcolor='black' hovertextcolor='white' hovercursor='pointer' onClickFunction={() => setShowForm(true)}/>
      </div>
      <Transactionheader backgroundColor='#D0D0D4' showShadow={false} date='DATE' amount='AMOUNT' name='PAYMENT NAME' method='METHOD' category='CATEGORY' status='STATUS' activateDelete={false} setShowPopup= {setShowPopup} />
      {transactions.map((tx, index) => (
        <Transactionheader
          key={index}
          backgroundColor='white'
          showShadow={true}
          date={tx.date}
          amount={tx.amount}
          name={tx.name}
          method={tx.method}
          category={tx.category}
          status={tx.status}
          activateDelete={true}
          setShowPopup= {setShowPopup}
        />
      ))}        
    </div>
  )
}
