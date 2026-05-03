import React from 'react'
import './Transactionheader.css'

export default function Transactionheader({backgroundColor, showShadow, date, amount, name, method, category, status, activateDelete, setShowPopup}) {
  return (
    <div className='transheaderrow' style={{
        backgroundColor: backgroundColor,
        boxShadow: showShadow? '0px 2px 0px 0px rgba(154, 151, 151, 0.7)': 'none'
    }}>
        <div className='transactiondate'>{date}</div>
        <div className='transactionamount'>{amount}</div>
        <div className='transactionpayment'>{name}</div>
        <div className='transactionmethod'>{method}</div>
        <div className='transactioncategory'>{category}</div>
        <div className='transactionstatus'>
          {status}
          {activateDelete && <div className='deleteButton' onClick={()=> setShowPopup(true)}></div>}
        </div>
    </div>
  )
}
