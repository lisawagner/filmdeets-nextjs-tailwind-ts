import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// next imports
import type { AppProps } from 'next/app'
// components
import { Layout } from '../components'
// styles
import '../styles/globals.css'

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
