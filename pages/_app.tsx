import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// components
// import { Layout } from '../components'
import { Layout } from '../components'
// next imports
import type { AppProps } from 'next/app'
// styles
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
