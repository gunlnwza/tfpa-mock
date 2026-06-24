import { Link } from "react-router-dom";

import facebookIcon from "../../assets/icons/facebook.svg"
import lineIcon from "../../assets/icons/line.svg"
import youtubeIcon from "../../assets/icons/youtube.svg"

import { WhitePDFLink } from "../ui/PDFLink";

import { RenderBlocks } from "../primitive/renderer/Blocks";
import type { Inline, Block } from "../primitive/renderer/types";
import tfpaAllWhite from "../../assets/tfpa_logo/horizontal_logo_bg_removed_white.png"

// TODO: use Strapi for address
function withBreaks(items: string[]): Inline[] {
  return items.flatMap((item, i) =>
    i === items.length - 1
      ? [{ type: "text", content: item }]
      : [
          { type: "text", content: item },
          { type: "break" }
        ]
  );
}

type TFPAContact = {
  title: string;
  address: string[];
  telephone: string;
  telegraph: string;
  website: string;
}

const tfpaContact: TFPAContact = {
  title: "สมาคมนักวางแผนการเงินไทย",
  address: [
    "ชั้น 6 อาคารตลาดหลักทรัพย์แห่งประเทศไทย",
    "93 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง",
    "กรุงเทพมหานคร 10400"
  ],
  telephone: "0 2009 9393",
  telegraph: "0 2247 7479",
  website: "www.tfpa.or.th"
}

const tfpaContactBlocks: Block[] = [
  { type: "heading", level: "h4", content: tfpaContact.title },
  {
    type: "paragraph", content: [
      ...withBreaks(tfpaContact.address), { type: "break" },
      { type: "break" },
      { type: "text", content: `โทรศัพท์: ${tfpaContact.telephone}` }, { type: "break" },
      { type: "text", content: `โทรสาร: ${tfpaContact.telegraph}` }, { type: "break" },
      { type: "text", content: "Website: " }, { type: "link", href: "/", content: tfpaContact.website }
    ]
  }
];

type SitemapColumn = {
  heading: string;
  to?: string;
  items: { label: string; to: string }[];
};

const sitemapColumns: SitemapColumn[] = [
  {
    heading: "หน้าหลัก",
    to: "/",
    items: [
      { label: "เกี่ยวกับสมาคม", to: "/about" },
      { label: "รับบริการวางแผนการเงิน", to: "/find_planner" },
      { label: "ติดต่อเรา", to: "/contact" },
    ],
  },
  {
    heading: "สำหรับคุณ",
    items: [
      { label: "บุคคลทั่วไป", to: "/for_you/general_audience" },
      { label: "นักเรียน CFP/AFPT", to: "/for_you/student" },
      { label: "ผู้ประกอบวิชาชีพ CFP/AFPT", to: "/for_you/professional" },
      { label: "องค์กร", to: "/for_you/company" },
      { label: "สถาบันฝึกอบรม", to: "/for_you/training_school" },
      { label: "สื่อมวลชน", to: "/for_you/media" },
    ],
  },
  {
    heading: "แหล่งข้อมูล",
    items: [
      { label: "ข่าว", to: "/resources/news" },
      { label: "ประกาศ", to: "/resources/announcements" },
      { label: "กิจกรรม", to: "/resources/activities" },
      { label: "วารสาร TFPA Magazine", to: "/resources/tfpa_magazines" },
      { label: "วารสาร TFPA News", to: "/resources/tfpa_news" },
    ],
  },
  {
    heading: " ", // spacer to keep grid alignment under "แหล่งข้อมูล"
    items: [
      { label: "E-Book / โบรชัวร์", to: "/resources/ebook" },
      { label: "บทความ", to: "/resources/blogs" },
      { label: "ศูนย์เอกสาร", to: "/resources/documents" },
      { label: "วิดีโอ", to: "/resources/videos" },
    ],
  },
];

function SitemapSection() {
  return (
    <div className="border-t border-white/20 mt-6 pt-6 grid grid-cols-4 gap-8 text-sm pb-6">
      {sitemapColumns.map((col, i) => (
        <div key={i}>
          {col.to ? (
            <Link to={col.to} className="font-semibold text-white mb-3 block hover:text-brand-yellow transition">
              {col.heading}
            </Link>
          ) : (
            <p className="font-semibold text-white mb-3">{col.heading}</p>
          )}
          <ul className="flex flex-col gap-1.5">
            {col.items.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/70 hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Icon({ href, src }: { href: string, src: string }) {
  return (
    <a
      href={href}
      target="_blank" rel="noopener noreferrer"
      className="hover:opacity-80"
    >
      <img src={src} className="w-10 h-10" />
    </a>
  );
}


function Left() {
  return (
    <div className="text-white flex flex-col justify-between">
      <Link to="/" className="hover:cursor-pointer">
        <img
          src={tfpaAllWhite}
          alt="TFPA Logo"
          className="h-auto w-70"
        />
      </Link>

      <RenderBlocks blocks={tfpaContactBlocks} />
    </div>
  );
}

function Right() {
  return (
    <div className="flex justify-between flex-col">
      <div>
        <p className="text-right mb-2">ติดตามเราได้ที่</p>
        <div className="flex gap-4 justify-end">
          <Icon src={facebookIcon} href="https://www.facebook.com/ThaiFinancialPlanners" />
          <Icon src={youtubeIcon} href="https://www.youtube.com/channel/UC6rMod3YUUYv-yGnkIg5GEw" />
          <Icon src={lineIcon} href="http://line.me/ti/p/~@cfpthailand" />
        </div>
      </div>

      <div className="flex gap-4 justify-end">
        <WhitePDFLink title="นโยบายความเป็นส่วนตัว" href="https://www.tfpa.or.th/upload/tfpa-2205311451021516.pdf" />
        <WhitePDFLink title="ข้อบังคับสมาคม" href="https://www.tfpa.or.th/upload/tfpa-2109221601078698.pdf" />
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
    <footer className="bg-brand-navy text-white px-8 pt-8 pb-2">
      <div className="flex justify-between">
        <Left />
        <Right />
      </div>
      <SitemapSection />
    </footer>
  );
}
