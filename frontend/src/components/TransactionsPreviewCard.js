import './TransactionsPreviewCard.css'
import React from 'react'


function TransactionInfoCard({date, amount, paymentName, method,category}) {
  return (
    <div className='transactioninfo'>
            <div>{date}</div>
            <div>{amount}</div>
            <div>{paymentName}</div>
            <div>{method}</div>
            <div>{category}</div>
    </div>
  )
}


export default function TransactionsPreviewCard() {
  return (
    <div className='transactionpreviewcard'>
        <div className='row1'>
            Recent Transactions
            <div></div>
        </div>
        <div className='titleinfo'>
            <div>Date</div>
            <div>Amount</div>
            <div>Payment Name</div>
            <div>Method</div>
            <div>Category</div>
        </div>
        <TransactionInfoCard  date='28 Jun 12:30pm' amount='-$10' paymentName='Youtube' method='Momo' category='Subscription'/>
        <TransactionInfoCard  date='28 Jun 12:30pm' amount='-$5' paymentName='Youtube' method='Momo' category='Subscription'/>
    </div>
  )
}
