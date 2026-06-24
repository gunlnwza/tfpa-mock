/**
 * Seed script for tfpa-cms (Strapi v5)
 *
 * Populates: announcements, news, pdfs (magazines, news, e-books, brochures), rich
 *
 * Run from the tfpa-cms directory:
 *   npx ts-node --project tsconfig.json scripts/seed.ts
 *
 * Or add to package.json scripts and run:
 *   npm run seed
 *
 * Note: Strapi must NOT be running when you execute this script.
 */

import path from "path";

// Strapi v5 programmatic bootstrap
// eslint-disable-next-line @typescript-eslint/no-require-imports
const createStrapi = require("@strapi/strapi").default;

// ─── Data ──────────────────────────────────────────────────────────────────

const announcements = [
  {
    title: "ประกาศรับสมัครสอบหลักสูตร CFP® ครั้งที่ 1/2569",
    issue: "1/2569",
    date: "2026-01-15",
  },
  {
    title: "ประกาศผลสอบหลักสูตร CFP® ครั้งที่ 2/2568",
    issue: "2/2568",
    date: "2025-12-10",
  },
  {
    title: "ประกาศปรับปรุงเนื้อหาหลักสูตรการวางแผนการเงิน CFP® ปี 2569",
    issue: "ปรับปรุง 2569",
    date: "2025-11-01",
  },
  {
    title: "ประกาศปิดรับสมัครสมาชิกสมาคมนักวางแผนการเงินไทย รอบที่ 2/2568",
    issue: "2/2568",
    date: "2025-10-20",
  },
  {
    title: "ประกาศรับสมัครสอบหลักสูตร CFP® ครั้งที่ 2/2568",
    issue: "2/2568",
    date: "2025-09-01",
  },
  {
    title: "ประกาศตารางอบรมหลักสูตร CFP® ประจำไตรมาสที่ 3/2568",
    issue: "Q3/2568",
    date: "2025-07-05",
  },
  {
    title: "ประกาศผลสอบหลักสูตร AFPT™ ครั้งที่ 1/2568",
    issue: "1/2568",
    date: "2025-06-30",
  },
  {
    title: "ประกาศปรับปรุงเกณฑ์การรับรองนักวางแผนการเงิน CFP® ใหม่",
    issue: "เกณฑ์ 2568",
    date: "2025-05-15",
  },
  {
    title: "ประกาศรับสมัครสอบหลักสูตร CFP® ครั้งที่ 1/2568",
    issue: "1/2568",
    date: "2025-03-01",
  },
  {
    title: "ประกาศผลการพิจารณาคุณสมบัติผู้สมัครสมาชิกสามัญ ประจำปี 2568",
    issue: "1/2568",
    date: "2025-02-14",
  },
];

const news = [
  {
    title: "ประกาศผลสอบ CFP® ครั้งที่ 1/2569",
    date: "2026-04-10T00:00:00.000Z",
    issue: "1/2569",
    blogUrl: "",
  },
  {
    title: "ปฏิทินการอบรมหลักสูตรการวางแผนการเงิน CFP® ประจำปี 2569",
    date: "2026-01-05T00:00:00.000Z",
    issue: "ปี 2569",
    blogUrl: "",
  },
  {
    title: "แจ้งเลื่อนกำหนดการสอบ CFP® เนื่องจากวันหยุดชดเชย",
    date: "2025-12-20T00:00:00.000Z",
    issue: "2/2568",
    blogUrl: "",
  },
  {
    title: "ผลการทดสอบความรู้ผู้แนะนำการลงทุนตราสารซับซ้อนประเภท 2",
    date: "2025-11-25T00:00:00.000Z",
    issue: "3/2568",
    blogUrl: "",
  },
  {
    title: "ประกาศผลสอบหลักสูตร AFPT™ ครั้งที่ 2/2568",
    date: "2025-10-15T00:00:00.000Z",
    issue: "2/2568",
    blogUrl: "",
  },
  {
    title: "ข่าวสารสมาคมนักวางแผนการเงินไทย ฉบับที่ 18 ประจำเดือนกันยายน 2568",
    date: "2025-09-01T00:00:00.000Z",
    issue: "18/2568",
    blogUrl: "",
  },
  {
    title: "ประกาศผลสอบ CFP® ครั้งที่ 2/2568",
    date: "2025-08-05T00:00:00.000Z",
    issue: "2/2568",
    blogUrl: "",
  },
  {
    title: "แจ้งการปรับปรุงเนื้อหาตำราหลักสูตร CFP® วิชาการวางแผนการลงทุน",
    date: "2025-06-10T00:00:00.000Z",
    issue: "ปรับปรุง 2568",
    blogUrl: "",
  },
  {
    title: "ข่าวประชาสัมพันธ์งาน TFPA Annual Conference 2568",
    date: "2025-04-20T00:00:00.000Z",
    issue: "CONF/2568",
    blogUrl: "",
  },
  {
    title: "ประกาศผลสอบ CFP® ครั้งที่ 1/2568",
    date: "2025-03-30T00:00:00.000Z",
    issue: "1/2568",
    blogUrl: "",
  },
];

