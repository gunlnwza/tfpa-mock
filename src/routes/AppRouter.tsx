// Nav
// About — Overview, Board & Staff, Rules & Regulations, Annual Reports
// CFP Certification — Member Types & Benefits, How to Get Certified, Maintain & Renew, FAQ
// Resources — Documents, News, Announcements, Videos, Alliance Companies
// Find a Financial Advisor — What is Financial Planning, Search for an Advisor, Contact
// Training — For Students, For Practitioners, For Training Schools, For Legal Entities
// Contact — Address, Staff Directory

// Homepage
// One hero (not a carousel of 8)
// CFP Career Journey CTA
// Find a Financial Advisor CTA
// Latest News (3 cards, linking to actual pages — not PDFs)
// No duplicate sections

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Core
import Home from "../pages/Home";

// About
import Overview from "../pages/about/Overview";

// CFP
import Types from "../pages/cfp/Types";
import Certification from "../pages/cfp/Certification";
import Renewal from "../pages/cfp/Renewal";
import FAQ from "../pages/cfp/FAQ";

// Resources
import Documents from "../pages/resources/Documents";
import News from "../pages/resources/News";
import Announcements from "../pages/resources/Announcements";
import Videos from "../pages/resources/Videos";
import Companies from "../pages/resources/Companies";

// Advisor
import AdvisorAbout from "../pages/advisor/About";
import Search from "../pages/advisor/Search";
import AdvisorContact from "../pages/advisor/Contact";

// Training
import Students from "../pages/training/Students";
import Practitioners from "../pages/training/Practitioners";
import Schools from "../pages/training/Schools";
import Entities from "../pages/training/Entities";

// Contact
import Contact from "../pages/Contact";

// Login
import Login from "../pages/login";

// Privacy
import PrivacyPolicy from "../pages/PrivacyPolicy";

// Sitemap
import Sitemap from "../pages/Sitemap";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about/overview" element={<Overview />} />

        {/* CFP */}
        <Route path="/cfp/types" element={<Types />} />
        <Route path="/cfp/certification" element={<Certification />} />
        <Route path="/cfp/renewal" element={<Renewal />} />
        <Route path="/cfp/faq" element={<FAQ />} />

        {/* Resources */}
        <Route path="/resources/documents" element={<Documents />} />
        <Route path="/resources/news" element={<News />} />
        <Route path="/resources/announcements" element={<Announcements />} />
        <Route path="/resources/videos" element={<Videos />} />
        <Route path="/resources/companies" element={<Companies />} />

        {/* Advisor */}
        <Route path="/advisor/about" element={<AdvisorAbout />} />
        <Route path="/advisor/search" element={<Search />} />
        <Route path="/advisor/contact" element={<AdvisorContact />} />

        {/* Training */}
        <Route path="/training/students" element={<Students />} />
        <Route path="/training/practitioners" element={<Practitioners />} />
        <Route path="/training/schools" element={<Schools />} />
        <Route path="/training/entities" element={<Entities />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Login */}
        <Route path="/login" element={<Login />}/>

        {/* Footer */}
        <Route path="/privacy_policy" element={<PrivacyPolicy />}/>
        <Route path="/sitemap" element={<Sitemap />}/>
      </Routes>
    </BrowserRouter>
  );
}
