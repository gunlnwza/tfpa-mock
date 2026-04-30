import { Hero } from "../features/Hero";
import { CompanyMarquee } from "../features/CompanyMarquee";
import { SecondaryStrip } from "../features/SecondaryStrip";
import { Announcements } from "../features/Announcements";

import { NavBar } from "../components/layout/global/Header";
import { Footer } from "../components/layout/global/Footer";
import { Link } from "react-router-dom";

import tfpaLogoBlack from "../assets/logos/tfpa.png"
import tfpaLogoWhite from "../assets/logos/tfpa_white.png"

import { useState, useEffect } from "react";


function HomeHeader({ scrolled }: { scrolled: boolean } ) {
  const logo = (scrolled) ? tfpaLogoBlack : tfpaLogoWhite;

  return (
    <header
      className={`
        fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4
        transition-all duration-300
        ${scrolled 
          ? "bg-white shadow-sm text-black" 
          : "bg-transparent text-white"}
      `}
    >
      <Link to="/">
        <img
          src={logo}
          alt="TFPA Logo"
          className="h-auto w-24 sm:w-32 md:w-64 transition-all duration-300"
        />
      </Link>

      <NavBar scrolled={scrolled} />
    </header>
  );
}

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
      <div className="flex flex-col min-h-screen">
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