const pdfs = [
  // ─── TFPA Magazine ──────────────────────────────────
  {
    title: "TFPA Magazine ฉบับที่ 6 เดือนพฤศจิกายน–ธันวาคม 2568",
    issue: "6/2568",
    date: "2025-11-01",
    docType: "TFPA Magazine",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/tfpa-magazine-6-2568.pdf",
    thumbnailUrl: "https://placehold.co/300x420/1a3c6e/ffffff?text=TFPA+Mag+6",
    blogUrl: "",
  },
  {
    title: "TFPA Magazine ฉบับที่ 5 เดือนกันยายน–ตุลาคม 2568",
    issue: "5/2568",
    date: "2025-09-01",
    docType: "TFPA Magazine",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/tfpa-magazine-5-2568.pdf",
    thumbnailUrl: "https://placehold.co/300x420/1a3c6e/ffffff?text=TFPA+Mag+5",
    blogUrl: "",
  },
  {
    title: "TFPA Magazine ฉบับที่ 4 เดือนกรกฎาคม–สิงหาคม 2568",
    issue: "4/2568",
    date: "2025-07-01",
    docType: "TFPA Magazine",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/tfpa-magazine-4-2568.pdf",
    thumbnailUrl: "https://placehold.co/300x420/1a3c6e/ffffff?text=TFPA+Mag+4",
    blogUrl: "",
  },
  {
    title: "TFPA Magazine ฉบับที่ 3 เดือนพฤษภาคม–มิถุนายน 2568",
    issue: "3/2568",
    date: "2025-05-01",
    docType: "TFPA Magazine",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/tfpa-magazine-3-2568.pdf",
    thumbnailUrl: "https://placehold.co/300x420/1a3c6e/ffffff?text=TFPA+Mag+3",
    blogUrl: "",
  },
  {
    title: "TFPA Magazine ฉบับที่ 2 เดือนมีนาคม–เมษายน 2568",
    issue: "2/2568",
    date: "2025-03-01",
    docType: "TFPA Magazine",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/tfpa-magazine-2-2568.pdf",
    thumbnailUrl: "https://placehold.co/300x420/1a3c6e/ffffff?text=TFPA+Mag+2",
    blogUrl: "",
  },
  {
    title: "TFPA Magazine ฉบับที่ 1 เดือนมกราคม–กุมภาพันธ์ 2568",
    issue: "1/2568",
    date: "2025-01-01",
    docType: "TFPA Magazine",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/tfpa-magazine-1-2568.pdf",
    thumbnailUrl: "https://placehold.co/300x420/1a3c6e/ffffff?text=TFPA+Mag+1",
    blogUrl: "",
  },

  // ─── TFPA News ───────────────────────────────────────
  {
    title: "TFPA News ฉบับที่ 18 เดือนกันยายน 2568",
    issue: "18",
    date: "2025-09-01",
    docType: "TFPA News",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/tfpa-news-18.pdf",
    thumbnailUrl: "https://placehold.co/300x420/009688/ffffff?text=TFPA+News+18",
    blogUrl: "",
  },
  {
    title: "TFPA News ฉบับที่ 17 เดือนมิถุนายน 2568",
    issue: "17",
    date: "2025-06-01",
    docType: "TFPA News",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/tfpa-news-17.pdf",
    thumbnailUrl: "https://placehold.co/300x420/009688/ffffff?text=TFPA+News+17",
    blogUrl: "",
  },
  {
    title: "TFPA News ฉบับที่ 16 เดือนมีนาคม 2568",
    issue: "16",
    date: "2025-03-01",
    docType: "TFPA News",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/tfpa-news-16.pdf",
    thumbnailUrl: "https://placehold.co/300x420/009688/ffffff?text=TFPA+News+16",
    blogUrl: "",
  },
  {
    title: "TFPA News ฉบับที่ 15 เดือนธันวาคม 2567",
    issue: "15",
    date: "2024-12-01",
    docType: "TFPA News",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/tfpa-news-15.pdf",
    thumbnailUrl: "https://placehold.co/300x420/009688/ffffff?text=TFPA+News+15",
    blogUrl: "",
  },
  {
    title: "TFPA News ฉบับที่ 14 เดือนกันยายน 2567",
    issue: "14",
    date: "2024-09-01",
    docType: "TFPA News",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/tfpa-news-14.pdf",
    thumbnailUrl: "https://placehold.co/300x420/009688/ffffff?text=TFPA+News+14",
    blogUrl: "",
  },
  {
    title: "TFPA News ฉบับที่ 13 เดือนมิถุนายน 2567",
    issue: "13",
    date: "2024-06-01",
    docType: "TFPA News",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/tfpa-news-13.pdf",
    thumbnailUrl: "https://placehold.co/300x420/009688/ffffff?text=TFPA+News+13",
    blogUrl: "",
  },

  // ─── E-Books ─────────────────────────────────────────
  {
    title: "คู่มือการวางแผนการเงินส่วนบุคคลสำหรับมือใหม่",
    issue: "",
    date: "2025-08-01",
    docType: "E-Book",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/ebook-personal-finance-guide.pdf",
    thumbnailUrl: "https://placehold.co/300x420/f59e0b/ffffff?text=E-Book",
    blogUrl: "",
  },
  {
    title: "เส้นทางสู่อิสรภาพทางการเงิน: จากศูนย์ถึงล้าน",
    issue: "",
    date: "2025-05-15",
    docType: "E-Book",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/ebook-financial-freedom.pdf",
    thumbnailUrl: "https://placehold.co/300x420/f59e0b/ffffff?text=E-Book",
    blogUrl: "",
  },
  {
    title: "การวางแผนเกษียณอายุสำหรับคนรุ่นใหม่",
    issue: "",
    date: "2024-11-01",
    docType: "E-Book",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/ebook-retirement-planning.pdf",
    thumbnailUrl: "https://placehold.co/300x420/f59e0b/ffffff?text=E-Book",
    blogUrl: "",
  },
  {
    title: "ทำความเข้าใจภาษีเงินได้บุคคลธรรมดาและการลดหย่อน",
    issue: "",
    date: "2024-08-20",
    docType: "E-Book",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/ebook-tax-planning.pdf",
    thumbnailUrl: "https://placehold.co/300x420/f59e0b/ffffff?text=E-Book",
    blogUrl: "",
  },

  // ─── Brochures — General Audience ────────────────────
  {
    title: "โบรชัวร์: ทำไมต้องวางแผนการเงินกับนักวางแผนการเงิน CFP®",
    issue: "",
    date: "2025-06-01",
    docType: "Brochures",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/brochure-why-cfp.pdf",
    thumbnailUrl: "https://placehold.co/300x420/6366f1/ffffff?text=Brochure",
    blogUrl: "",
  },
  {
    title: "โบรชัวร์: 5 ขั้นตอนการวางแผนการเงินที่ดี",
    issue: "",
    date: "2025-03-01",
    docType: "Brochures",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/brochure-5-steps-financial-plan.pdf",
    thumbnailUrl: "https://placehold.co/300x420/6366f1/ffffff?text=Brochure",
    blogUrl: "",
  },
  {
    title: "โบรชัวร์: วางแผนประกันชีวิตและประกันสุขภาพ",
    issue: "",
    date: "2024-09-15",
    docType: "Brochures",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/brochure-insurance-planning.pdf",
    thumbnailUrl: "https://placehold.co/300x420/6366f1/ffffff?text=Brochure",
    blogUrl: "",
  },
  {
    title: "โบรชัวร์: เริ่มต้นลงทุนสำหรับคนทุกวัย",
    issue: "",
    date: "2024-06-01",
    docType: "Brochures",
    audienceType: "General Audience",
    pdfUrl: "https://example.com/brochure-investment-starter.pdf",
    thumbnailUrl: "https://placehold.co/300x420/6366f1/ffffff?text=Brochure",
    blogUrl: "",
  },

  // ─── Brochures — Professionals ────────────────────────
  {
    title: "โบรชัวร์: เส้นทางสู่การเป็นนักวางแผนการเงิน CFP®",
    issue: "",
    date: "2025-07-01",
    docType: "Brochures",
    audienceType: "Professionals",
    pdfUrl: "https://example.com/brochure-cfp-career-path.pdf",
    thumbnailUrl: "https://placehold.co/300x420/059669/ffffff?text=Pro+Brochure",
    blogUrl: "",
  },
  {
    title: "โบรชัวร์: ประโยชน์ของการเป็นสมาชิกสมาคมนักวางแผนการเงินไทย",
    issue: "",
    date: "2025-04-15",
    docType: "Brochures",
    audienceType: "Professionals",
    pdfUrl: "https://example.com/brochure-member-benefits.pdf",
    thumbnailUrl: "https://placehold.co/300x420/059669/ffffff?text=Pro+Brochure",
    blogUrl: "",
  },
  {
    title: "โบรชัวร์: CPD กับการรักษาใบอนุญาต CFP®",
    issue: "",
    date: "2025-01-10",
    docType: "Brochures",
    audienceType: "Professionals",
    pdfUrl: "https://example.com/brochure-cpd-requirements.pdf",
    thumbnailUrl: "https://placehold.co/300x420/059669/ffffff?text=Pro+Brochure",
    blogUrl: "",
  },
  {
    title: "โบรชัวร์: จรรยาบรรณและมาตรฐานวิชาชีพนักวางแผนการเงิน CFP®",
    issue: "",
    date: "2024-10-01",
    docType: "Brochures",
    audienceType: "Professionals",
    pdfUrl: "https://example.com/brochure-cfp-ethics-standards.pdf",
    thumbnailUrl: "https://placehold.co/300x420/059669/ffffff?text=Pro+Brochure",
    blogUrl: "",
  },

  // ─── Brochures — Company ──────────────────────────────
  {
    title: "โบรชัวร์: ประโยชน์ของการมีนักวางแผนการเงิน CFP® ในองค์กร",
    issue: "",
    date: "2025-05-01",
    docType: "Brochures",
    audienceType: "Company",
    pdfUrl: "https://example.com/brochure-cfp-for-company.pdf",
    thumbnailUrl: "https://placehold.co/300x420/dc2626/ffffff?text=Corp+Brochure",
    blogUrl: "",
  },
  {
    title: "โบรชัวร์: การพัฒนาบุคลากรด้านการวางแผนการเงินสำหรับองค์กร",
    issue: "",
    date: "2025-02-15",
    docType: "Brochures",
    audienceType: "Company",
    pdfUrl: "https://example.com/brochure-corporate-training.pdf",
    thumbnailUrl: "https://placehold.co/300x420/dc2626/ffffff?text=Corp+Brochure",
    blogUrl: "",
  },
  {
    title: "โบรชัวร์: โปรแกรมสวัสดิการพนักงานและการวางแผนการเงิน",
    issue: "",
    date: "2024-11-20",
    docType: "Brochures",
    audienceType: "Company",
    pdfUrl: "https://example.com/brochure-employee-benefit-program.pdf",
    thumbnailUrl: "https://placehold.co/300x420/dc2626/ffffff?text=Corp+Brochure",
    blogUrl: "",
  },

  // ─── For Professionals ────────────────────────────────
  {
    title: "ตารางสอบหลักสูตร CFP® ครั้งที่ 1/2569",
    issue: "1/2569",
    date: "2026-01-01",
    docType: "For Professionals",
    audienceType: "Professionals",
    pdfUrl: "https://example.com/cfp-exam-schedule-1-2569.pdf",
    thumbnailUrl: "https://placehold.co/300x420/7c3aed/ffffff?text=For+Pro",
    blogUrl: "",
  },
  {
    title: "ตารางอบรมหลักสูตร CFP® ประจำปี 2569",
    issue: "ปี 2569",
    date: "2026-01-01",
    docType: "For Professionals",
    audienceType: "Professionals",
    pdfUrl: "https://example.com/cfp-training-schedule-2569.pdf",
    thumbnailUrl: "https://placehold.co/300x420/7c3aed/ffffff?text=For+Pro",
    blogUrl: "",
  },
  {
    title: "รายละเอียดรายวิชาและวัตถุประสงค์การเรียนรู้ CFP® (LOS) ฉบับปรับปรุง 2568",
    issue: "LOS 2568",
    date: "2025-08-01",
    docType: "For Professionals",
    audienceType: "Professionals",
    pdfUrl: "https://example.com/cfp-los-2568.pdf",
    thumbnailUrl: "https://placehold.co/300x420/7c3aed/ffffff?text=For+Pro",
    blogUrl: "",
  },
  {
    title: "คู่มือการสอบหลักสูตรการวางแผนการเงิน CFP® 2568",
    issue: "คู่มือ 2568",
    date: "2025-03-01",
    docType: "For Professionals",
    audienceType: "Professionals",
    pdfUrl: "https://example.com/cfp-exam-handbook-2568.pdf",
    thumbnailUrl: "https://placehold.co/300x420/7c3aed/ffffff?text=For+Pro",
    blogUrl: "",
  },
];

