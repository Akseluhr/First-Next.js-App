import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First Post</h1>
      <Image
        src='/images/aki GH.png'
        height={150}
        width={150}
        alt='Aksel Uhr'
      />

      {/* Third party sources is added here with <Script src='' /> tag from
        params: 
            strategy = when script should load 
            e.g. lazyOnload 
            or onLoad for immediate loading*/}
      {/*

      <button>
        <Link href='/'>Back to home</Link>
      </button>
      */}
    </Layout>
  );
}