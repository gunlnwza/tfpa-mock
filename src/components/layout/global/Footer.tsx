import { Link } from "react-router-dom";

import facebookIcon from "../../../assets/icons/facebook.svg"
import lineIcon from "../../../assets/icons/line.svg"
import youtubeIcon from "../../../assets/icons/youtube.svg"

import {
  tfpaContactBlocks,
} from "../../../data/Contact"

import { WhitePDFLink } from "../../primitive/PDFLink";

import { RenderBlocks } from "../../primitive/renderer/Blocks";
import tfpaLogo from "../../../assets/logos/tfpa.png"


function Icon({ href, src }: { href: string, src: string }) {
  return <a href={href} className="hover:opacity-80"><img src={src} className="w-10 h-10" /></a>
}


function Left() {
  return (
    <div className="text-white">
      <Link to="/">
        <img
          src={tfpaLogo}
          alt="TFPA Logo"
          className="h-auto w-24 sm:w-32 md:w-80 bg-white p-4 rounded-xl"
        />
      </Link>

      <RenderBlocks blocks={tfpaContactBlocks} />
    </div>
  );
}

function Right() {
  return (
    <div className="flex flex-col h-80 justify-between">
      <div className="">
        <div>
          <p className="text-right mb-2">ติดตามเราได้ที่</p>
          <div className="flex gap-4 justify-end mb-8">
            
            <Icon src={facebookIcon} href="https://www.facebook.com/ThaiFinancialPlanners" />
            <Icon src={youtubeIcon} href="https://www.youtube.com/channel/UC6rMod3YUUYv-yGnkIg5GEw?sub_confirmation=1" />
            <Icon src={lineIcon} href="http://line.me/ti/p/~@cfpthailand" />
          </div>
        </div>

        <div className="flex gap-4 justify-end mb-8">
          <WhitePDFLink title="นโยบายความเป็นส่วนตัว" href="https://www.tfpa.or.th/upload/tfpa-2205311451021516.pdf" />
          <WhitePDFLink title="ข้อบังคับสมาคม" href="https://www.tfpa.or.th/upload/tfpa-2109221601078698.pdf" />
          <Link to="/sitemap" className="hover:underline text-blue-100 underline block text-center">
            Sitemap
          </Link>
        </div>
      </div>

      <div className="">
        <p className="text-right text-sm">สงวนลิขสิทธิ์ 2560 สมาคมนักวางแผนการเงินไทย</p>
        <p className="text-right text-sm">CFP®, CERTIFIED FINANCIAL PLANNER™ are trademarks owned outside the U.S. by Financial Planning Standards Board Ltd.</p>
        <p className="text-right text-sm">Thai Financial Planners Association is the licensing authority in Thailand.</p>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-8 py-10 flex justify-between">
      <Left />
      <Right />
    </footer>
  );
}
