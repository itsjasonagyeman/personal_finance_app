import './TransactionsPreviewCard.css'
import React, {useState, useEffect} from 'react'


function TransactionInfoCard({date, amount, paymentName, method,category}) {
  return (
    <div className='transactioninfo'>
            <div className='tridate'>{date}</div>
            <div className='triamount'>{amount}</div>
            <div className='triname'>{paymentName}</div>
            <div className='trimethod'>{method}</div>
            <div className='tricategory'>{category}</div>
    </div>
  )
}


export default function TransactionsPreviewCard() {
  const [transactions, setTransactions] = useState([])
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/transactions')
    .then(res => res.json())
    .then(data => setTransactions(data))
    .catch(err => console.log(err))
  }, [])
  const most_recent_transaction = transactions.length > 0 ? transactions[transactions.length - 1] : null
  const next_recent_transaction = transactions.length > 0 ? transactions[transactions.length - 2] : null
  return (
    <div className='transactionpreviewcard'>
        <div className='row1'>
            Recent Transactions
            <div></div>
        </div>
        <div className='titleinfo'>
            <div className='titledate'>Date</div>
            <div className='titleamount'>Amount</div>
            <div className='titleinfoname'>Payment Name</div>
            <div className='titlemethod'>Method</div>
            <div className='titlecategory'>Category</div>
        </div>
        {most_recent_transaction && <TransactionInfoCard  date={most_recent_transaction.date} amount={`$${most_recent_transaction.amount}`} paymentName={most_recent_transaction.name} method={most_recent_transaction.method} category={most_recent_transaction.category}/>}
        {next_recent_transaction && <TransactionInfoCard  date={next_recent_transaction.date} amount={`$${next_recent_transaction.amount}`} paymentName={next_recent_transaction.name} method={next_recent_transaction.method} category={next_recent_transaction.category}/>}
    </div>
  )
}