const richContent = [
  {
    title: "คำถามที่พบบ่อย: การสอบ CFP®",
    content: [
      { type: "heading", level: "h2", children: [{ type: "text", text: "คำถามที่พบบ่อยเกี่ยวกับการสอบ CFP®" }] },
      { type: "paragraph", children: [{ type: "text", text: "ด้านล่างนี้คือคำถามที่ผู้สมัครสอบมักถามบ่อยเกี่ยวกับหลักสูตรและกระบวนการสอบ CFP®" }] },
      { type: "heading", level: "h3", children: [{ type: "text", text: "1. CFP® คืออะไร?" }] },
      { type: "paragraph", children: [{ type: "text", text: "CFP® (Certified Financial Planner) คือวุฒิบัตรวิชาชีพสำหรับนักวางแผนการเงินที่ได้รับการยอมรับในระดับสากล ผู้ที่ผ่านการอบรมและสอบตามเกณฑ์ที่กำหนดจะได้รับใบอนุญาตจากสมาคมนักวางแผนการเงินไทย (TFPA)" }] },
      { type: "heading", level: "h3", children: [{ type: "text", text: "2. หลักสูตรการสอบประกอบด้วยวิชาอะไรบ้าง?" }] },
      {
        type: "list",
        format: "unordered",
        children: [
          { type: "list-item", children: [{ type: "text", text: "วิชาที่ 1: หลักการวางแผนการเงิน ภาษี และจรรยาบรรณ" }] },
          { type: "list-item", children: [{ type: "text", text: "วิชาที่ 2: การวางแผนการลงทุน" }] },
          { type: "list-item", children: [{ type: "text", text: "วิชาที่ 3: การวางแผนประกันภัยและการวางแผนเพื่อวัยเกษียณ" }] },
          { type: "list-item", children: [{ type: "text", text: "วิชาที่ 4: การวางแผนภาษีและมรดก" }] },
          { type: "list-item", children: [{ type: "text", text: "วิชาที่ 5: การวางแผนการเงินแบบองค์รวม" }] },
        ],
      },
      { type: "heading", level: "h3", children: [{ type: "text", text: "3. สมัครสอบได้ที่ไหน?" }] },
      { type: "paragraph", children: [{ type: "text", text: "ผู้สมัครสามารถสมัครสอบผ่านเว็บไซต์ของสมาคมนักวางแผนการเงินไทย (TFPA) หรือติดต่อสอบถามได้โดยตรงที่สำนักงานสมาคม" }] },
    ],
  },
  {
    title: "เกี่ยวกับสมาคมนักวางแผนการเงินไทย",
    content: [
      { type: "heading", level: "h2", children: [{ type: "text", text: "สมาคมนักวางแผนการเงินไทย (TFPA)" }] },
      { type: "paragraph", children: [{ type: "text", text: "สมาคมนักวางแผนการเงินไทย (Thai Financial Planners Association: TFPA) ก่อตั้งขึ้นเพื่อส่งเสริมและพัฒนาวิชาชีพการวางแผนการเงินในประเทศไทย" }] },
      { type: "heading", level: "h3", children: [{ type: "text", text: "พันธกิจของสมาคม" }] },
      {
        type: "list",
        format: "unordered",
        children: [
          { type: "list-item", children: [{ type: "text", text: "ส่งเสริมมาตรฐานวิชาชีพการวางแผนการเงินในระดับสากล" }] },
          { type: "list-item", children: [{ type: "text", text: "พัฒนาความรู้และทักษะของนักวางแผนการเงิน" }] },
          { type: "list-item", children: [{ type: "text", text: "คุ้มครองผลประโยชน์ของประชาชนในการรับบริการวางแผนการเงิน" }] },
          { type: "list-item", children: [{ type: "text", text: "สร้างความเชื่อมั่นในวิชาชีพนักวางแผนการเงิน" }] },
        ],
      },
      { type: "heading", level: "h3", children: [{ type: "text", text: "วิสัยทัศน์" }] },
      { type: "paragraph", children: [{ type: "text", text: "เป็นองค์กรวิชาชีพด้านการวางแผนการเงินชั้นนำของอาเซียน ที่ได้รับการยอมรับในระดับสากล" }] },
    ],
  },
];

