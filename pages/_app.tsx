import Head from 'next/head';
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// components
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
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#010404" />
        <meta
          name='description'
          content='filmClu is a movie search app created with NextJS, tailwind and typescript'/>
        <link rel="apple-touch-icon" href="/logo192.png" /> 
        <link rel="manifest" href="/manifest.json" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel='stylesheet' />

        <title>filmClu 2.0 | Amazing Movies to Discover</title>
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
