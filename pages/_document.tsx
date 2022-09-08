{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link> */}

// font-family: 'Open Sans', sans-serif;

import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel='stylesheet' />
    </Head>
    <body className='font-opensans'>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;