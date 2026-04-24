import type { Block } from "../components/content/types";

import transcript_review from "../../assets/faq/transcript_review.png"
import challenge_status from "../../assets/faq/challenge_status.png"


export type QuestionAnswer = {
  question: Block[];
  answer: Block[];
}


export const training: QuestionAnswer[] = [
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "จำเป็นจะต้องเข้าอบรมหลักสูตรการวางแผนการเงิน CFP ตามลำดับของชุดวิชาหรือไม่" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "สำหรับชุดวิชาที่ 1-5 ผู้เข้าอบรมสามารถเลือกเข้าอบรมชุดวิชาใดก่อนก็ได้ ไม่จำเป็นต้องเข้าอบรมตามลำดับของชุดวิชา อย่างไรก็ตาม สมาคมฯ แนะนำให้เข้าอบรมชุดวิชาที่ 1 ก่อนชุดวิชาอื่นเนื่องจากมีเนื้อหาเกี่ยวกับพื้นฐานการวางแผนการเงิน สำหรับชุดวิชาที่ 6 ผู้เข้าอบรมต้องผ่านการอบรมชุดวิชาที่ 1-5 เสียก่อนจึงจะสามารถเข้าอบรมในชุดวิชาที่ 6 ได้" } ] },
    ],
  },
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "สามารถเข้ารับการอบรมหลักสูตรการวางแผนการเงิน CFP ได้จากที่ใดบ้าง มีค่าธรรมเนียมการอบรมเท่าใด" } ] },
    ],
    answer: [
      { type: "paragraph", content: [
        { type: "text", content: "สามารถเข้ารับการอบรมหลักสูตรการวางแผนการเงิน CFP ได้ที่สถาบันอบรมของสมาคมฯ ซึ่งในปัจจุบันมีทั้งหมด 5 แห่ง ได้แก่" },
      ]},
      { type: "list", items: [
        { content: [ { type: "link", href: "http://www.thaipfa.com/", content: "ศูนย์อบรมไทยพีเอฟเอ (ThaiPFA)" } ] },
        { content: [ { type: "link", href: "http://www.ati-asco.org/index.php", content: "สถาบันฝึกอบรมสมาคมบริษัทหลักทรัพย์ (ATI)" } ] },
        { content: [ { type: "link", href: "http://www.aimc.or.th/intro.php", content: "ศูนย์ความรู้ผู้ประกอบวิชาชีพทางการเงิน สมาคมบริษัทจัดการลงทุน" } ] },
        { content: [ { type: "link", href: "http://www.cmsk-academy.com/", content: "บริษัท ซีเอ็มเอสเค จำกัด" } ] },
        { content: [ { type: "link", href: "https://avp-academy.com/", content: "สถาบันฝึกอบรม เอวีพี อะคาเดมี่ (AVP Academy) " } ] },
      ]},
      {
        type: "paragraph", content: [
          { type: "text", content: "สถาบันอบรมแต่ละแห่งเป็นผู้กำหนดค่าธรรมเนียมการอบรม ผู้สนใจสามารถสอบถามรายละเอียดค่าธรรมเนียมการอบรม กำหนดการอบรม และรายละเอียดที่เกี่ยวข้องได้โดยตรงจากสถาบันอบรมแต่ละแห่ง" },
        ]
      }
    ],
  },
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "สามารถขอยกเว้นการเข้าอบรมบางชุดวิชาหรือทุกชุดวิชาได้หรือไม่" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "สมาคมฯ อนุญาตให้ผู้มีคุณวุฒิการศึกษาหรือคุณวุฒิวิชาชีพในสาขาวิชาที่เกี่ยวข้องโดยตรงกับเนื้อหาการอบรม สามารถยื่นขอยกเว้นการอบรมในชุดวิชาที่เกี่ยวข้องผ่าน การเทียบเคียงพื้นฐานความรู้ (Transcript Review)" } ] },
      
      { type: "heading", level: "h3", content: "การเทียบเคียงพื้นฐานความรู้ (Transcript Review)" },
      { type: "paragraph", content: [ { type: "text", content: "ผู้สมัครที่มีความรู้ในสาขาวิชาที่เกี่ยวข้องโดยตรงกับเนื้อหาการอบรมในบางชุดวิชา เนื่องจากมีคุณวุฒิการศึกษา หรือมีใบอนุญาตปฏิบัติงานที่เกี่ยวข้อง สามารถยื่นขอยกเว้นการเข้า   อบรมในชุดวิชานั้นๆ ได้ โดยมีหลักเกณฑ์และรายละเอียดดังนี้" } ] },
      { type: "media", item: { type: "image", src: transcript_review, alt: "Transcript Review" }},
      { type: "paragraph", content: [ { type: "text", content: "*หมายเหตุ: มีการปรับหลักเกณฑ์การเทียบเคียงพื้นฐานความรู้ (Transcript Review) ในชุดวิชาที่ 1 พื้นฐานการวางแผนการเงิน ภาษีและจรรยาบรรณ ให้เป็นตามประกาศสมาคมฯ ที่ 002/2568 ซึ่งมีผลบังคับใช้วันที่ 1 มกราคม พ.ศ. 2569 เป็นต้นไป " } ] },
    
      { type: "heading", level: "h3", content: "การขอสิทธิ์เข้าสอบโดยไม่ผ่านการอบรม (Challenge Status)" },
      { type: "paragraph", content: [ { type: "text", content: "ผู้สมัครที่มีคุณสมบัติดังต่อไปนี้ มีสิทธิ์เข้าสอบได้โดยไม่ต้องผ่านการอบรมทุกชุดวิชา" } ] },
      { type: "media", item: { type: "image", src: challenge_status, alt: "Challenge Status" }},
      { type: "paragraph", content: [ { type: "text", content: "**หมายเหตุ: มีการเปลี่ยนแปลงรูปแบบการอบรมชุดวิชาที่ 6 การวางแผนการเงินแบบองค์รวม ให้เป็นไปตามประกาศสมาคมฯที่ 004/2568 ซึ่งมีผลบังคับใช้วันที่ 1 มกราคม พ.ศ. 2569 เป็นต้นไป" } ] },
      { type: "paragraph", content: [
        { type: "text", content: "ผู้ที่มีความประสงค์จะใช้สิทธิ์การเทียบเคียงพื้นฐานความรู้ หรือการขอสิทธิ์เข้าสอบโดยไม่ผ่านการอบรม สามารถยื่นขอพิจารณาการเทียบเคียงพื้นฐานความรู้ หรือการขอสิทธิ์เข้าสอบโดยไม่ผ่านการอบรมทางออนไลน์ผ่านเว็บไซต์สมาคมฯ (www.tfpa.or.th) ที่เมนู " },
        { type: "link", href: "https://member.tfpa.or.th/UserLogin.aspx", content: "ระบบสมาชิก" },
        { type: "text", content: " (การเข้าใช้งานระบบครั้งแรก ต้องสมัครสมาชิกเว็บไซต์สมาคมฯ ก่อน) ชำระค่าธรรมเนียมการพิจารณาคำขอ พร้อมเอกสารประกอบการพิจารณา ได้แก่" }
      ]},
      { type: "list", items: [
        { content: [ { type: "text", content: "สำเนาบัตรประชาชน" } ] },
        { content: [ { type: "text", content: "สำเนาหลักฐานรับรองผลการศึกษา หรือใบอนุญาตปฏิบัติงาน (กรณีการเทียบเคียงพื้นฐานความรู้) หรือสำเนาหลักฐานรับรองการสำเร็จการศึกษาในระดับปริญญาเอกในสาขาวิชาที่กำหนด หรือสำเนาหลักฐานแสดงการสอบผ่านคุณวุฒิวิชาชีพตามที่กำหนด(กรณีการขอสิทธิ์เข้าสอบโดยไม่ผ่านการอบรม)"  } ] },
        { content: [ { type: "text", content: "เอกสารประกอบการพิจารณาทุกฉบับต้องมีการลงนามรับรองสำเนา" } ] },
      ]}
    ]
  },
];

