import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import About from "../pages/info/About";
import Contact from "../pages/info/Contact";
import Sitemap from "../pages/info/Sitemap";

import FinancialPlanning from "../pages/for_public/FinancialPlanning";
import FindPlanner from "../pages/for_public/FindPlanner";

import CareerPath from "../pages/for_pro/CareerPath";
import ForMember from "../pages/for_pro/ForMember";
import FAQ from "../pages/info/FAQ";
import Resources from "../pages/info/Resources";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/sitemap" element={<Sitemap />} />
        
        <Route path="/financial_planning" element={<FinancialPlanning />} />
        <Route path="/find_planner" element={<FindPlanner />} />

        <Route path="/career_path" element={<CareerPath />} />
        <Route path="/become_member" element={<ForMember />} />

        {/* path="/login" links to real member's login site */}

        <Route path="faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}
