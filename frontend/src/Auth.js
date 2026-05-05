import React from 'react'
import './Auth.css'
import Signinbox from './components/Signinbox'
import Signupbox from './components/Signupbox'

export default function Auth() {
  return (
    <div className='mainbody'>
        <div className='signpage'>
            <Signupbox/>
        </div>
        <div className='infopage'></div>
    </div>
  )
}
