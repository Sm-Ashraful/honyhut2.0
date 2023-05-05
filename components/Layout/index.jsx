import React from "react";
import Head from "next/head";

import Header from "../Header";
// import ImageSlider from '../ImageSlider';
import Footer from "../Footer";
import BottomMenu from "../Bottom-menu";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>HonyHut</title>
        <meta
          name="description"
          content="Hony hut is for Honey, Pill, Liquid Shots, Condoms, Raw paper etc."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/honeyhut logo.png" />
      </Head>
      <main className="min-h-screen">
        <Header />
        {children}
        <BottomMenu />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
