import { Link } from "react-router-dom";

import tfpa from "../assets/logos/tfpa.png";

/*
# Need place to live
Annual Reports
(DONE? Only Footer OK?) Rules & Regulations

# Header
(DONE) About — Overview, Board & Staff
CFP Certification — Member Types & Benefits, How to Get Certified, Maintain & Renew, FAQ
Resources — Documents, News, Announcements, Videos, Alliance Companies
Find a Financial Advisor — What is Financial Planning, Search for an Advisor, Contact
Training — For Students, For Practitioners, For Training Schools, For Legal Entities
(DONE) Contact — Address, Staff Directory
*/


export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-8 py-4 shadow-sm">
      {/* Logo */}
      <Link to="/">
        <img src={tfpa} alt="TFPA Logo" className="h-10" />
      </Link>

      {/* Nav */}
      <nav className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about/overview" className="hover:text-blue-600">About</Link>
        {/* <Link to="/cfp/types" className="hover:text-blue-600">CFP Certification</Link> */}
        {/* <Link to="/resources/documents" className="hover:text-blue-600">Resources</Link> */}
        {/* <Link to="/advisor/search" className="hover:text-blue-600">Find a Financial Advisor</Link> */}
        {/* <Link to="/training/students" className="hover:text-blue-600">Training</Link> */}
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        <Link to="/login" className="hover:text-blue-600">Login</Link>
      </nav>
    </header>
  );
}
