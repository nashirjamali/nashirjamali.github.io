import Head from "next/head";
import Nav from "src/parts/Nav";
import Hero from "src/parts/Hero";
import AboutMe from "src/parts/AboutMe";
import Portfolio from "src/parts/Portfolio";
import Services from "src/parts/Services";
import Contact from "src/parts/Contact";

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
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
