import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import type { AppProps } from 'next/app'
import Navbar from '../src/components/Navbar'
import { AuthContextProvider } from '../src/context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../src/components/ProtectedRoute'
import { useAuth } from '../src/context/AuthContext';
import React, { useEffect } from 'react';
import UnProtectedRoute from '../src/components/UnProtectedRoute'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const noAuthRequired = ['/', '/login', '/signup']

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const auth = useAuth()

  useEffect(() => {
    console.log(auth)
  }, [auth])

  return (
    <AuthContextProvider>
      <QueryClientProvider client={new QueryClient()}>
        <Navbar />
        {noAuthRequired.includes(router.pathname) ? (
          <UnProtectedRoute>
            <Component {...pageProps} />
          </UnProtectedRoute>
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthContextProvider>
  )
}

export default MyApp