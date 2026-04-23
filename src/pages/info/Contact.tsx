import map from "../../assets/how_to_go_to_tfpa.png"
import { Page, PageHeader } from "../../layouts/Page";
import { Section } from "../../layouts/Section";
import RenderBlocks from "../../components/content/Blocks";
import type { Block } from "../../components/content/types";

import { type StaffContact, training_staff_contact, license_staff_contact, financial_staff_contact } from "../../data/Contact";

const tfpaInfoBlocks: Block[] = [
  { type: "card", blocks: [
    { type: "heading", level: "h3", content: "สมาคมนักวางแผนการเงินไทย" },
    {
      type: "paragraph", content: [
        { type: "text", content: "ชั้น 6 อาคารตลาดหลักทรัพย์แห่งประเทศไทย" }, { type: "break" },
        { type: "text", content: "93 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง" }, { type: "break" },
        { type: "text", content: "กรุงเทพมหานคร 10400" }, { type: "break" },
        { type: "break" },
        { type: "text", content: "โทรศัพท์: 0 2009 9393" }, { type: "break" },
        { type: "text", content: "โทรสาร: 0 2247 7479" }, { type: "break" },
        { type: "text", content: "Website: " }, { type: "link", href: "/", content: "www.tfpa.or.th" }, 
      ]
    }
  ]}
];

const contactBlocks: Block[] = [
  { type: "card", blocks: StaffContactCardContents(training_staff_contact) },
  { type: "card", blocks: StaffContactCardContents(license_staff_contact) },
  { type: "card", blocks: StaffContactCardContents(financial_staff_contact) },
];

const reportBlocks: Block[] = [
  { type: "heading", level: "h3", content: "ร้องเรียนสมาคมนักวางแผนการเงินไทย" },
  { 
    type: "paragraph",
    content: [{ type: "text", content: "ท่านสามารถแจ้งข้อร้องเรียนเกี่ยวกับการดำเนินงานของสมาคมฯ ผ่านช่องทางต่อไปนี้" }]
  },
  {
    type: "list",
    items: [  
      { content: [{ type: "text", content: "แบบฟอร์มออนไลน์: " }, { type: "link", href: "https://www.surveymonkey.com/r/D2Y9VMQ", content: "ร้องเรียน" }] },
      { content: [{ type: "text", content: "อีเมล: info@tfpa.or.th" }] },
      { content: [{ type: "text", content: "โทรศัพท์: 0 2009 9393" }] }
    ]
  },

  { type: "heading", level: "h3", content: "ร้องเรียนนักวางแผนการเงิน CFP/ที่ปรึกษาการเงิน AFPT" },
  { 
    type: "paragraph",
    content: [{ type: "text", content: "นักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT จะต้องปฏิบัติตาม “จรรยาบรรณและความรับผิดชอบในฐานะผู้ประกอบวิชาชีพวางแผนการเงิน” ซึ่งสะท้อนให้เห็นว่านักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT มุ่งมั่นที่จะปฏิบัติงานวางแผนการเงินให้ลูกค้าโดยอยู่บนพื้นฐานของแนวปฏิบัติ และจรรยาบรรณของนักวางแผนการเงิน" }]
  },
  { 
    type: "paragraph",
    content: [{ type: "text", content: "สมาคมฯ ได้กำหนดกระบวนการพิจารณาความผิดทางวินัย กระบวนการอุทธรณ์ และการดำเนินการทางวินัย เพื่อใช้เป็นแนวปฏิบัติในกรณีที่พบว่านักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT กระทำใดๆ ที่อาจเป็นการฝ่าฝืนจรรยาบรรณดังกล่าว ท่านสามารถแจ้งข้อร้องเรียนเกี่ยวกับการให้บริการของนักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT ผ่านทางอีเมลที่ info@tfpa.or.th หรือทางจดหมายถึง" }]
  },
  {
    type: "card",
    blocks: [
      { type: "heading", level: "h3", content: "ผู้อำนวยการสมาคมนักวางแผนการเงินไทย" },
      { 
        type: "paragraph",
        content: [
          { type: "text", content: "สมาคมนักวางแผนการเงินไทย" }, { type: "break"},
          { type: "text", content: "ชั้น 6 อาคารตลาดหลักทรัพย์แห่งประเทศไทย" }, { type: "break"},
          { type: "text", content: "เลขที่ 93 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพฯ 10400" }
        ]
      }
    ]
  },

  { type: "heading", level: "h3", content: "เอกสารประกอบการแจ้งข้อร้องเรียน" },
  {
    type: "list",
    items: [
      { content: [{ type: "text", content: "จดหมายแจ้งข้อร้องเรียนเป็นลายลักษณ์อักษร" }] },
      { content: [{ type: "text", content: "ระบุชื่อและที่อยู่ของผู้ร้องเรียน" }] },
      { content: [{ type: "text", content: "ระบุชื่อนักวางแผนการเงินที่มีการกระทำที่อาจเป็นการฝ่าฝืนจรรยาบรรณ" }] },
      { content: [{ type: "text", content: "ระบุรายละเอียดการกระทำที่อาจเป็นการฝ่าฝืนจรรยาบรรณ พร้อมหลักฐาน" }] },
      { content: [{ type: "text", content: "สัญญาการให้บริการการวางแผนการเงิน (ถ้ามี)" }] },
      { content: [{ type: "text", content: "ลงลายมือชื่อของผู้ร้องเรียนในจดหมายร้องเรียน" }] },
    ]
  },

  { type: "heading", level: "h3", content: "" },
  {
    type: "paragraph",
    content: [
      { type: "text", content: "ท่านสามารถสอบถามข้อมูลการใช้เครื่องหมายรับรองคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP และเครื่องหมายรับรองคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT และแจ้งกรณีที่พบเห็นผู้นำเครื่องหมายดังกล่าวไปใช้อย่างไม่ถูกต้อง หรือละเมิดลิขสิทธิ์ได้ที่" }
    ]
  },
  {
    type: "card",
    blocks: [
      {
        type: "paragraph",
        content: [
          { type: "text", content: "อีเมล: info@tfpa.or.th" }, { type: "break" },
          { type: "text", content: "โทรศัพท์: 0 2009 9393" },
        ]
      }
    ]
  },
];

