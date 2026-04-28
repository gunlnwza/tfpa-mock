// TODO: Old UI needs change.
// - Single Search bar, smarter parsing, use tags
// - Advisor Card: remove ID, put more interesting info in card, square is OK. Must put portrait pic.
// - Advisor Modal: info ok, but need more UI to make it pazzaz

import { Page } from "../../components/layout/Page";
import { PageHeader } from "../../components/layout/global/PageHeader";


export default function FindPlanner() {
  return (
    <Page>
      <PageHeader title="รับบริการวางแผนการเงิน" />
      <PlannerSearchMock />
      <PlannerCard />
    </Page>
  );
}

function AdvisorSearchForm() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-100 rounded-2xl p-10">
      <div className="space-y-6">
        
        {/* Name */}
        <div className="flex items-center gap-6">
          <label className="w-40 text-gray-700 font-medium text-right">
            ชื่อ-นามสกุล:
          </label>
          <input
            type="text"
            placeholder="ระบุชื่อและ/หรือนามสกุล โดยไม่ต้องมีคำนำหน้า"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* License */}
        <div className="flex items-center gap-6">
          <label className="w-40 text-gray-700 font-medium text-right">
            เลขคุณวุฒิ:
          </label>
          <input
            type="text"
            placeholder="เช่น CFPTH1234567 หรือ AFPT123456"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center pt-4">
          <button
            className="
              inline-flex items-center gap-2
              px-6 py-2.5
              rounded-md
              bg-green-400 text-white font-medium
              hover:bg-green-500
              transition
            "
          >
            🔍 ค้นหา
          </button>
        </div>

      </div>
    </div>
  );
}


export function PlannerSearchMock() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-6">

      {/* Heading */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold">
          ค้นหานักวางแผนการเงิน
        </h1>
        <p className="text-gray-500 text-sm">
          ลองพิมพ์ เช่น “เกษียณ กรุงเทพ ค่าที่ปรึกษา”
        </p>
      </div>

      {/* Bean Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="🔍 ค้นหา เช่น เกษียณ กรุงเทพ ไม่มีคอมมิชชั่น"
          className="
            w-full
            rounded-full
            border border-gray-200
            px-6 py-4
            text-sm
            shadow-sm
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

      {/* Quick Chips */}
      <div className="flex flex-wrap gap-2 justify-center">
        {[
          "เกษียณ",
          "วางแผนลงทุน",
          "ภาษี",
          "ประกัน",
          "ใกล้ฉัน",
          "ไม่มีคอมมิชชั่น",
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

      {/* Expand Filters */}
      <div className="text-center">
        <button className="text-sm text-blue-600 hover:underline">
          + ตัวกรองเพิ่มเติม
        </button>
      </div>

      {/* Expanded Filters (mock always open for now) */}
      <div className="border rounded-2xl p-6 space-y-6 bg-gray-50">

        {/* Service */}
        <div>
          <p className="text-sm font-medium mb-2">บริการ</p>
          <div className="flex flex-wrap gap-2">
            {["การลงทุน", "เกษียณ", "ภาษี", "ประกัน"].map((item) => (
              <button
                key={item}
                className="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Fee */}
        <div>
          <p className="text-sm font-medium mb-2">ค่าบริการ</p>
          <div className="flex gap-2">
            {["ค่าที่ปรึกษา", "คอมมิชชั่น"].map((item) => (
              <button
                key={item}
                className="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <p className="text-sm font-medium mb-2">พื้นที่</p>
          <select className="w-full border rounded-lg px-3 py-2 text-sm">
            <option>เลือกพื้นที่</option>
            <option>กรุงเทพ</option>
            <option>เชียงใหม่</option>
            <option>ออนไลน์</option>
          </select>
        </div>

        {/* Certification */}
        <div>
          <p className="text-sm font-medium mb-2">คุณสมบัติ</p>
          <div className="flex gap-2">
            {["CFP®", "AFPT™"].map((item) => (
              <button
                key={item}
                className="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fake Results Preview */}
      <div className="space-y-3 pt-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="border rounded-xl p-4 flex justify-between items-center hover:shadow-sm"
          >
            <div>
              <p className="font-medium">ชื่อ นักวางแผน {i}</p>
              <p className="text-sm text-gray-500">
                CFP® • เกษียณ • กรุงเทพ • ค่าที่ปรึกษา
              </p>
            </div>
            <button className="text-blue-600 text-sm hover:underline">
              ดูรายละเอียด
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

function PlannerCard() {
  return (
    <div className="border rounded-2xl p-5 flex gap-4 hover:shadow-sm transition">

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
          กรุงเทพ • ค่าที่ปรึกษา • ประสบการณ์ 8 ปี
        </p>
      </div>

      {/* Action */}
      <div className="flex flex-col justify-between items-end">
        <button className="text-sm text-blue-600 hover:underline">
          ดูรายละเอียด
        </button>

        <button className="text-xs px-3 py-1.5 bg-red-600 text-white rounded-full hover:bg-red-700">
          ติดต่อ
        </button>
      </div>

    </div>
  );
}

