import Image from "next/image";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Team from "./Components/Team";
import Testimonials from "./Components/Testimonials";
import CallToAction from "./Components/CallToAction";
import NewsletterSignup from "./Components/NewsletterSignup";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <CallToAction />
      <NewsletterSignup />
    </div>
  );
}
