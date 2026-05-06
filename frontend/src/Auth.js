import React, { useState } from 'react'
import './Auth.css'
import Signinbox from './components/Signinbox'
import Signupbox from './components/Signupbox'

export default function Auth({ setIsAuth }) {
  const [isSignIn, setIsSignIn] = useState(true)
  return (
    <div className='mainbody'>
        <div className='signpage'>
            {isSignIn && <Signinbox setIsAuth={setIsAuth} setIsSignIn={setIsSignIn}/>}
            {!isSignIn && <Signupbox setIsSignIn={setIsSignIn}/>}
        </div>
        <div className='infopage'></div>
    </div>
  )
}