export const exam: QuestionAnswer[] = [
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "การสอบหลักสูตรวางแผนการเงิน CFP ประกอบด้วยข้อสอบกี่ฉบับ และครอบคลุมเนื้อหาการอบรมในแต่ละชุดวิชาอย่างไรบ้าง" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "การสอบหลักสูตรวางแผนการเงิน CFP ประกอบด้วยข้อสอบจำนวน 4 ฉบับ โดยมีเนื้อหาครอบคลุมการอบรมแต่ละชุดวิชา ดังนี้" } ] },
      { type: "paragraph", content: [ { type: "text", content: "<ตารางข้อมูล>" } ] },
    ],
  },
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "จำเป็นต้องสมัครสอบตามลำดับของฉบับข้อสอบหรือไม่" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "ในการสมัครสอบข้อสอบฉบับที่ 1 ฉบับที่ 2 และฉบับที่ 3 ผู้สมัครสอบสามารถสมัครสอบข้อสอบฉบับใดฉบับหนึ่งก่อนก็ได้ ไม่จำเป็นต้องสมัครสอบตามลำดับของฉบับข้อสอบ ทั้งนี้ ผู้สมัครสอบจะต้องผ่านการอบรมในชุดวิชาที่ 1 และชุดวิชาที่มีเนื้อหาตรงกับข้อสอบฉบับนั้นๆ ก่อน" } ] },
      { type: "paragraph", content: [ { type: "text", content: "ในการสมัครสอบข้อสอบฉบับที่ 4 ส่วนที่ 1 ผู้สมัครสอบจะต้องสอบผ่านข้อสอบฉบับที่ 1 ฉบับที่ 2 และฉบับที่ 3 และต้องผ่านการอบรมในชุดวิชาที่ 5 ก่อน" } ] },
      { type: "paragraph", content: [ { type: "text", content: "ในการสมัครสอบข้อสอบฉบับที่ 4 ส่วนที่ 2 ผู้สมัครสอบจะต้องสอบผ่านข้อสอบฉบับที่ 1 ฉบับที่ 2 และฉบับที่ 3 และต้องผ่านการอบรมในทุกชุดวิชาก่อน" } ] },
    ],
  },
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "มีการจัดสอบหลักสูตรการวางแผนการเงิน CFP ถี่มากน้อยแค่ไหน" } ] },
    ],
    answer: [
    ],
  },
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: " ประกาศผลการสอบหลังจากวันสอบกี่วัน สามารถตรวจสอบผลการสอบได้อย่างไร" } ] },
    ],
    answer: [
    ],
  },
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "การขอหนังสือรับผลการสอบ" } ] },
    ],
    answer: [
    ],
  },
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "สามารถร้องขอให้สมาคมฯ ตรวจข้อสอบใหม่ได้หรือไม่" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "ผู้สมัครสอบสามารถร้องขอให้สมาคมฯ ตรวจนับคะแนนในกระดาษคำตอบใหม่ด้วยวิธีตรวจด้วยมือ โดยจะต้องส่งคำร้องเป็นลายลักษณ์อักษรถึงสมาคมฯ ภายใน 30 วันทำการหลังจากได้รับหนังสือแจ้งผลการสอบ ระบุรายละเอียดดังนี้ ชื่อ-นามสกุลผู้สอบ ฉบับข้อสอบ วันที่เข้าสอบ เหตุผลประกอบคำร้อง พร้อมหลักฐานการชำระค่าธรรมเนียม จำนวน 3,000 บาท/ฉบับข้อสอบ" } ] },
    ],
  },
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "การสอบข้อสอบฉบับที่ 4 ส่วนที่ 2 ข้อสอบแผนการเงิน มีรายละเอียดอย่างไร (ข้อมูล ณ วันที่ 30 มีนาคม 2569)" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "" } ] },
    ],
  },
];

