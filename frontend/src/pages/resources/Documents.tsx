import { PageHeader } from "../../components/global/PageHeader";
import { Page } from "../../components/layout/Page";
import { useState } from "react";
import { TopicCard } from "./Blogs";
import { PaginationMock } from "./News";


function DocumentSearchMock() {
  return (
    <div className="max-w-4xl mx-auto pt-20 pb-8 space-y-6">

      {/* Heading */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold">
          ค้นหาเอกสาร
        </h1>
      </div>

      {/* Bean Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder={`ลองพิมพ์ "ตารางสอบ 2569"`}
          className="
            w-full
            rounded-full
            border border-gray-200
            px-6 py-4
            text-sm
            text-black
            placeholder:text-gray-400
            shadow-sm
            focus:outline-none focus:ring-1 focus:ring-brand-blue
          "
        />

        {/* Search button (optional) */}
        <button
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            bg-brand-blue text-white
            px-4 py-2 rounded-full text-sm
            hover:bg-brand-blue-dark
            hover:cursor-pointer
          "
        >
          ค้นหา
        </button>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 justify-center ">
        {[
          "x ผู้ประกอบวิชาชีพ",
          "x อบรม CFP",
          "x สอบ CFP",
        ].map((chip) => (
          <button
            key={chip}
            className="
              px-4 py-1.5
              rounded-full
              bg-gray-100 text-gray-700 text-sm
              hover:bg-gray-200 hover:cursor-pointer
            "
          >
            {chip}
          </button>
        ))}
      </div>

      <Filter />
    </div>
  );
}


const audience = [
  "บุคคลทั่วไป", "ผู้ประกอบวิชาชีพ", "องค์กร"
]

const topic = [
  "วางแผนการเงิน", "อบรม CFP", "สอบ CFP", "สมัครสมาชิก"
]


function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="text-center mb-2">
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="text-sm text-brand-blue hover:underline transition-all duration-200 hover:cursor-pointer"
        >
          {isOpen ? "ซ่อนตัวกรอง" : "+ แสดงตัวกรองเพิ่มเติม"}
        </button>
      </div>

      {isOpen && (
        <div className="border border-gray-200 shadow-sm border-1 rounded-2xl p-6 space-y-6">
          <FilterRowSelect title="สำหรับ" items={audience} />
          <FilterRowSelect title="หัวข้อ" items={topic} />
        </div>
      )}
    </div>
  );
}



function FilterRowBase({ children, title }: { children: React.ReactNode; title: string; }) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">{title}</p>
      {children}
    </div>
  );
}

function FilterRowSelect({ title, items }: { title: string; items: string[]; }) {
  return (
    <FilterRowBase title={title}>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item}
            className={`
              px-4 py-1.5
              rounded-full
              bg-gray-100 text-gray-700 text-sm
              hover:bg-gray-200 hover:cursor-pointer
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </FilterRowBase>
  );
}

function FilterRowDropdown({ title, items }: { title: string, items: string[] }) {
  return (  
    <FilterRowBase title={title}>
      <select className="w-full border rounded-lg px-3 py-2 text-sm">
        {items.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </FilterRowBase>
  );
}

type Resource = {
  title: string;
  type: "schedule" | "exam" | "study" | "form" | "problem";
};

const mockResources: Resource[] = [
  // 📅 Schedule
  {
    title: "ตารางอบรมหลักสูตร CFP® ประจำปี 2569",
    type: "schedule",
  },
  {
    title: "ตารางสอบหลักสูตร CFP® ประจำปี 2569",
    type: "schedule",
  },

  // 🧠 Study / Materials
  {
    title: "Infographic: การเตรียมตัวสอบหลักสูตร CFP®",
    type: "study",
  },
  {
    title: "Infographic: ขั้นตอนการเข้าสอบ CFP®",
    type: "study",
  },
  {
    title: "รายละเอียดรายวิชาและวัตถุประสงค์การเรียนรู้ CFP®",
    type: "study",
  },
  {
    title: "รูปแบบการอบรมและการสอบ วิชาการวางแผนการลงทุน (ปรับปรุงปี 2564)",
    type: "study",
  },
  {
    title: "Learning Outcome (LOS) วิชาการวางแผนการลงทุน",
    type: "study",
  },
  {
    title: "รายการหนังสืออ่านประกอบการสอบ CFP®",
    type: "study",
  },
  {
    title: "แจ้งการปรับปรุงเนื้อหาตำราหลักสูตร CFP®",
    type: "study",
  },
  {
    title: "ตัวอย่างข้อสอบ CFP® พร้อมเฉลย (ครั้งที่ 1/2569)",
    type: "problem",
  },
  {
    title: "กรณีศึกษา: แผนการเงินคุณวาราบิและมัทฉะ",
    type: "problem",
  },
  {
    title: "ชุดข้อสอบจำลอง CFP® วิชาการวางแผนการลงทุน",
    type: "problem",
  },
  {
    title: "ตัวอย่างโจทย์คำนวณ Time Value of Money สำหรับสอบ CFP®",
    type: "problem",
  },

  // 📝 Exam / Rules
  {
    title: "คู่มือการสอบหลักสูตรการวางแผนการเงิน CFP®",
    type: "exam",
  },
  {
    title: "มาตรการบริหารจัดการการสอบหลักสูตร CFP®",
    type: "exam",
  },
  {
    title: "ขั้นตอนและข้อปฏิบัติในการเข้าสอบหลักสูตร CFP®",
    type: "exam",
  },
  {
    title: "เครื่องคิดเลขที่อนุญาตใช้ในการสอบ CFP®",
    type: "exam",
  },

  // 📄 Forms
  {
    title: "แบบฟอร์มคำร้องขอเลื่อนสอบ CFP®",
    type: "form",
  },
  {
    title: "แบบฟอร์มแจ้งแก้ไขชื่อ-นามสกุล",
    type: "form",
  },
];



function TextCard({ res }: { res: Resource }) {
  let typeColor;
  let thaiType;

  switch (res.type) {
    case "schedule":
      typeColor = "bg-brand-teal/20 text-gray-700";
      thaiType = "ตารางเวลา";
      break;
    case "study":
      typeColor = "bg-brand-blue/20 text-gray-700";
      thaiType = "อบรม";
      break;
    case "exam":
      typeColor = "bg-brand-yellow/30 text-gray-700";
      thaiType = "สอบ";
      break;
    case "problem":
      typeColor = "bg-red-200 text-gray-700";
      thaiType = "โจทย์";
      break;
    default:
      typeColor = "bg-purple-200 text-gray-700";
      thaiType = "ฟอร์ม";
      break;
  }

  return (
    <a
      href="#"
      className="block p-5 rounded-xl border border-gray-300 shadow-sm hover:-translate-y-0.5 transition bg-white"
    >
      <h3 className="font-medium text-gray-800 leading-snug">
        {`${res.title}`}
        <span
          className={`
            inline-block
            ml-1
            px-2 py-1
            rounded-full
            text-xs
            align-middle
            ${typeColor}
          `}
        >
          {thaiType}
        </span>
      </h3>
    </a>
  );
}

export default function ResourcesDocuments() {
  return (
    <Page padding={false}>
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 pt-12 md:pt-16">
        <PageHeader title="ศูนย์เอกสาร" />
        <DocumentSearchMock />
      </div>

      <div className="p-4 pb-10">
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {mockResources
            .map((res) => (<TextCard res={res} />))}
        </div>
        <PaginationMock />
      </div>

    </Page>
  );
}
