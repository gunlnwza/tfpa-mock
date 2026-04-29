import { Page } from "../components/layout/Page";

import { Hero } from "../features/Hero";
import { CompanyMarquee } from "../features/CompanyMarquee";
import { SecondaryStrip } from "../features/SecondaryStrip";
import { Announcements } from "../features/Announcements";

import { Header } from "../components/layout/global/Header";
import { Footer } from "../components/layout/global/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <div className="flex flex-col min-h-screen">
        <Header />
        <Hero className="flex-1" />
      </div>

      <CompanyMarquee />
      <SecondaryStrip />
      <Announcements />

      <Footer />
    </div>
  );
}
