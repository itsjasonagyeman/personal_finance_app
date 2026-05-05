import React from 'react'
import './Navbar.css'

function NavIcon(){
  return(
    <div className='navicon'>
      H
    </div>
  )
}

function NavProfile({profilename, profileemail}){
  return(
    <div className='navprofile'>
      <div className='profilepicture'></div>
      <div className='profileinfo'>
        <div className='profilename'>{profilename}</div>
        <div className='profileemail'>{profileemail}</div>
      </div>
    </div>
  )
}

export default function Navbar({titlename, titlemessage, profilename, profileemail}) {
  return (
    <div className='navbar'>
        <div className='navtitle'>
          <div className='titlename'>{titlename}</div>
          <div className='titlemessage'>{titlemessage}</div>
        </div>
        <div className='navicons'>
          <NavIcon/>
          <NavIcon/>
          <NavProfile profilename={profilename} profileemail={profileemail}/>
        </div>
      </div>
  )
}
