// Packages
import { ReactElement } from 'react';
import Head from 'next/head';

// Templates
import { ShowTemplate } from 'templates';

const Show = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Capputeeno - Site de e-commerce.</title>
      </Head>

      <ShowTemplate />
    </>
  );
};

export default Show;
