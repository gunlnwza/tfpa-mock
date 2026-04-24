import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import About from "../pages/info/About";
import Contact from "../pages/info/Contact";
import Sitemap from "../pages/info/Sitemap";

import FinancialPlanning from "../pages/for_public/FinancialPlanning";
import FindPlanner from "../pages/for_public/FindPlanner";

import CareerPath from "../pages/for_pro/CareerPath";
import ForMember from "../pages/for_pro/ForMember";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sitemap" element={<Sitemap />} />
        
        <Route path="/financial_planning" element={<FinancialPlanning />} />
        <Route path="/find_planner" element={<FindPlanner />} />

        <Route path="/career_path" element={<CareerPath />} />
        <Route path="/become_member" element={<ForMember />} />
        {/* path="/login" links to real member's login site */}
      </Routes>
    </BrowserRouter>
  );
}
