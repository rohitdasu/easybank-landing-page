import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import {
  articles,
  features,
  navigations,
  navs,
  otherNavigations,
  socials,
} from "@/data";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Articles } from "@/components/Articles";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>EasyBank</title>
        <meta name="description" content="Next generation digital banking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen">
        <Navbar navigations={navigations} />
        <Hero />
        <Features features={features} />
        <Articles articles={articles} />
        <Footer
          socials={socials}
          navigations={navs}
          otherNavigations={otherNavigations}
        />
      </main>
    </>
  );
}
