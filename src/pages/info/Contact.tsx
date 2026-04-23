import { Link } from "react-router-dom";

import map from "../../assets/how_to_go_to_tfpa.png"
import { Page, PageHeader } from "../../layouts/Page";
import { Section } from "../../layouts/Section";
import ContentRenderer from "../../components/content/ContentRenderer";

import { training_staff_contact, license_staff_contact, financial_staff_contact } from "../../data/Contact";
import { ContactCard, StaffContactCard } from "../../components/ContactCard";

/*
1. 📍 Location (header block): instant usefulness
2. 🗺️ Google Map (primary visual): interactive + main “where is this place”
3. 🧭 Infographic (supporting): “how to get there” + MRT / landmarks
4. 👥 Staff / departments: contact persons + roles
*/


function TFPAInfo() {
  return (
    <Section title="Location">
      <ContactCard title="สมาคมนักวางแผนการเงินไทย">
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
      </ContactCard>
    </Section>
  );
}


function GoogleMap() {
  return (
    <Section title="Google Map">
      <iframe
        src="https://www.google.com/maps?q=The+Stock+Exchange+of+Thailand&output=embed"
        className="w-full h-[500px] rounded-xl overflow-hidden border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Section>
  );
}


function InfographicMap() {
  return (
    <Section title="วิธีเดินทาง">
      <p className="my-4"><b>รถไฟฟ้าใต้ดิน (MRT):</b> สถานีศูนย์วัฒนธรรม ทางออก 3</p>

      <p className="text-xs text-gray-500">แผนที่การเดินทางมายังสมาคมฯ</p>
      <div className="border border-gray-300">
        <img src={map} alt="How to go to TFPA" className="mx-auto object-contain" />
      </div>
    </Section>
  );
}


function ContactSection() {
  return (
    <Section title="Department">
      <StaffContactCard contact={training_staff_contact} />
      <StaffContactCard contact={license_staff_contact} />
      <StaffContactCard contact={financial_staff_contact} />
    </Section>
  );
}


function ReportSection() {
  return (
    <Section title="ร้องเรียน">
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
        
        <ContentRenderer blocks={[
          { type: "paragraph", content: "เอกสารประกอบการแจ้งข้อร้องเรียน" },
          {
            type: "list",
            items: [
              { text: "จดหมายแจ้งข้อร้องเรียนเป็นลายลักษณ์อักษร" },
              { text: "ระบุชื่อและที่อยู่ของผู้ร้องเรียน" },
              { text: "ระบุชื่อนักวางแผนการเงินที่มีการกระทำที่อาจเป็นการฝ่าฝืนจรรยาบรรณ" },
              { text: "ระบุรายละเอียดการกระทำที่อาจเป็นการฝ่าฝืนจรรยาบรรณ พร้อมหลักฐาน" },
              { text: "สัญญาการให้บริการการวางแผนการเงิน (ถ้ามี)" },
              { text: "ลงลายมือชื่อของผู้ร้องเรียนในจดหมายร้องเรียน" }
            ]
          }
        ]}/>

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
    </Section>
  );
}


export default function Contact() {
  return (
    <Page>
      <PageHeader title="ติดต่อ" />
      <TFPAInfo />
      <GoogleMap />
      <InfographicMap />
      <ContactSection />
      <ReportSection />
    </Page>
  );
}
