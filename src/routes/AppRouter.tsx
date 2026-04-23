/*
# Nav
About — Overview, Board & Staff, Rules & Regulations, Annual Reports
CFP Certification — Member Types & Benefits, How to Get Certified, Maintain & Renew, FAQ
Resources — Documents, News, Announcements, Videos, Alliance Companies
Find a Financial Advisor — What is Financial Planning, Search for an Advisor, Contact
Training — For Students, For Practitioners, For Training Schools, For Legal Entities
Contact — Address, Staff Directory
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/info/About";
import FinancialPlanning from "../pages/FinancialPlanning";
import FindPlanner from "../pages/FindPlanner";
import CareerPath from "../pages/CareerPath";
import ForMember from "../pages/ForMember";
import Contact from "../pages/info/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/financial_planning" element={<FinancialPlanning />} />
        <Route path="/find_planner" element={<FindPlanner />} />
        <Route path="/career_path" element={<CareerPath />} />
        <Route path="/become_member" element={<ForMember />} />
        <Route path="/contact" element={<Contact />} />
        {/* "/login" links to real login site */}
      </Routes>
    </BrowserRouter>
  );
}
