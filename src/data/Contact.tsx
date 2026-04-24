import type { Block, Inline, InlineLink } from "../components/primitive/renderer/types";

import how_to_go_to_tfpa from "../assets/map/how_to_go_to_tfpa.png"


// Make Inline[] by joining strings with break element
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
  website: InlineLink;
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
  website: { type: "link", href: "/", content: "www.tfpa.or.th" }
}

export const tfpaContactCard: Block[] = [
  { type: "card", blocks: [
    { type: "heading", level: "h4", content: tfpaContact.title },
    {
      type: "paragraph", content: [
        ...withBreaks(tfpaContact.address), { type: "break" },
        { type: "break" },
        { type: "text", content: `โทรศัพท์: ${tfpaContact.telephone}` }, { type: "break" },
        { type: "text", content: `โทรสาร: ${tfpaContact.telegraph}` }, { type: "break" },
        { type: "text", content: "Website: " }, tfpaContact.website, 
      ]
    }
  ]}
];


type StaffContact = { responsibility: string, staff_name: string, telephone: string, email: string };

function StaffContactCardContents(contact: StaffContact): Block[] {
  return [
    { type: "heading", level: "h4", content: contact.responsibility },
    { type: "paragraph", content: [
      { type: "text", content: contact.staff_name }, { type: "break" },
      { type: "text", content: `โทรศัพท์: ${contact.telephone}` }, { type: "break" },
      { type: "text", content: `อีเมล: ${contact.email}` }
    ]}
  ];
}

const training_staff_contact: StaffContact = {
  responsibility: "การอบรมและการสอบ",
  staff_name: "คุณวนิดา จรุงกิจกุล",
  telephone: "0 2009 9393 ต่อ 3731",
  email: "tfpaexam@tfpa.or.th"
}

const license_staff_contact: StaffContact = {
  responsibility: "การยื่นขึ้นทะเบียนคุณวุฒิวิชาชีพและการต่ออายุคุณวุฒิวิชาชีพ",
  staff_name: "คุณสุรีรัตน์  ทักขิณ",
  telephone: "0 2009 9393 ต่อ 3727",
  email: "sureerat@tfpa.or.th"
}

const financial_staff_contact: StaffContact = {
  responsibility: "การเงิน",
  staff_name: "คุณทัดดาว ลิขิตกิติกุล",
  telephone: "0 2009 9393 ต่อ 3729",
  email: "tfpa@tfpa.or.th"
}

export const contactBlocks: Block[] = [
  { type: "card", blocks: StaffContactCardContents(training_staff_contact) },
  { type: "card", blocks: StaffContactCardContents(license_staff_contact) },
  { type: "card", blocks: StaffContactCardContents(financial_staff_contact) },
];


export const reportBlocks: Block[] = [
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
      { type: "heading", level: "h4", content: "ผู้อำนวยการสมาคมนักวางแผนการเงินไทย" },
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

export const googleMapBlocks: Block[] = [
  {
    type: "media",
    item: {
      type: "embed",
      src: "https://www.google.com/maps?q=The+Stock+Exchange+of+Thailand&output=embed",
    }
  }
];

export const infographicMapBlocks: Block[] = [
  {
    type: "paragraph",
    content: [{ type: "bold", content: "รถไฟฟ้าใต้ดิน (MRT): " }, { type: "text", content: "สถานีศูนย์วัฒนธรรม ทางออก 3" }]
  },
  {
    type: "media",
    item: {
      type: "image",
      src: how_to_go_to_tfpa,
      alt: "How to go to TFPA",
      caption: "แผนที่การเดินทางมายังสมาคมฯ",
    }
  }
]
