import React from "react";
import Head from "next/head";

import Header from "../Header/Header";
// import ImageSlider from '../ImageSlider';
import Footer from "../Footer";
import BottomMenu from "../Bottom-menu";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>honyhut</title>
        <meta
          name="description"
          content="Welcome to Honyhut - Your Trusted Source for Vapes, Male Enhancement Honey, and Shots | Quality Products for a Fulfilling Experience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/honeyhut logo.png" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11184558391"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11184558391');
            `,
          }}
        />
      </Head>
      <main className="min-h-screen">
        <Header />
        {children}

        <Footer />
      </main>
    </>
  );
};

export default Layout;