export const work_experience: QuestionAnswer[] = [
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "ต้องมีประสบการณ์การทำงานหรือไม่ มีเกณฑ์ประสบการณ์การทำงานอย่างไร" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "สำหรับผู้ที่ต้องการขอรับรองคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT ไม่ต้องมีประสบการณ์การทำงาน แต่สำหรับผู้ที่ต้องการขอรับรองคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP จะต้องมีประสบการณ์ทำงานตามที่กำหนดเป็นระยะเวลาอย่างน้อย 3 ปี " } ] },
      { type: "paragraph", content: [ { type: "text", content: "ประสบการณ์การทำงานในวิชาชีพที่เกี่ยวข้องโดยตรงกับลูกค้าถือเป็นสิ่งสำคัญและเป็นเครื่องยืนยันว่าผู้สมัครมีความสามารถในการประยุกต์ใช้ความรู้และทักษะสำหรับให้คำปรึกษาและจัดทำแผนการเงินให้แก่ลูกค้าแต่ละรายในสถานการณ์จริงได้อย่างมีประสิทธิภาพ" } ] },
      { type: "paragraph", content: [ { type: "text", content: "ทั้งนี้ ในการปฏิบัติหน้าที่ตามความรับผิดชอบ นักวางแผนการเงิน CFP จะต้อง" } ] },
      { type: "paragraph", content: [ { type: "text", content: "<a lot more text>" } ] },
    ],
  },
];

export const register_cert: QuestionAnswer[] = [
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "ใช้เวลาในการพิจารณาคำขึ้นทะเบียนคุณวุฒิวิชาชีพนานเท่าไร" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "" } ] },
    ],
  },
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "ในการยื่นขอรับรองคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP และคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT ต้องใช้เอกสารอะไรบ้าง" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "" } ] },
    ],
  },
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "มีค่าธรรมเนียมในการยื่นขอรับรองคุณวุฒิวิชาชีพเท่าไร" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "" } ] },
    ],
  },
];


export const extend_cert: QuestionAnswer[] = [
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "นักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT ต้องต่ออายุคุณวุฒิวิชาชีพทุกกี่ปี" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "" } ] },
    ],
  },
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "การยื่นต่ออายุภายหลังครบกำหนดยื่นต่ออายุคุณวุฒิวิชาชีพต้องทำอย่างไร" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "" } ] },
    ],
  },
];

export const cert_development: QuestionAnswer[] = [
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "ต้องมีจำนวนชั่วโมงการพัฒนาคุณวุฒิวิชาชีพอย่างต่อเนื่อง (CPD) เพื่อประกอบการยื่นต่ออายุคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP และคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT กี่ชั่วโมง" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "" } ] },
    ],
  },
  {
    question: [
      { type: "paragraph", content: [ { type: "text", content: "กิจกรรมใดบ้างที่สามารถนับเป็นชั่วโมงการพัฒนาคุณวุฒิวิชาชีพอย่างต่อเนื่อง" } ] },
    ],
    answer: [
      { type: "paragraph", content: [ { type: "text", content: "" } ] },
    ],
  },
];
