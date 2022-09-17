import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
// components
import Layout from '../components/Layout'
// next imports
import type { AppProps } from 'next/app'
// styles
import '../styles/globals.css'

// const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <>
      {/* <QueryClientProvider client={client}> */}
      <QueryClientProvider client={queryClient}>
        {/* <Hydrate state={pageProps.dehydratedState}> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </Hydrate> */}
      </QueryClientProvider>
    </>
  )
}

export default MyApp
