import React from 'react'
import './BudgetTrackCard.css'

export default function BudgetTrackCard({title, amount, percent, color}) {
  return (
    <div className='budgettrackcard'>
        <div className='title'>{title}</div>
        <div className='amount'>{amount}</div>
        <div className='percent' style={{
            backgroundColor: color
        }}>{percent}</div>
    </div>
  )
}
