import dynamic from "next/dynamic";
import { useState } from "react";
import Link from 'next/link';
import Head from 'next/head';

const HelloComponent = dynamic(() => import("../components/hello"), {
  loading: () => <b>Loading...</b>,
});

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Head>
        <title>Homep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Home component
      <div>{show ? <HelloComponent /> : null}</div>
      <div>
        <button onClick={() => setShow((pV) => !pV)}>{!show ? 'Show' : 'Hide'}</button>
      </div>
      <button> 
        <Link href="/posts/first-post">Post Here</Link>
      </button>
    </div>
  );
}