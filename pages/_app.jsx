/* eslint-disable import/no-extraneous-dependencies */
import { Fragment } from 'react';

import Head from 'next/head';

import Layout from '../src/components/Layout';
import translations from '../src/translations';

import 'highlight.js/styles/github-dark.css';

import '../styles/global.css';

export default function App({ Component, pageProps, router }) {
  const Wrapper = router.route === '/404' ? Fragment : Layout;

  return (
    <>
      <Head>
        <title>The Breaking Changes</title>
        {/* default OG data */}
        <meta property="og:title" content="The Breaking Changes" key="title" />
        <meta
          property="og:description"
          content={translations.description}
          key="description"
        />
        <meta property="og:url" content="https://thebreakingchanges.com" key="url" />
        <meta property="og:site_name" content="thebreakingchanges.com" key="site_name" />
        {/* image OG data */}
        <meta property="og:image" content="https://thebreakingchanges.com/planner.png" key="planner" />
        <meta property="og:image:alt" content="An image with dark gradient background containing the blog name at center along with website name" key="planner_alt" />
        <meta property="og:image:width" content="1366" key="planner_width" />
        <meta property="og:image:height" content="768" key="planner_height" />
        {/* Twitter OG data */}
        <meta name="twitter:title" content="The Breaking Changes" key="twitter_title" />
        <meta name="twitter:card" content="summary_large_image" key="twitter_card" />
        <meta name="twitter:site" content="@nilsonjrx" key="twitter_site" />
        <meta name="twitter:creator" content="@nilsonjrx" key="twitter_creator" />
        <meta name="twitter:description" content={translations.description} key="twitter_description" />
        <meta name="twitter:image:src" content="https://thebreakingchanges.com/planner.png" key="twitter_image" />
        <meta name="twitter:image:alt" content="An image with dark gradient background containing the blog name at center along with website name" key="twitter_image_alt" />
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}
