// Packages
import { ReactElement } from 'react';
import Head from 'next/head';

// Templates
import { HomeTemplate } from 'templates';

const App = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Capputeeno - Site de e-commerce.</title>
      </Head>

      <HomeTemplate />
    </>
  );
};

export default App;
