import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// components
// import { Layout } from '../components'
import { Layout2 } from '../components'
// next imports
import type { AppProps } from 'next/app'
// styles
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout2>
          <Component {...pageProps} />
        </Layout2>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