// ─── Seed ───────────────────────────────────────────────────────────────────

async function seed() {
  const app = await createStrapi({
    appDir: path.resolve(__dirname, ".."),
    distDir: path.resolve(__dirname, "..", "dist"),
  }).load();

  console.log("🌱 Starting seed...\n");

  // Announcements
  console.log("📢 Seeding announcements...");
  for (const item of announcements) {
    await app.documents("api::announcement.announcement").create({
      data: item,
      status: "published",
    });
  }
  console.log(`   ✓ ${announcements.length} announcements created`);

  // News
  console.log("📰 Seeding news...");
  for (const item of news) {
    await app.documents("api::new.new").create({
      data: item,
      status: "published",
    });
  }
  console.log(`   ✓ ${news.length} news items created`);

  // PDFs
  console.log("📄 Seeding PDFs...");
  for (const item of pdfs) {
    await app.documents("api::pdf.pdf").create({
      data: item,
      status: "published",
    });
  }
  console.log(`   ✓ ${pdfs.length} PDFs created`);

  // Rich content
  console.log("✏️  Seeding rich content...");
  for (const item of richContent) {
    await app.documents("api::rich.rich").create({
      data: item,
      status: "published",
    });
  }
  console.log(`   ✓ ${richContent.length} rich content items created`);

  console.log("\n✅ Seed complete!");
  await app.destroy();
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
