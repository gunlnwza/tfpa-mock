/*
# Need place to live
Annual Reports
(DONE? Only Footer OK?) Rules & Regulations

# Header
(DONE) About — Overview, Board & Staff
() CFP Certification — Member Types & Benefits, How to Get Certified, Maintain & Renew, FAQ
() Resources — Documents, News, Announcements, Videos, Alliance Companies
(service) Find a Financial Advisor — What is Financial Planning, Search for an Advisor, Contact
(career path) Training — For Students, For Practitioners, For Training Schools, For Legal Entities
(DONE) Contact — Address, Staff Directory
*/

import { Link } from "react-router-dom";

import tfpa from "../../../assets/logos/tfpa.png";


const loginButtonStyle = `
  inline-flex items-center justify-center
  px-5 py-2
  rounded-full
  bg-blue-600 text-white font-semibold text-sm
  shadow-sm
  transition
  hover:bg-blue-700
  active:scale-[0.97]
`;

export function Header() {
  return (
    <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-8 py-4 shadow-sm">
      {/* Logo */}
      <Link to="/">
        <img src={tfpa} alt="TFPA Logo" className="h-16" />
      </Link>

      {/* Nav */}
      <nav className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-blue-600">หน้าหลัก</Link>
        <Link to="/about" className="hover:text-blue-600">เกี่ยวกับ</Link>
        <Link to="/financial_planning" className="hover:text-blue-600">วางแผนการเงิน</Link>
        <Link to="/find_planner" className="hover:text-blue-600">รับบริการ</Link>
        <Link to="/career_path" className="hover:text-blue-600">เส้นทางอาชีพ</Link>
        <Link to="/become_member" className="hover:text-blue-600">สำหรับสมาชิก</Link>
        <Link to="/contact" className="hover:text-blue-600">ติดต่อ</Link>
        <a
          href="https://member.tfpa.or.th/UserLoginNew.aspx"
          className={loginButtonStyle}
        >
          Login
        </a>
        

        {/* <Link to="/cfp/types" className="hover:text-blue-600">CFP Certification</Link> */}
        {/* <Link to="/resources/documents" className="hover:text-blue-600">Resources</Link> */}
        {/* <Link to="/advisor/search" className="hover:text-blue-600">Find a Financial Advisor</Link> */}
        {/* <Link to="/training/students" className="hover:text-blue-600">Training</Link> */}
      </nav>
    </header>
  );
}
