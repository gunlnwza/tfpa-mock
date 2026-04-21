import { Link } from "react-router-dom";

import tfpa from "../assets/logos/tfpa.png";

import aia from "../assets/logos/aia.png";
import allianzAyudhya from "../assets/logos/allianz_ayudhya.png";
import bangkokBank from "../assets/logos/bangkok_bank.png";
import bangkokLife from "../assets/logos/bangkok_life.png";
import bblam from "../assets/logos/bblam.png";
import bualuangSecurities from "../assets/logos/bualuang_securities.png";
import bualuangAsset from "../assets/logos/bualuang_asset.png";
import eastspring from "../assets/logos/eastspring.png";
import innovestX from "../assets/logos/innovest_x.png";
import kbank from "../assets/logos/kbank.png";
import kkp from "../assets/logos/kkp.png";
import krungsri from "../assets/logos/krungsri.png";
import krungsriAsset from "../assets/logos/krungsri_asset.png";
import krungthai from "../assets/logos/krungthai.png";
import ktam from "../assets/logos/ktam.png";
import muangThai from "../assets/logos/muang_thai.png";
import phillipCapital from "../assets/logos/phillp_capital.png";
import scb from "../assets/logos/scb.png";
import scbAsset from "../assets/logos/scb_asset.png";
import setLogo from "../assets/logos/set.png";
import thaiLife from "../assets/logos/thai_life.png";
import tisco from "../assets/logos/tisco.png";
import unionWealth from "../assets/logos/unionwealth.png";
import uob from "../assets/logos/uob.png";
import uobAsset from "../assets/logos/uob_asset.png";
import yuanta from "../assets/logos/yuanta.png";

const corporate_members = [
  { name: "AIA", logo: aia, url: "https://www.aia.co.th/th" },
  { name: "Allianz Ayudhya", logo: allianzAyudhya, url: "https://www.allianz.co.th/en_TH.html" },
  { name: "Bangkok Bank", logo: bangkokBank, url: "https://www.bangkokbank.com/" },
  { name: "Bangkok Life", logo: bangkokLife, url: "https://www.bangkoklife.com/th" },
  { name: "BBLAM", logo: bblam, url: "https://www.bblam.co.th/" },
  { name: "Bualuang Securities", logo: bualuangSecurities, url: "https://www.bualuang.co.th/" },
  { name: "Bualuang Asset", logo: bualuangAsset, url: "https://www.bcap.co.th/" },
  { name: "Eastspring", logo: eastspring, url: "https://www.tmbameastspring.com/" },
  { name: "InnovestX", logo: innovestX, url: "http://www.scbs.com/" },
  { name: "KBank", logo: kbank, url: "https://www.kasikornbank.com/" },
  { name: "KKP", logo: kkp, url: "https://www.kiatnakin.co.th/th/home" },
  { name: "Krungsri", logo: krungsri, url: "https://www.krungsri.com/bank/th/home.html" },
  { name: "Krungsri Asset", logo: krungsriAsset, url: "https://www.krungsriasset.com/TH/Home.html" },
  { name: "Krungthai", logo: krungthai, url: "https://krungthai.com/" },
  { name: "KTAM", logo: ktam, url: "https://www.ktam.co.th/th/Default.aspx" },
  { name: "Muang Thai", logo: muangThai, url: "https://www.muangthai.co.th/" },
  { name: "Phillip Capital", logo: phillipCapital, url: "https://www.phillipcapital.com/Home" },
  { name: "SCB", logo: scb, url: "https://www.scb.co.th" },
  { name: "SCB Asset", logo: scbAsset, url: "https://www.scbam.com/" },
  { name: "SET", logo: setLogo, url: "https://www.set.or.th/" },
  { name: "Thai Life", logo: thaiLife, url: "https://www.thailife.com/" },
  { name: "TISCO", logo: tisco, url: "https://www.tisco.co.th/" },
  { name: "Union Wealth", logo: unionWealth, url: "https://www.uwealth.co.th/" },
  { name: "UOB", logo: uob, url: "https://www.uob.co.th/default/index.page" },
  { name: "UOB Asset", logo: uobAsset, url: "https://www.uobam.co.th/th/home" },
  { name: "Yuanta", logo: yuanta, url: "http://www.yuanta.co.th/" },
];


/*
# Header
About — Overview, Board & Staff, Rules & Regulations, Annual Reports
CFP Certification — Member Types & Benefits, How to Get Certified, Maintain & Renew, FAQ
Resources — Documents, News, Announcements, Videos, Alliance Companies
Find a Financial Advisor — What is Financial Planning, Search for an Advisor, Contact
Training — For Students, For Practitioners, For Training Schools, For Legal Entities
Contact — Address, Staff Directory
*/
export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-8 py-4 shadow-sm">
        {/* Logo */}
        <Link to="/">
          <img src={tfpa} alt="TFPA Logo" className="h-10" />
        </Link>

        {/* Nav */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link to="/about/overview" className="hover:text-blue-600">About</Link>
          <Link to="/cfp/types" className="hover:text-blue-600">CFP Certification</Link>
          <Link to="/resources/documents" className="hover:text-blue-600">Resources</Link>
          <Link to="/advisor/search" className="hover:text-blue-600">Find a Financial Advisor</Link>
          <Link to="/training/students" className="hover:text-blue-600">Training</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/login" className="hover:text-blue-600">Login</Link>
        </nav>
      </header>

      {/* Primary CTAs */}
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

      {/* Latest News */}
      <section className="py-5">
        <h2 className="p-2 text-center">Latest News</h2>
        <div className="h-50 grid md:grid-cols-3 gap-6 px-8">
          <div className="p-6 border rounded-xl hover:shadow">News Card 1</div>
          <div className="p-6 border rounded-xl hover:shadow">News Card 2</div>
          <div className="p-6 border rounded-xl hover:shadow">News Card 3</div>
        </div>
      </section>

      {/* Corporate Members */}
      <section className="py-5">
        <h2 className="text-center">Corporate Members</h2>
        <div className="grid grid-cols-13 gap-6">
          {corporate_members.map((c) => (
            <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer">
              <img src={c.logo} alt={c.name} className="mx-auto h-12 object-contain" />
            </a>
          ))}
        </div>
      </section>
 
      {/* Footer */}
      <footer>


      </footer>
    </div>
  );
}
