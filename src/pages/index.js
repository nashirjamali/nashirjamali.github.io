import Head from "next/head";
import Nav from "src/parts/Nav";
import Hero from "src/parts/Hero";
import AboutMe from "src/parts/AboutMe";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nashir Jamali | Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main>
        <Hero />
        <AboutMe />
      </main>
    </div>
  );
}
