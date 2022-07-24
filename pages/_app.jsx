/* eslint-disable import/no-extraneous-dependencies */
import Head from 'next/head';

import Layout from '../src/components/Layout';

import 'highlight.js/styles/github-dark.css';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Breaking Changes</title>
        <meta property="og:title" content="The Breaking Changes" key="title" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
