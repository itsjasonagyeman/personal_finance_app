import React, {useState} from 'react'
import './Transactions.css'
import Navbar from '../components/Navbar'
import DashboardFunctionalityCard from '../components/DashboardFunctionalityCard'
import Transactionheader from '../components/Transactionheader'
import Addnewform from '../components/Addnewform'
import Popup from '../components/Popup'
import { useEffect } from 'react';

export default function Transactions() {
  const [showForm, setShowForm] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [transactionindex, setTransactionIndex] = useState(null)
  const [formData, setFormData] = useState({
      date: '',
      amount: '',
      name: '',
      method: '',
      category: '',
      status: ''
  })
  console.log(transactionindex)
  console.log(formData)
  function deleteTransaction(id) {
    fetch(`http://127.0.0.1:8000/transactions/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setTransactions(prev =>
        prev.filter(tx => tx.id !== id)
      );
    })
    .catch(err => console.log(err));
  }
  useEffect(() => {
    fetch("http://127.0.0.1:8000/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='transactionsmain'>
      {showPopup && <Popup setShowPopup ={setShowPopup} deleteTransaction= {deleteTransaction} transactionindex={transactionindex}/>}
      {showForm && <Addnewform setShowForm = {setShowForm} addTransactions = {setTransactions} setFormData ={setFormData} formData = {formData}/>}
      <Navbar titlename='Transactions' titlemessage='Overview of your activities' profilename='Jason Agyeman' profileemail='jasonagyeman@test.com'/>
      <div className='transactionsfunctionality'>
        <div className='transfunca'>
          <DashboardFunctionalityCard cardwidth='35px' text='c' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
          <DashboardFunctionalityCard cardwidth='130px' text='25 Jun - 28 Jun' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
          <DashboardFunctionalityCard cardwidth='35px' text='c' hoverbackgroundcolor='white' hovertextcolor='black' hovercursor='default'/>
        </div>
        <DashboardFunctionalityCard cardwidth='100px' text='Add new' hoverbackgroundcolor='black' hovertextcolor='white' hovercursor='pointer' onClickFunction={() => setShowForm(true)}/>
      </div>
      <Transactionheader backgroundColor='#D0D0D4' showShadow={false} date='DATE' amount='AMOUNT' name='PAYMENT NAME' method='METHOD' category='CATEGORY' status='STATUS' activateDelete={false} setShowPopup= {setShowPopup} />
      {transactions.map((tx, index) => {
        return(
          <Transactionheader
            key={tx.id}
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
            onDeleteClick={()=>{setTransactionIndex(tx.id)}}
          />
        )
      })}        
    </div>
  )
}
