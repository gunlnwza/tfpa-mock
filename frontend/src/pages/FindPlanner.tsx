import { PageHeader } from "../components/layout/global/PageHeader";
import { Page } from "../components/layout/Page";

import { PaginationMock } from "./resources/News";
import { useState } from "react";


export function PlannerSearchMock() {
  return (
    <div className="max-w-4xl mx-auto pt-20 pb-8 space-y-6">

      {/* Heading */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold">
          ค้นหานักวางแผนการเงิน
        </h1>
      </div>

      {/* Bean Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder={`ลองพิมพ์ "ปรึกษาการลงทุน กรุงเทพ" หรือ ชื่อ/รหัสของนักวางแผนการเงิน`}
          className="
            w-full
            rounded-full
            border border-gray-200
            px-6 py-4
            text-sm
            shadow-sm
            text-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        />

        {/* Search button (optional) */}
        <button
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            bg-blue-600 text-white
            px-4 py-2 rounded-full text-sm
            hover:bg-blue-700
          "
        >
          ค้นหา
        </button>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 justify-center">
        {[
          "x ลงทุน",
          "x ใกล้ฉัน",
        ].map((chip) => (
          <button
            key={chip}
            className="
              px-4 py-1.5
              rounded-full
              bg-gray-100 text-gray-700 text-sm
              hover:bg-gray-200
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
              hover:bg-gray-200
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

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="text-center mb-2">
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="text-sm text-blue-600 hover:underline transition-all duration-200"
        >
          {isOpen ? "ซ่อนตัวกรอง" : "+ แสดงตัวกรองเพิ่มเติม"}
        </button>
      </div>

      {isOpen && (
        <div className="border border-gray-200 shadow-sm border-2 rounded-2xl p-6 space-y-6">
          <FilterRowSelect title="บริการ" items={["ทั่วไป", "ลงทุน", "เกษียณ", "ภาษี", "ประกันชีวิต", "ประกันวินาศภัย"]} />
          <FilterRowSelect title="ค่าบริการ" items={["ค่าที่ปรึกษา", "รายชั่วโมง"]} />
          <FilterRowSelect title="พื้นที่" items={["ใกล้ฉัน", "กรุงเทพ", "ภาคเหนือ", "ภาคตะวันออก", "ภาคตะวันตก", "ภาคใต้", "ออนไลน์"]} />
          <FilterRowSelect title="คุณสมบัติ" items={["CFP®", "AFPT™"]} />
        </div>
      )}
    </div>
  );
}


function PlannerCard() {
  return (
    <div className="border border-gray-200 shadow-md rounded-2xl p-5 flex gap-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg group">

      {/* Avatar */}
      <div className="w-14 h-14 rounded-full bg-gray-200 flex-shrink-0" />

      {/* Main */}
      <div className="flex-1 space-y-2">

        {/* Name + badge */}
        <div className="flex items-center gap-2">
          <p className="font-semibold">สมชาย ใจดี</p>
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-600">
            CFP®
          </span>
        </div>

        {/* Specialties (THIS is the most important line) */}
        <div className="flex flex-wrap gap-1">
          {["เกษียณ", "การลงทุน", "ภาษี"].map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Key info (compressed, no paragraphs) */}
        <p className="text-sm text-gray-500">
          กรุงเทพ • ประสบการณ์ 8 ปี
        </p>
      </div>

      {/* Action */}
      <div className="flex flex-col">
        <button className="text-xs rounded-full group-hover:text-blue-600 transition">
          ดูรายละเอียด
        </button>
      </div>
    </div>
  );
}

function RepeatPlannerCard({ n }: { n: number }) {
  return (
    <>
      {Array.from({ length: n }).map((_, i) => (
        <PlannerCard key={i} />
      ))}
    </>
  );
}


export default function FindPlanner() {
  return (
    <Page>
      <PageHeader title="รับบริการวางแผนการเงิน" />

      <PlannerSearchMock />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RepeatPlannerCard n={10} />
      </div>
      <PaginationMock />
    </Page>
  );
}
