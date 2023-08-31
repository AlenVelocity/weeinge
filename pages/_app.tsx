import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Weeinge - Get Weeb'd</title>
        <meta name="description" content="Get'd weebd" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
