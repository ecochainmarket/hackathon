import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>Solana Pay Store</title>
      <meta name="title" content="EcoChain Market" />
      <meta name="description" content="Buying using Solana Pay!" />

      {/* Facebook */}
      <meta property="og:type" content="" />
      <meta property="og:url" content="" />
      <meta property="og:title" content="Solana Pay Store" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />

      {/* Twitter */}
      <meta property="twitter:url" content="" />
      <meta property="twitter:title" content="Solana Pay Store" />
      <meta property="twitter:description" content="" />
      <meta property="twitter:image" content="" />
    </Head>
  );
}
