import Hero from "../components/home/Hero";
import About from "../components/home/About";
import ValueProposition from "../components/home/ValueProposition";
import ServicesSection from "../components/home/ServicesSection";
import Process from "../components/home/Process";
import TechStack from "../components/home/TechStack";
import WhyUs from "../components/home/WhyUs";
import CTA from "../components/home/CTA";


export default function Home() {
  return (
    <>

      <Hero />

      <About />

      <ValueProposition />

      <ServicesSection />

      <Process />

      <TechStack />

      <WhyUs />

      <CTA />
    </>
  );
}