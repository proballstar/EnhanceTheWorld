import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

const UnProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/auth/events/all')
    }
  }, [router, user])

  return <>{user ? null : children}</>
}

export default UnProtectedRoute
