import { PageHeader } from "../components/layout/global/PageHeader";
import { Page } from "../components/layout/Page";

import { PaginationMock } from "./resources/News";
import { useState } from "react";

import { Section } from "../components/layout/Section";


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
          placeholder={`ลองพิมพ์ "ปรึกษาการเงินทั่วไป กรุงเทพฯ" หรือ ชื่อ/รหัสของนักวางแผนการเงิน`}
          className="
            w-full
            rounded-full
            border border-gray-200
            px-6 py-4
            text-sm
            text-black
            placeholder:text-gray-400
            shadow-sm
            focus:outline-none focus:ring-1 focus:ring-blue-500
          "
        />

        {/* Search button (optional) */}
        <button
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            bg-blue-600 text-white
            px-4 py-2 rounded-full text-sm
            hover:bg-blue-700
            hover:cursor-pointer
          "
        >
          ค้นหา
        </button>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 justify-center ">
        {[
          "x การเงินองค์รวม",
          "x ลงทุน",
          "x ใกล้ฉัน",
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

const services = [
  "การเงินองค์รวม", "รายรับ-รายจ่าย", "ลงทุน", "จัดการหนี้สิน", "ประกันชีวิต-สุขภาพ", "ประกันวินาศภัย",
  "เกษียณ", "การศึกษาบุตร", "ภาษีบุคคล", "ภาษีนิติบุคคล", "มรดก-พินัยกรรม", "บริษัทโฮลดิ้ง-ธรรมนูญของครอบครัว"
]

const serviceFees = [
  "ค่าจัดทำแผนการเงิน", "ค่าคอมมิชชั่น", "ค่าปรึกษารายชั่วโมง"
]

const areas = [
  "ออนไลน์", "ใกล้ฉัน", "กรุงเทพฯ และปริมณฑล", "ภาคกลาง",
  "ภาคเหนือ", "ภาคตะวันออก", "ภาคตะวันออกเฉียงเหนือ", "ภาคตะวันตก", "ภาคใต้", 
]


function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="text-center mb-2">
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="text-sm text-blue-600 hover:underline transition-all duration-200 hover:cursor-pointer"
        >
          {isOpen ? "ซ่อนตัวกรอง" : "+ แสดงตัวกรองเพิ่มเติม"}
        </button>
      </div>

      {isOpen && (
        <div className="border border-gray-200 shadow-sm border-1 rounded-2xl p-6 space-y-6">
          <FilterRowSelect title="ประเภทบริการ" items={services} />
          <FilterRowSelect title="การคิดค่าบริการ" items={serviceFees} />
          <FilterRowSelect title="พื้นที่" items={areas} />
          {/* <FilterRowSelect title="คุณสมบัติ" items={["CFP®", "AFPT™"]} /> */}
        </div>
      )}
    </div>
  );
}


function PlannerCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
      <button
        onClick={() => setIsOpen(true)}
        className="text-xs rounded-full group cursor-pointer"
      >
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
            <p className="text-sm text-gray-500 text-left">
              กรุงเทพ • ประสบการณ์ 8 ปี
            </p>
          </div>
          <div className="flex flex-col group-hover:text-blue-600 transition">
              ดูรายละเอียด
          </div>
        </div>
      </button>
    </>
  );
}


function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">

      <div className="relative bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="text-xl absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          ✕
        </button>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">

          {/* LEFT: PROFILE */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col items-center text-center">

            {/* Avatar */}
            <div className="w-32 h-32 rounded-full bg-gray-200 mb-4" />

            {/* Name */}
            <p className="text-lg font-semibold">
              สมชาย ใจดี
            </p>
            <p className="text-sm text-gray-500 mb-2">
              [ชื่อเล่น]
            </p>

            {/* Contact */}
            <div className="text-sm text-gray-600 space-y-1 mt-4">
              <p>📞 087-XXX-XXXX</p>
              <p>✉️ example@email.com</p>
              <p className="text-blue-600 break-all">
                fb.com/profile
              </p>
            </div>

            {/* Role */}
            <div className="mt-6 text-sm">
              <p className="font-medium text-gray-700">
                อาชีพหลัก
              </p>
              <p className="text-gray-500">
                นักวางแผนการเงิน CFP®
              </p>
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="md:col-span-2 overflow-y-auto p-6 space-y-6 text-sm">

            {/* Section */}
            <Section title="ประวัติการศึกษา">
              <ul className="list-disc ml-5 space-y-1">
                <li>ปริญญาตรี ...</li>
                <li>ปริญญาโท ...</li>
              </ul>
            </Section>

            <Section title="ประสบการณ์">
              <ul className="list-disc ml-5 space-y-1">
                <li>ประสบการณ์ 8 ปี</li>
                <li>Money & Life Talk</li>
              </ul>
            </Section>

            <Section title="พื้นที่ให้บริการ">
              <div className="grid grid-cols-2 gap-2">
                <span>กรุงเทพ</span>
                <span>ภาคกลาง</span>
                <span>ภาคเหนือ</span>
                <span>ภาคใต้</span>
              </div>
            </Section>

            <Section title="ความเชี่ยวชาญ">
              <div className="flex flex-wrap gap-2">
                {["เกษียณ", "ภาษี", "การลงทุน"].map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Section>

            <Section title="การคิดค่าบริการ">
              <ul className="list-disc ml-5 space-y-1">
                <li>คิดค่าจัดทำแผน</li>
                <li>ค่าคอมมิชชั่น</li>
              </ul>
            </Section>

          </div>
        </div>
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
