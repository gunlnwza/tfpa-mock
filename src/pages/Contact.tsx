import Header from "../components/Header";
import Footer from "../components/Footer";

import map from "../assets/tfpa_map_cropped.jpg"
import { Link } from "react-router-dom";

// 1. 📍 Location (header block): instant usefulness
// 2. 🗺️ Google Map (primary visual): interactive + main “where is this place”
// 3. 🧭 Infographic (supporting): “how to get there” + MRT / landmarks
// 4. 👥 Staff / departments: contact persons + roles

// TODO: format texts and spacings


function TFPAInfo() {
  return (
    <section className="space-y-4">
      <div className="space-y-2 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold border-b pb-2">Location</h2>
        <p className="font-semibold">
          สมาคมนักวางแผนการเงินไทย
        </p>
        <p>
          ชั้น 6 อาคารตลาดหลักทรัพย์แห่งประเทศไทย<br />
          93 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง<br />
          กรุงเทพมหานคร 10400
        </p>
        <p>โทรศัพท์: 0 2009 9393</p>
        <p>โทรสาร: 0 2247 7479</p>
        <p>Website: <Link to="/" className="underline text-blue-500">www.tfpa.or.th</Link></p>
      </div>
    </section>
  );
}


function GoogleMap() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden">
      <h2 className="text-xl font-semibold border-b pb-2 my-2">Google Map</h2>
      <iframe
        src="https://www.google.com/maps?q=The+Stock+Exchange+of+Thailand&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}


function InfographicMap() {
  return (
    <section>
      <h2 className="text-xl font-semibold border-b pb-2 my-2">วิธีเดินทาง</h2>
      <img src={map} alt="How to go to TFPA" className="mx-auto object-contain" />
      <p className="bg-red-300">รถไฟฟ้าใต้ดิน (MRT) สถานีศูนย์วัฒนธรรม ทางออก 3</p>
    </section>
  );
}


function ContactSection() {
  return (
    <section className="space-y-6 whitespace-pre-line">
      <h2 className="text-xl font-semibold border-b pb-2 my-2">Department</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-black rounded-xl hover:shadow">
          <p className="whitespace-pre-line">
            <p className="text-xl">การอบรมและการสอบ</p>
            {`คุณวนิดา  จรุงกิจกุล
            โทรศัพท์:  0 2009 9393 ต่อ 3731
            อีเมล:  tfpaexam@tfpa.or.th`}
          </p>
        </div>

        <div className="p-6 border border-black rounded-xl hover:shadow">
          <p className="whitespace-pre-line">
            <p className="text-xl">การยื่นขึ้นทะเบียนคุณวุฒิวิชาชีพและการต่ออายุคุณวุฒิวิชาชีพ</p>
            คุณสุรีรัตน์  ทักขิณ<br />
            โทรศัพท์:  0 2009 9393 ต่อ 3727<br />
            อีเมล:  sureerat@tfpa.or.th
          </p>
        </div>
        <div className="p-6 border border-black rounded-xl hover:shadow">
          <p className="whitespace-pre-line">
            <p className="text-xl">การเงิน</p>
              คุณทัดดาว ลิขิตกิติกุล<br />
              โทรศัพท์:  0 2009 9393 ต่อ 3729<br />
              อีเมล:  tfpa@tfpa.or.th
          </p>
        </div>
      </div>
    </section>
  );
}


function ReportSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold border-b pb-2 my-2">Report</h2>
      <h3 className="text-xl">ร้องเรียนสมาคมนักวางแผนการเงินไทย</h3>
      <p>
        ท่านสามารถแจ้งข้อร้องเรียนเกี่ยวกับการดำเนินงานของสมาคมฯ ผ่านช่องทางต่อไปนี้<br />
        <br />
        แบบฟอร์มออนไลน์ คลิก<br />
        อีเมล: info@tfpa.or.th<br />
        โทรศัพท์: 0 2009 9393
      </p>
      <br />
      <h3 className="text-xl">ร้องเรียนนักวางแผนการเงิน CFP/ที่ปรึกษาการเงิน AFPT</h3>
      <p className="my-2">
        นักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT จะต้องปฏิบัติตาม “จรรยาบรรณและ
        ความรับผิดชอบในฐานะผู้ประกอบวิชาชีพวางแผนการเงิน”ซึ่งสะท้อนให้เห็นว่านักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT มุ่งมั่นที่จะ
        ปฏิบัติงานวางแผนการเงินให้ลูกค้าโดยอยู่บนพื้นฐานของแนวปฏิบัติ และจรรยาบรรณของนักวางแผนการเงิน
      </p>
      <p className="my-2">
        สมาคมฯ ได้กำหนดกระบวนการพิจารณาความผิดทางวินัย กระบวนการอุทธรณ์ และการดำเนินการทางวินัย เพื่อใช้เป็น
        แนวปฏิบัติในกรณีที่พบว่านักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT กระทำใดๆ ที่อาจเป็นการฝ่าฝืน
        จรรยาบรรณดังกล่าว ท่านสามารถแจ้งข้อร้องเรียนเกี่ยวกับการให้บริการของนักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT ผ่านทางอีเมลที่ info@tfpa.or.th หรือทางจดหมายถึง 
      </p>
      <p className="my-2 font-bold">ผู้อำนวยการสมาคมนักวางแผนการเงินไทย </p>
      <p>
        สมาคมนักวางแผนการเงินไทย<br />
        ชั้น 6 อาคารตลาดหลักทรัพย์แห่งประเทศไทย<br />
        เลขที่ 93 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพฯ 10400
      </p>
      <p className="my-2 font-bold">
        เอกสารประกอบการแจ้งข้อร้องเรียน
      </p>
      <ul className="list-disc">
        <li>จดหมายแจ้งข้อร้องเรียนเป็นลายลักษณ์อักษร</li>
        <li>ระบุชื่อและที่อยู่ของผู้ร้องเรียน </li>
        <li>ระบุชื่อนักวางแผนการเงินที่มีการกระทำที่อาจเป็นการฝ่าฝืนจรรยาบรรณ </li>
        <li>ระบุรายละเอียดการกระทำที่อาจเป็นการฝ่าฝืนจรรยาบรรณ พร้อมหลักฐาน </li>
        <li>สัญญาการให้บริการการวางแผนการเงิน (ถ้ามี) </li>
        <li>ลงลายมือชื่อของผู้ร้องเรียนในจดหมายร้องเรียน</li>
      </ul>

      <h3 className="text-xl my-2">ร้องเรียนการใช้เครื่องหมายรับรองคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP</h3>
      <p>ท่านสามารถสอบถามข้อมูลการใช้เครื่องหมายรับรองคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP และเครื่องหมายรับรองคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT และแจ้งกรณีที่พบเห็นผู้นำเครื่องหมายดังกล่าวไปใช้อย่างไม่ถูกต้อง หรือละเมิดลิขสิทธิ์ได้ที่</p>
      <p>อีเมล: info@tfpa.or.th</p>
      <p>โทรศัพท์: 0 2009 9393</p>
    </section>
  );
}


export default function Contact() {
  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        <h1 className="text-3xl font-bold">Contact</h1>
        <TFPAInfo />
        <GoogleMap />
        <InfographicMap />
        <ContactSection />
        <ReportSection />
      </div>
      <Footer />
    </div>
  );
}
