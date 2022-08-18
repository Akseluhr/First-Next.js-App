import dynamic from "next/dynamic";
import { useState } from "react";

const HelloComponent = dynamic(() => import("../components/hello"), {
  loading: () => <b>Loading...</b>,
});

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
      Home component
      <div>{show ? <HelloComponent /> : null}</div>
      <div>
        <button onClick={() => setShow((pV) => !pV)}>{!show ? 'Show' : 'Hide'}</button>
      </div>
    </div>
  );
}