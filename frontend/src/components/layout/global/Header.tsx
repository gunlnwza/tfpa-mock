import { Link } from "react-router-dom";
import { roundedprimaryCTAButtonClass } from "../../ui/styles";
import tfpaLogo from "../../../assets/logos/tfpa.png"
import type React from "react";


function NavBarLink({ to, label }: { to: string, label: string }) {
  return (
    <Link to={to} className="hover:text-blue-600">{label}</Link>
  );
}


function DropdownContainer({ children, to, label }: {
  children: React.ReactNode;
  to?: string;
  label: string
}) {
  return (
    <div className="relative group">
      { (to) ? <NavBarLink to={to} label={label} /> : <p>{label}</p> }
  
      <div className="absolute left-0 top-full h-3 w-full" />
  
      <div className="absolute left-0 top-full mt-3 w-64 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-3 flex flex-col gap-1">
          {children}
        </div>
      </div>
    </div>
  );
}

function DropdownDivider() {
  return (<div className="my-2 border-t" />);
}

type DropDownItemProps =
  { to: string; href?: never; label: string }
  | { to?: never; href: string; label: string }

function DropdownItem({ to, href, label }: DropDownItemProps ) {
  if (href) {
    return (
      <a
        href={href}
        className="px-3 py-2 rounded-lg hover:bg-gray-100 transition text-gray-700"
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-lg hover:bg-gray-100 transition text-gray-700"
    >
      {label}
    </Link>
  );
}


function NavBar() {
  return (
    <nav className="flex gap-6 text-sm font-medium items-center relative">
      <NavBarLink to="/" label="หน้าหลัก" />
      <NavBarLink to="/about" label="เกี่ยวกับ" />
      <NavBarLink to="/find_planner" label="รับบริการ" />

      <DropdownContainer to="/for_you" label="สำหรับคุณ">
        <DropdownItem to="/for_you/general_audience" label="บุคคลทั่วไป (อยากวางแผนการเงิน)" />
        <DropdownItem to="/for_you/student" label="นักเรียน CFP/AFPT" />
        <DropdownItem to="/for_you/professional" label="ผู้ประกอบวิชาชีพ CFP/AFPT" />
        <DropdownItem to="/for_you/company" label="องค์กร" />
        <DropdownItem to="/for_you/training_school" label="สถาบันฝึกอบรม" />
        <DropdownItem to="/for_you/media" label="สื่อมวลชน" />
      </DropdownContainer>

      <DropdownContainer to="/resources" label="แหล่งข้อมูล">
        <DropdownItem to="/resources/news" label="ข่าว" />
        <DropdownItem to="/resources/annoucements" label="ประกาศ" />
        <DropdownItem to="/resources/documents" label="ศูนย์เอกสาร" />
        <DropdownDivider />
        <DropdownItem to="/resources/articles" label="บทความ / ความรู้การเงิน" />
        <DropdownItem to="/resources/publications" label="สิ่งพิมพ์ / วารสาร" />
        <DropdownItem to="/resources/videos" label="วิดีโอ" />
      </DropdownContainer>

      <NavBarLink to="/contact" label="ติดต่อ" />

      <a
        href="https://member.tfpa.or.th/UserLoginNew.aspx"
        className={roundedprimaryCTAButtonClass}
      >
        Login
      </a>
    </nav>
  );
}


export function Header() {
  return (
    <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-8 py-4 shadow-sm">
      <Link to="/">
        <img
          src={tfpaLogo}
          alt="TFPA Logo"
          className="h-auto w-24 sm:w-32 md:w-80"
        />
      </Link>
      <NavBar />
    </header>
  );
}
