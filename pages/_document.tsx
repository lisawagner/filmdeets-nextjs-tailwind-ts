{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link> */}

// font-family: 'Open Sans', sans-serif;

import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html>
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
    <body className='font-opensans'>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;