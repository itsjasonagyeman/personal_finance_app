import React from 'react'
import './Auth.css'
import Signinbox from './components/Signinbox'
import Signupbox from './components/Signupbox'

export default function Auth({ setIsAuth }) {
  return (
    <div className='mainbody'>
        <div className='signpage'>
            <Signinbox setIsAuth={setIsAuth}/>
        </div>
        <div className='infopage'></div>
    </div>
  )
}
