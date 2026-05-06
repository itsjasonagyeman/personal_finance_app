import React, { useState } from 'react'
import './Signupbox.css'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default function Signupbox({ setIsSignIn }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignUp() {
    setError('')

    // basic validation
    if (!firstName || !lastName || !email || !password) {
      setError('Please fill in all fields.')
      return
    }

    setLoading(true)
    try {
      // 1. create the user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      // 2. save display name to Firebase Auth profile
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`
      })

      // 3. save extra info to Firestore (uid is the link between auth and db)
      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email,
        createdAt: new Date().toISOString()
      })

      // 4. take them to sign in
      setIsSignIn(true)

    } catch (err) {
      setError(friendlyError(err.code))
    } finally {
      setLoading(false)
    }
  }

  function friendlyError(code) {
    switch (code) {
      case 'auth/email-already-in-use':  return 'An account with that email already exists.'
      case 'auth/invalid-email':         return 'Please enter a valid email.'
      case 'auth/weak-password':         return 'Password must be at least 6 characters.'
      default:                           return 'Something went wrong. Please try again.'
    }
  }

  return (
    <div className='signupbox'>
      <div className='signuptitle'>Sign Up</div>
      <div className='nametitlerow'>
        <div className='firstnamesignuptitle'>First Name</div>
        <div className='lastnamesignuptitle'>Last Name</div>
      </div>
      <div className='nameinputrow'>
        <input
          type='text'
          placeholder='Enter your first name'
          className='firstnamesignupbox'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter your last name'
          className='lastnamesignupbox'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className='emailsignuptitle'>Email</div>
      <input
        type='text'
        placeholder='Enter your email address'
        className='emailsignupbox'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <div className='passwordsignuptitle'>Password</div>
      <input
        type='password'
        placeholder='Enter your password'
        className='passwordsignupbox'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {error && <div className='errortext'>{error}</div>}
      <div
        className='signupmainbutton'
        onClick={handleSignUp}
        disabled={loading}
      >
        {loading ? 'Creating account...' : 'Sign up'}
      </div>
      <div className='continuewith'>
        <div className='googlesignupbutton'>G</div>
        <div className='applesignupbutton'>A</div>
      </div>
      <div className='signinrow'>
        Already have an account?&nbsp;
        <div className='signinminorbutton' onClick={() => setIsSignIn(true)}>Sign in</div>
      </div>
    </div>
  )
}