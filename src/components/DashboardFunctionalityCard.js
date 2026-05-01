import React from 'react'
import './DashboardFunctionalityCard.css'

export default function DashboardFunctionalityCard({cardwidth, text}) {
  return (
    <div className='card' style={{
        width: cardwidth
    }}>{text}</div>
  )
}
