import React, { useState } from 'react'
import './DashboardFunctionalityCard.css'



export default function DashboardFunctionalityCard({cardwidth, text, hoverbackgroundcolor, hovertextcolor, hovercursor, onClickFunction}) {
  const [hover, setHovered] = useState(false)

  return (
    <div className='card' 
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onClick={onClickFunction}
    style={{
      backgroundColor: hover ? hoverbackgroundcolor : 'white',
      color: hover ? hovertextcolor: 'black',
      cursor: hover? hovercursor: 'default',
      width: cardwidth
    }}>{text}</div>
  )
}
