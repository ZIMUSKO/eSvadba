/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from 'react-apollo';


import withApollo from '../app-data/graphql/withApollo';

const MyApp = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    Component, pageProps, pageTitle, apollo,
  } = props;

  return (
    <>
      <Head>
        <title>{pageTitle || 'Moja svadba'}</title>
      </Head>
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default withApollo(MyApp);
