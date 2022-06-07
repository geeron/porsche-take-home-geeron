import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Masthead from "../components/masthead";
import About from "../components/about";
import Elevator from "../components/elevator";
import Works from "../components/works";
import Footer from "../components/footer";
import Contact from "../components/contact";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Porsche 911</title>
        <meta name="description" content="Bird's dont fly in a cage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <About />
      <Elevator />
      <Works />
      <Masthead />
      <Footer />
    </div>
  );
};

export default Home;
