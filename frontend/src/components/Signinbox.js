import React from 'react'
import './Signinbox.css'

export default function Signinbox() {
  return (
    <div className='signinbox'>
        <div className='signintitle'>Sign In</div>
        <div className='emailtitle'>Email</div>
        <input type='text' placeholder='Enter your email address' className='emailbox'/>
        <div className='passwordtitle'>Password</div>
        <input type='text' placeholder='Enter your password' className='passwordbox'/>
        <div className='signinbutton'>Sign in</div>
        <div className='continuewith'>
            <div className='googlesigninbutton'>G</div>
            <div className='applesigninbutton'>A</div>
        </div>
        <div className='signuprow'>Don't have an account?&nbsp;<div className='signupbutton'>Sign up</div></div>
    </div>
  )
}
