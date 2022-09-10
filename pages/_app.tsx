import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// next imports
import type { AppProps } from 'next/app'
// styles
import '../styles/globals.css'

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={client}>
          <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
