import Header from "../components/Header";
import Footer from "../components/Footer";

import map from "../assets/tfpa_map.jpg"

function ContactSection() {
  return (
    <section className="space-y-6 whitespace-pre-line">
      <p>
{`การอบรมและการสอบ
คุณวนิดา  จรุงกิจกุล
โทรศัพท์:  0 2009 9393 ต่อ 3731
อีเมล:  tfpaexam@tfpa.or.th`}
      </p>

      <p>
{`การยื่นขึ้นทะเบียนคุณวุฒิวิชาชีพและการต่ออายุคุณวุฒิวิชาชีพ
คุณสุรีรัตน์  ทักขิณ 
โทรศัพท์:  0 2009 9393 ต่อ 3727
อีเมล:  sureerat@tfpa.or.th`}
      </p>

      <p>
{`การเงิน
คุณทัดดาว ลิขิตกิติกุล
โทรศัพท์:  0 2009 9393 ต่อ 3729
อีเมล:  tfpa@tfpa.or.th`}
      </p>

      <p>
{`ร้องเรียนสมาคมนักวางแผนการเงินไทย
ท่านสามารถแจ้งข้อร้องเรียนเกี่ยวกับการดำเนินงานของสมาคมฯ ผ่านช่องทางต่อไปนี้

แบบฟอร์มออนไลน์ คลิก
อีเมล: info@tfpa.or.th
โทรศัพท์: 0 2009 9393`}
      </p>

      <p>
{`ร้องเรียนนักวางแผนการเงิน CFP/ที่ปรึกษาการเงิน AFPT
นักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT จะต้องปฏิบัติตาม “จรรยาบรรณและความรับผิดชอบในฐานะผู้ประกอบวิชาชีพวางแผนการเงิน” ซึ่งสะท้อนให้เห็นว่านักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT มุ่งมั่นที่จะปฏิบัติงานวางแผนการเงินให้ลูกค้าโดยอยู่บนพื้นฐานของแนวปฏิบัติ และจรรยาบรรณของนักวางแผนการเงิน

สมาคมฯ ได้กำหนดกระบวนการพิจารณาความผิดทางวินัย กระบวนการอุทธรณ์ และการดำเนินการทางวินัย เพื่อใช้เป็นแนวปฏิบัติในกรณีที่พบว่านักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT กระทำใดๆ ที่อาจเป็นการฝ่าฝืนจรรยาบรรณดังกล่าว ท่านสามารถแจ้งข้อร้องเรียนเกี่ยวกับการให้บริการของนักวางแผนการเงิน CFP และที่ปรึกษาการเงิน AFPT ผ่านทางอีเมลที่ info@tfpa.or.th หรือทางจดหมายถึง 
ผู้อำนวยการสมาคมนักวางแผนการเงินไทย 
สมาคมนักวางแผนการเงินไทย 
ชั้น 6 อาคารตลาดหลักทรัพย์แห่งประเทศไทย
เลขที่ 93 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพฯ 10400

เอกสารประกอบการแจ้งข้อร้องเรียน
- จดหมายแจ้งข้อร้องเรียนเป็นลายลักษณ์อักษร 
- ระบุชื่อและที่อยู่ของผู้ร้องเรียน 
- ระบุชื่อนักวางแผนการเงินที่มีการกระทำที่อาจเป็นการฝ่าฝืนจรรยาบรรณ 
- ระบุรายละเอียดการกระทำที่อาจเป็นการฝ่าฝืนจรรยาบรรณ พร้อมหลักฐาน 
- สัญญาการให้บริการการวางแผนการเงิน (ถ้ามี) 
- ลงลายมือชื่อของผู้ร้องเรียนในจดหมายร้องเรียน`}
      </p>

      <p>
{`ร้องเรียนการใช้เครื่องหมายรับรองคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP
ท่านสามารถสอบถามข้อมูลการใช้เครื่องหมายรับรองคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP และเครื่องหมายรับรองคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT และแจ้งกรณีที่พบเห็นผู้นำเครื่องหมายดังกล่าวไปใช้อย่างไม่ถูกต้อง หรือละเมิดลิขสิทธิ์ได้ที่
อีเมล: info@tfpa.or.th
โทรศัพท์: 0 2009 9393`}
      </p>
    </section>
  );
}

// TODO: format texts and spacings
export default function Contact() {
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
        <h1 className="text-3xl font-bold">Contact</h1>

        <section className="space-y-4">
          <div className="space-y-2 text-sm leading-relaxed">
            <h2 className="text-xl font-semibold border-b pb-2">Location</h2>
            <p className="font-semibold">สมาคมนักวางแผนการเงินไทย</p>
            <p>
              ชั้น 6 อาคารตลาดหลักทรัพย์แห่งประเทศไทย<br />
              93 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง<br />
              กรุงเทพมหานคร 10400
            </p>
            <p>โทรศัพท์: 0 2009 9393</p>
            <p>Website: www.tfpa.or.th</p>
          </div>
        </section>

        <div className="w-full h-[400px] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=The+Stock+Exchange+of+Thailand&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* TODO: extract text in the pic */}
        <section>
        <img src={map} alt="How to go to TFPA" className="mx-auto object-contain" />

        </section>

        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

/*
1. 📍 Location (header block)

* Name
* Address (short)
* Phone
* Email

👉 this gives instant usefulness

⸻

2. 🗺️ Google Map (primary visual)

* interactive
* main “where is this place”

⸻

3. 🧭 Infographic (supporting)

* “how to get there”
* MRT / landmarks

----

4. 👥 Staff / departments

* contact persons
* roles

*/