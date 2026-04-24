/*
# Homepage
One hero (not a carousel of 8)
CFP Career Journey CTA
Find a Financial Advisor CTA
Latest News (3 cards, linking to actual pages — not PDFs)
No duplicate sections
*/

import { Page } from "../components/layout/Page";

import { Hero } from "../features/Hero";
import { News } from "../features/News";
import CorporateMembers from "../features/CorporateMembers";


export default function Home() {
  return (
    <Page>
      <Hero />
      <News />
      <CorporateMembers />
    </Page>
  );
}
