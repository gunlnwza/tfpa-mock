import { Page } from "../../components/layout/Page";
import { PageHeader } from "../../components/global/PageHeader";


import { useState } from "react";
import { PaginationMock } from "./News";

const categories = [
  "เกษียณ",
  "ลงทุน",
  "ประกันภัย",
  "ภาษีและมรดก",
  "บริหารจัดการเงิน",
];

type Blog = {
  id: number;
  title: string;
  date: string;
  category: string;
};

const mockBlogs: Blog[] = [
  {
    id: 1,
    title: "สรุปแล้ว จะวางแผนบำนาญสุขภาพ ประกันสังคมยังไงดี?",
    date: "เม.ย. 2569",
    category: "เกษียณ",
  },
  {
    id: 2,
    title: "เก็บเงิน 5 ล้าน เพื่อเตรียมเกษียณ",
    date: "ก.พ. 2569",
    category: "เกษียณ",
  },
  {
    id: 3,
    title: "เกษียณก่อน เกษียณสุข หรือ เกษียณสุขพลัน วันเกษียณ",
    date: "ก.ย. 2568",
    category: "เกษียณ",
  },
  {
    id: 4,
    title: "สรุปแล้ว จะวางแผนบำนาญสุขภาพ ประกันสังคมยังไงดี?",
    date: "เม.ย. 2569",
    category: "เกษียณ",
  },
  {
    id: 5,
    title: "เก็บเงิน 5 ล้าน เพื่อเตรียมเกษียณ",
    date: "ก.พ. 2569",
    category: "เกษียณ",
  },
  {
    id: 6,
    title: "เกษียณก่อน เกษียณสุข หรือ เกษียณสุขพลัน วันเกษียณ",
    date: "ก.ย. 2568",
    category: "เกษียณ",
  },
];

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("เกษียณ");

  return (
    <section className="max-w-5xl mx-auto px-4">

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-4 py-2 rounded-full text-sm transition
              ${
                activeCategory === cat
                  ? "bg-brand-blue text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filters */}
      {/* <div className="flex flex-col md:flex-row gap-3 mb-8">
        <select className="border rounded-lg px-4 py-2 text-sm text-gray-600">
          <option>เลือกปี</option>
          <option>2569</option>
          <option>2568</option>
        </select>

        <select className="border rounded-lg px-4 py-2 text-sm text-gray-600">
          <option>เลือกเดือน</option>
          <option>มกราคม</option>
          <option>กุมภาพันธ์</option>
        </select>

        <button className="bg-brand-teal text-white px-4 py-2 rounded-lg text-sm hover:bg-brand-teal/80">
          ค้นหา
        </button>
      </div> */}

      {/* Blog List */}
      <div className="space-y-4">
        {mockBlogs
          .filter((b) => b.category === activeCategory)
          .map((blog) => (<TopicCard blog={blog} />))}
      </div>
    </section>
  );
}


export function TopicCard({ blog }: { blog: Blog }) {
  return (
    <a
      key={blog.id}
      href="#"
      className="block p-5 rounded-xl border border-gray-300 shadow-sm hover:-translate-y-0.5 transition bg-white"
    >
      <p className="text-sm text-gray-400 mb-1">{blog.date}</p>
      <h3 className="font-medium text-gray-800 leading-snug">
        {blog.title}
      </h3>
    </a>
  );
}


export function ResourcesBlogs() {
  return (
    <Page>
      <PageHeader title="บทความ" />
      <BlogSection />
      <PaginationMock />
    </Page>
  );
}
