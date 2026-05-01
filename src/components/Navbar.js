import React from 'react'
import './Navbar.css'

function NavIcon(){
  return(
    <div className='navicon'>
      H
    </div>
  )
}

function NavProfile(){
  return(
    <div className='navprofile'>
      <div className='profilepicture'></div>
      <div className='profileinfo'>
        <div className='profilename'>Adelaide Agyeman</div>
        <div className='profileemail'>adelaideagyeman@gmail.com</div>
      </div>
    </div>
  )
}

export default function Navbar({titlename, titlemessage}) {
  return (
    <div className='navbar'>
        <div className='navtitle'>
          <div className='titlename'>{titlename}</div>
          <div className='titlemessage'>{titlemessage}</div>
        </div>
        <div className='navicons'>
          <NavIcon/>
          <NavIcon/>
          <NavProfile/>
        </div>
      </div>
  )
}
