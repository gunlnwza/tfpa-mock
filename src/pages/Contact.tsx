import Header from "../components/Header";
import Footer from "../components/Footer";

import map from "../assets/how_to_go_to_tfpa.png"
import { Link } from "react-router-dom";

// 1. 📍 Location (header block): instant usefulness
// 2. 🗺️ Google Map (primary visual): interactive + main “where is this place”
// 3. 🧭 Infographic (supporting): “how to get there” + MRT / landmarks
// 4. 👥 Staff / departments: contact persons + roles


function TFPAInfo() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold border-b pb-2">Location</h2>
      <div className="border border-black rounded-xl p-4 text-sm leading-relaxed">
        <p className="font-semibold">สมาคมนักวางแผนการเงินไทย</p>
        <p>
          ชั้น 6 อาคารตลาดหลักทรัพย์แห่งประเทศไทย<br />
          93 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง<br />
          กรุงเทพมหานคร 10400
        </p>
        <p>
          โทรศัพท์: 0 2009 9393<br />
          โทรสาร: 0 2247 7479<br />
          Website: <Link to="/" className="underline text-blue-500">www.tfpa.or.th</Link>
        </p>
      </div>
    </section>
  );
}


function GoogleMap() {
  return (
    <section className="space-y-6">
      <div className="w-full h-[500px] rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold border-b pb-2 my-2">Google Map</h2>
        <iframe
          src="https://www.google.com/maps?q=The+Stock+Exchange+of+Thailand&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}


// TODO: edit into pic
function InfographicMap() {
  return (
    <section>
      <h2 className="text-xl font-semibold border-b pb-2 my-2">วิธีเดินทาง</h2>
      <p className="my-4"><b>รถไฟฟ้าใต้ดิน (MRT):</b> สถานีศูนย์วัฒนธรรม ทางออก 3</p>

      <p className="text-xs text-gray-500">แผนที่การเดินทางมายังสมาคมฯ</p>
      <div className="border border-gray-300">
        <img src={map} alt="How to go to TFPA" className="mx-auto object-contain" />
      </div>
    </section>
  );
}


function ContactSection() {
  return (
    <section className="space-y-6 whitespace-pre-line">
      <h2 className="text-xl font-semibold border-b pb-2 my-2">Department</h2>

        <div className="border border-black rounded-xl p-4 text-sm leading-relaxed">
          <p className="font-semibold">การอบรมและการสอบ</p>
          <p>
            คุณวนิดา  จรุงกิจกุล<br />
            โทรศัพท์:  0 2009 9393 ต่อ 3731<br />
            อีเมล:  tfpaexam@tfpa.or.th
          </p>
        </div>

        <div className="border border-black rounded-xl p-4 text-sm leading-relaxed">
          <p className="font-semibold">การยื่นขึ้นทะเบียนคุณวุฒิวิชาชีพและการต่ออายุคุณวุฒิวิชาชีพ</p>
          <p>
            คุณสุรีรัตน์  ทักขิณ<br />
            โทรศัพท์:  0 2009 9393 ต่อ 3727<br />
            อีเมล:  sureerat@tfpa.or.th
          </p>
        </div>

        <div className="border border-black rounded-xl p-4 text-sm leading-relaxed">
          <p className="font-semibold">การเงิน</p>
          <p>
            คุณทัดดาว ลิขิตกิติกุล<br />
            โทรศัพท์:  0 2009 9393 ต่อ 3729<br />
            อีเมล:  tfpa@tfpa.or.th
          </p>
        </div>
    </section>
  );
}


function ReportSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold border-b pb-2">Report</h2>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">ร้องเรียนสมาคมนักวางแผนการเงินไทย</h3>
        <p className="text-sm leading-relaxed">
          ท่านสามารถแจ้งข้อร้องเรียนเกี่ยวกับการดำเนินงานของสมาคมฯ ผ่านช่องทางต่อไปนี้
        </p>
        <p className="text-sm">
          แบบฟอร์มออนไลน์: <a href="https://www.surveymonkey.com/r/D2Y9VMQ" className="text-blue-500 underline">คลิก</a><br />
          อีเมล: info@tfpa.or.th<br />
          โทรศัพท์: 0 2009 9393
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">
          ร้องเรียนนักวางแผนการเงิน CFP/ที่ปรึกษาการเงิน AFPT
        </h3>
        <p className="text-sm leading-relaxed">
          นักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT จะต้องปฏิบัติตาม “จรรยาบรรณและความรับผิดชอบในฐานะผู้ประกอบวิชาชีพวางแผนการเงิน” ซึ่งสะท้อนให้เห็นว่านักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT มุ่งมั่นที่จะปฏิบัติงานวางแผนการเงินให้ลูกค้าโดยอยู่บนพื้นฐานของแนวปฏิบัติ และจรรยาบรรณของนักวางแผนการเงิน
        </p>
        <p className="text-sm leading-relaxed">
          สมาคมฯ ได้กำหนดกระบวนการพิจารณาความผิดทางวินัย กระบวนการอุทธรณ์ และการดำเนินการทางวินัย เพื่อใช้เป็นแนวปฏิบัติในกรณีที่พบว่านักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT กระทำใดๆ ที่อาจเป็นการฝ่าฝืนจรรยาบรรณดังกล่าว ท่านสามารถแจ้งข้อร้องเรียนเกี่ยวกับการให้บริการของนักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT ผ่านทางอีเมลที่ info@tfpa.or.th หรือทางจดหมายถึง 
        </p>
        <div className="border border-black rounded-xl p-4 text-sm leading-relaxed">
          <p className="font-semibold">ผู้อำนวยการสมาคมนักวางแผนการเงินไทย</p>
          <p>
            สมาคมนักวางแผนการเงินไทย<br />
            ชั้น 6 อาคารตลาดหลักทรัพย์แห่งประเทศไทย<br />
            เลขที่ 93 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพฯ 10400
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-sm">เอกสารประกอบการแจ้งข้อร้องเรียน</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>จดหมายแจ้งข้อร้องเรียนเป็นลายลักษณ์อักษร</li>
            <li>ระบุชื่อและที่อยู่ของผู้ร้องเรียน</li>
            <li>ระบุชื่อนักวางแผนการเงินที่มีการกระทำที่อาจเป็นการฝ่าฝืนจรรยาบรรณ</li>
            <li>ระบุรายละเอียดการกระทำที่อาจเป็นการฝ่าฝืนจรรยาบรรณ พร้อมหลักฐาน</li>
            <li>สัญญาการให้บริการการวางแผนการเงิน (ถ้ามี)</li>
            <li>ลงลายมือชื่อของผู้ร้องเรียนในจดหมายร้องเรียน</li>
          </ul>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">
          ร้องเรียนการใช้เครื่องหมายรับรองคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP
        </h3>
        <p className="text-sm leading-relaxed">
          ท่านสามารถสอบถามข้อมูลการใช้เครื่องหมายรับรองคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP และเครื่องหมายรับรองคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT และแจ้งกรณีที่พบเห็นผู้นำเครื่องหมายดังกล่าวไปใช้อย่างไม่ถูกต้อง หรือละเมิดลิขสิทธิ์ได้ที่
        </p>
        <p className="text-sm">
          อีเมล: info@tfpa.or.th<br />
          โทรศัพท์: 0 2009 9393
        </p>
      </div>

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
