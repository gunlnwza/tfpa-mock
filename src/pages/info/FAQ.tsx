import RenderBlocks from "../../components/content/Blocks";
import { Page, PageHeader } from "../../layouts/Page";
import type { Block } from "../../components/content/types";

type QuestionAnswer = {
  question: Block[];
  answer: Block[];
}

const training: QuestionAnswer[] = [
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
    question: [],
    answer: []
  },  

];

import { useState } from "react";
import RenderHeading from "../../components/content/Heading";

function QuestionTab({ qa }: { qa: QuestionAnswer }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <RenderBlocks blocks={qa.question} />
      </div>

      {open && (
        <div>
          <RenderBlocks blocks={qa.answer} />
        </div>
      )}
    </div>
  );
}


function QuestionSection({ title, section }: { title: string; section: QuestionAnswer[] }) {
  return (
    <div>
    <RenderHeading heading={ {type: "heading", level: "h2", content: title} }></RenderHeading>
      {section.map((qa, index) => (
        <QuestionTab key={index} qa={qa} />
      ))}
    </div>
  );
}


export default function FAQ() {
  return (
    <Page>
      <PageHeader title="FAQ" />
      <QuestionSection title="การศึกษา" section={training} />
    </Page>
  );
}
