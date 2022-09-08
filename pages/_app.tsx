import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={client}>
        <Head>
          <title>MovieDeets</title>
          <meta name="description" content="MovieDeets, an app search movie info and to look up new movies to watch. Made with Nextjs, Tailwind, Typescript and The Movie Database API." />
        </Head>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
