import React from "react";
import Head from "next/head";

type RoomsLayoutProps = {
  children: React.ReactNode;
};

const RoomsLayout = ({ children }: RoomsLayoutProps) => {
  return (
    <>
      {/* Metadata for the page */}
      <Head>
        <title>Rooms - Ubuntu Backpackers</title>
        <meta
          name="description"
          content="Explore the different rooms available at Ubuntu Backpackers in Mutare. From cozy dorms to private ensuites, find the perfect stay for your trip."
        />
        <meta property="og:title" content="Rooms - Ubuntu Backpackers" />
        <meta
          property="og:description"
          content="Explore the different rooms available at Ubuntu Backpackers in Mutare."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Main content (Rooms page content will be injected here) */}
      <main className="container mx-auto px-6 py-12">{children}</main>
    </>
  );
};

export default RoomsLayout;