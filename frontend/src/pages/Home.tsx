import { Hero } from "../features/Hero";
import { CompanyMarquee } from "../features/CompanyMarquee";
import { SecondaryStrip } from "../features/SecondaryStrip";
import { Announcements } from "../features/Announcements";

import { HomeHeader } from "../components/global/Header";
import { Footer } from "../components/global/Footer";

import { useState, useEffect } from "react";


export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans">
      <div className="flex flex-col min-h-[85vh]">
        <HomeHeader scrolled={scrolled} />
        <Hero className="flex-1 pt-24" />
      </div>

      <CompanyMarquee />
      <SecondaryStrip />
      <Announcements />

      <Footer />
    </div>
  );
}
