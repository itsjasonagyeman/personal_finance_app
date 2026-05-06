import React from 'react'
import './Signupbox.css'

export default function Signupbox() {
  return (
    <div className='signupbox'>
        <div className='signuptitle'>Sign Up</div>
        <div className='nametitlerow'>
            <div className='firstnamesignuptitle'>First Name</div>
            <div className='lastnamesignuptitle'>Last Name</div>
        </div>
        <div className='nameinputrow'>
            <input type='text' placeholder='Enter your first name' className='firstnamesignupbox'/>
            <input type='text' placeholder='Enter your last name' className='lastnamesignupbox'/>
        </div>
        <div className='emailsignuptitle'>Email</div>
        <input type='text' placeholder='Enter your email address' className='emailsignupbox'/>
        <div className='passwordsignuptitle'>Password</div>
        <input type='password' placeholder='Enter your password' className='passwordsignupbox'/>
        <div className='signupmainbutton'>Sign up</div>
        <div className='continuewith'>
            <div className='googlesignupbutton'>G</div>
            <div className='applesignupbutton'>A</div>
        </div>
        <div className='signinrow'>Already have an account?&nbsp;<div className='signinminorbutton'>Sign in</div></div>
    </div>
  )
}
