import { Page } from "../components/layout/Page";

import { Hero } from "../features/Hero";
import { CompanyMarquee } from "../features/CompanyMarquee";
import { SecondaryStrip } from "../features/SecondaryStrip";
import { Announcements } from "../features/Announcements";


export default function Home() {
  return (
    <Page>
      <Hero />
      <CompanyMarquee />
      <SecondaryStrip />
      <Announcements />
    </Page>
  );
}
