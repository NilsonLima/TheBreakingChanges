/* eslint-disable import/no-extraneous-dependencies */
import { Fragment } from 'react';

import Head from 'next/head';

import Layout from '../src/components/Layout';

import 'highlight.js/styles/github-dark.css';

import '../styles/global.css';

export default function App({ Component, pageProps, router }) {
  const Wrapper = router.route === '/404' ? Fragment : Layout;

  return (
    <>
      <Head>
        <title>The Breaking Changes</title>
        <meta property="og:title" content="The Breaking Changes" key="title" />
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}
