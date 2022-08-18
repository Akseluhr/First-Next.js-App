import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Third party sources is added here with <script src='' /> tag */}
      </Head>
      <h1>First Post</h1>
      <Image
        src='/images/aki GH.png'
        height={150}
        width={150}
        alt='Aksel Uhr'
      />
      <button>
        <Link href='/'>Back to home</Link>
      </button>
    </>
  );
}