import React from 'react'
import './Transactionheader.css'

export default function Transactionheader({backgroundColor, showShadow}) {
  return (
    <div className='transheaderrow' style={{
        backgroundColor: backgroundColor,
        boxShadow: showShadow? '0px 2px 0px 0px rgba(154, 151, 151, 0.7)': 'none'
    }}>
        <div className='transactiondate'>DATE</div>
        <div className='transactionamount'>AMOUNT</div>
        <div className='transactionpayment'>PAYMENT NAME</div>
        <div className='transactionmethod'>METHOD</div>
        <div className='transactioncategory'>CATEGORY</div>
        <div className='transactionstatus'>STATUS</div>
    </div>
  )
}
