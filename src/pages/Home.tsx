/*
# Homepage
One hero (not a carousel of 8)
CFP Career Journey CTA
Find a Financial Advisor CTA
Latest News (3 cards, linking to actual pages — not PDFs)
No duplicate sections
*/

import { Link } from "react-router-dom";

import { Page } from "../components/layout/Page";
import CorporateMembers from "../features/CorporateMembers";


function Hero() {
  return (
    <div>
      <section className="py-50 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Financial Planning Starts Here
        </h1>

        <p className="text-gray-600">
          Build a career or find expert advice.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 px-8">
        <Link
          to="/cfp/types"
          className="p-6 border rounded-xl hover:shadow"
        >
          CFP Career Journey
        </Link>

        <Link
          to="/advisor/search"
          className="p-6 border rounded-xl hover:shadow"
        >
          Find a Financial Advisor
        </Link>
      </section>
    </div>
  );
}


// ALL News will be here
// ข่าวสมาคม, maybe link to dedicated page
function News() {
  return (
    <section className="py-5">
      <h2 className="p-2 text-center">Latest News</h2>
      <div className="h-50 grid md:grid-cols-3 gap-6 px-8">
        <div className="p-6 border rounded-xl hover:shadow">News Card 1</div>
        <div className="p-6 border rounded-xl hover:shadow">News Card 2</div>
        <div className="p-6 border rounded-xl hover:shadow">News Card 3</div>
      </div>
    </section>
  );
}



export default function Home() {
  return (
    <Page>
      <Hero />
      <News />
      <CorporateMembers />
    </Page>
  );
}
