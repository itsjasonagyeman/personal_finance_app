import { useState, useEffect } from 'react'
import { auth, db } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

export function useCurrentUser() {
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // fetch the extra info you saved in Firestore on signup
        const snap = await getDoc(doc(db, 'users', firebaseUser.uid))
        if (snap.exists()) {
          const data = snap.data()
          setUserProfile({
            firstName: data.firstName,
            lastName: data.lastName,
            fullName: `${data.firstName} ${data.lastName}`,
            email: data.email,
          })
        }
      } else {
        setUserProfile(null)
      }
    })
    return () => unsubscribe()
  }, [])

  return userProfile
}