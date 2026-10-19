

import Hero from "@/src/components/landing/Hero";
import HowTo from "@/src/components/landing/HowTo";
import LLM from "@/src/components/landing/LLM";

import Navigation from "@/src/components/layout/Navigation";
import Footer from "@/src/components/layout/Footer";

export default function Home() {
  return (
    <>
    <Navigation/>
    <Hero/>
    <HowTo/>
    <LLM/>
    <Footer/>
    </>
  );
}
