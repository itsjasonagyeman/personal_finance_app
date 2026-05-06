import React, { useState } from 'react'
import './Signinbox.css'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Signinbox({ setIsAuth, setIsSignIn }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignIn() {
    setError('')
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setIsAuth(true)  // takes user to App
    } catch (err) {
      setError(friendlyError(err.code))
    } finally {
      setLoading(false)
    }
  }

  function friendlyError(code) {
    switch (code) {
      case 'auth/invalid-email':       return 'Please enter a valid email.'
      case 'auth/user-not-found':      return 'No account found with that email.'
      case 'auth/wrong-password':      return 'Incorrect password.'
      case 'auth/too-many-requests':   return 'Too many attempts. Try again later.'
      default:                         return 'Something went wrong. Please try again.'
    }
  }

  return (
    <div className='signinbox'>
      <div className='signintitle'>Sign In</div>
      <div className='emailtitle'>Email</div>
      <input
        type='text'
        placeholder='Enter your email address'
        className='emailbox'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <div className='passwordtitle'>Password</div>
      <input
        type='password'
        placeholder='Enter your password'
        className='passwordbox'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {error && <div className='errortext'>{error}</div>}
      <div
        className='signinbutton'
        onClick={handleSignIn}
        disabled={loading}
      >
        {loading ? 'Signing in...' : 'Sign in'}
      </div>
      <div className='continuewith'>
        <div className='googlesigninbutton'>G</div>
        <div className='applesigninbutton'>A</div>
      </div>
      <div className='signuprow'>
        Don't have an account?&nbsp;
        <div className='signupbutton' onClick={() => setIsSignIn(false)}>Sign up</div>
      </div>
    </div>
  )
}