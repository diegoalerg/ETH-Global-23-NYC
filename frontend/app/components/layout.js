import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ children, title = '', description = '' }) {
  return (
    <>
      <Head>
        <title>{`FinalPass - ${title}`}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <Header />
      {children}

      <Footer />
    </>
  );
}