/*
1. 📍 Location (header block): instant usefulness
2. 🗺️ Google Map (primary visual): interactive + main “where is this place”
3. 🧭 Infographic (supporting): “how to get there” + MRT / landmarks
4. 👥 Staff / departments: contact persons + roles
*/


function TFPAInfo() {
  return (
    <Section title="Location">
      <RenderBlocks blocks={tfpaInfoBlocks}/>
    </Section>
  );
}


function GoogleMap() {
  return (
    <Section title="Google Map">
      <iframe
        src="https://www.google.com/maps?q=The+Stock+Exchange+of+Thailand&output=embed"
        className="w-full h-[500px] rounded-xl overflow-hidden border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Section>
  );
}


function InfographicMap() {
  return (
    <Section title="วิธีเดินทาง">
      <p className="my-4"><b>รถไฟฟ้าใต้ดิน (MRT):</b> สถานีศูนย์วัฒนธรรม ทางออก 3</p>

      <p className="text-xs text-gray-500">แผนที่การเดินทางมายังสมาคมฯ</p>
      <div className="border border-gray-300">
        <img src={map} alt="How to go to TFPA" className="mx-auto object-contain" />
      </div>
    </Section>
  );
}



function StaffContactCardContents(contact: StaffContact): Block[] {
  return [
    { type: "heading", level: "h3", content: contact.responsibility },
    { type: "paragraph", content: [
      { type: "text", content: contact.staff_name }, { type: "break" },
      { type: "text", content: `โทรศัพท์: ${contact.telephone}` }, { type: "break" },
      { type: "text", content: `อีเมล: ${contact.email}` }
    ]}
  ];
}

function ContactSection() {
  return (
    <Section title="Department">
      <RenderBlocks blocks={contactBlocks}/>
    </Section>
  );
}


function ReportSection() {
  return (
    <Section title="ร้องเรียน">
      <RenderBlocks blocks={reportBlocks}/>
    </Section>
  );
}


export default function Contact() {
  return (
    <Page>
      <PageHeader title="ติดต่อ" />
      <TFPAInfo />
      <GoogleMap />
      <InfographicMap />
      <ContactSection />
      <ReportSection />
    </Page>
  );
}
