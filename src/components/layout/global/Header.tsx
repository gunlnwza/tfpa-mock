import { Link } from "react-router-dom";

import tfpa from "../../../assets/logos/tfpa.png";

import { roundedPrimaryCTAButtonStyle } from "../../ui/styles";


function NavBarLink({ to, label }: { to: string, label: string }) {
  return (
    <Link to={to} className="hover:text-blue-600">{label}</Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-8 py-4 shadow-sm">

      <Link to="/">
        <img src={tfpa} alt="TFPA Logo" className="h-16" />
      </Link>

      <nav className="flex gap-6 text-sm font-medium items-center">
        <NavBarLink to="/" label="หน้าหลัก" />
        <NavBarLink to="/about" label="เกี่ยวกับ" />
        <NavBarLink to="/financial_planning" label="วางแผนการเงิน" />
        <NavBarLink to="/find_planner" label="รับบริการ" />
        <NavBarLink to="/career_path" label="เส้นทางอาชีพ" />
        <NavBarLink to="/become_member" label="สำหรับสมาชิก" />
        <NavBarLink to="/resources" label="แหล่งข้อมูล" />
        <NavBarLink to="/contact" label="ติดต่อ" />
        <a
          href="https://member.tfpa.or.th/UserLoginNew.aspx"
          className={roundedPrimaryCTAButtonStyle}
        >
          Login
        </a>
      </nav>

    </header>
  );
}
