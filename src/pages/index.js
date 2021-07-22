import Head from "next/head";
import Nav from "src/parts/Nav";
import Hero from "src/parts/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nashir Jamali | Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* begin:Nav */}
      <Nav />
      {/* end:Nav */}

      <main>
        {/* begin:Hero */}
        <Hero />
        {/* end:Hero */}
      </main>
    </div>
  );
}
