import { Link } from "react-router-dom";
import { loginButtonClass, loginButtonGhostClass } from "../ui/styles";
import tfpaLogo from "../../assets/tfpa_logo/horizontal_logo_bg_removed.png";
import tfpaLogoWhite from "../../assets/tfpa_logo/horizontal_logo_bg_removed_white.png";
import type React from "react";


function NavBarLink({ to, label }: { to: string, label: string }) {
  return (
    <Link to={to} className="hover:text-brand-blue">{label}</Link>
  );
}


function DropdownContainer({ children, to, label }: {
  children: React.ReactNode;
  to?: string;
  label: string
}) {
  return (
    <div className="relative group">
      { (to) ? <NavBarLink to={to} label={label} /> : <p className="hover:cursor-default">{label}</p> }

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
  return (<hr className="my-2 border-t border-gray-400" />);
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


export function NavBar({ scrolled = true }: { scrolled?: boolean }) {
  return (
    <nav
      className={`
        flex gap-12 transition-colors duration-300
        text-sm font-medium items-center relative
        ${scrolled ? "text-black" : "text-white"}
      `}
    >
      <NavBarLink to="/" label="หน้าหลัก" />

      {/* <DropdownContainer to="/for_you" label="สำหรับคุณ"> */}
      <DropdownContainer label="สำหรับคุณ">
        <DropdownItem to="/for_you/general_audience" label="บุคคลทั่วไป" />
        <DropdownItem to="/find_planner" label="รับบริการ" />
        <DropdownDivider />
        <DropdownItem to="/for_you/student" label="นักเรียน CFP/AFPT" />
        <DropdownDivider />
        <DropdownItem to="/for_you/professional" label="ผู้ประกอบวิชาชีพ CFP/AFPT" />
        <DropdownDivider />
        <DropdownItem to="/for_you/company" label="องค์กร" />
        <DropdownDivider />
        <DropdownItem to="/for_you/training_school" label="สถาบันฝึกอบรม" />
        <DropdownItem to="/for_you/media" label="สื่อมวลชน" />
      </DropdownContainer>

      {/* <DropdownContainer to="/resources" label="แหล่งข้อมูล"> */}
      <DropdownContainer label="แหล่งข้อมูล">
        <DropdownItem to="/resources/documents" label="ศูนย์เอกสาร" />
        <DropdownDivider />
        <DropdownItem to="/resources/news" label="ข่าว" />
        <DropdownItem to="/resources/announcements" label="ประกาศ" />
        <DropdownItem to="/resources/activities" label="กิจกรรม" />
        <DropdownDivider />
        <DropdownItem to="/resources/blogs" label="บทความ" />
        <DropdownItem to="/resources/ebook" label="E-Book" />
        <DropdownItem to="/resources/tfpa_magazines" label="วารสาร TFPA Magazine" />
        <DropdownItem to="/resources/tfpa_news" label="วารสาร TFPA News" />
        <DropdownDivider />
        <DropdownItem to="/resources/videos" label="วิดีโอ" />
      </DropdownContainer>

      <DropdownContainer label="สมาคม">
        <DropdownItem to="/contact" label="ติดต่อ" />
        <DropdownItem to="/about" label="เกี่ยวกับ" />
      </DropdownContainer>
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
          className="h-auto w-100"
        />
      </Link>
      <NavBar />
      <a
        href="https://member.tfpa.or.th/UserLoginNew.aspx"
        className={loginButtonClass}
      >
        Login
      </a>
    </header>
  );
}


export function HomeHeader({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      className={`
        fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4
        transition-all duration-200
        ${scrolled
          ? "bg-white shadow-sm text-black"
          : "bg-transparent text-white"}
      `}
    >
      <Link to="/">
        <img
          src={scrolled ? tfpaLogo : tfpaLogoWhite}
          alt="TFPA Logo"
          className="h-auto w-100 transition-all duration-300"
        />
      </Link>

      <NavBar scrolled={scrolled} />

      <a
        href="https://member.tfpa.or.th/UserLoginNew.aspx"
        className={scrolled ? loginButtonClass : loginButtonGhostClass}
      >
        Login
      </a>
    </header>
  );
}
