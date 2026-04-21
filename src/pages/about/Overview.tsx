import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OrgChart from "../../components/OrgChart";

export default function Overview() {
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
        <h1 className="text-3xl font-bold">About</h1>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">พันธกิจ</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-relaxed">
              ส่งเสริมวิชาชีพนักวางแผนการเงิน CFP ให้เป็นที่รู้จักแพร่หลายในอุตสาหกรรมการเงินของไทย
              โดยผลิตนักวางแผนการเงิน CFP ที่มีคุณภาพ มีจรรยาบรรณในการประกอบวิชาชีพตามมาตรฐานสากล
            </li>
            <li className="leading-relaxed">
              สร้างมาตรฐานการวางแผนการเงินที่เป็นเลิศ
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">ประวัติสมาคม</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            สมาคมนักวางแผนการเงินไทย (Thai Financial Planners Association – TFPA) เป็นองค์กรกำกับดูแลตนเองที่ไม่แสวงหากำไร
            จัดตั้งขึ้นตามพระราชบัญญัติสมาคมการค้า พ.ศ. 2509 เมื่อวันที่ 26 กันยายน พ.ศ. 2550 ซึ่งมีผู้ร่วมก่อตั้งทั้งในส่วนของบุคคลและนิติบุคคล จำนวน 39 ราย ประกอบด้วย
            ธนาคารพาณิชย์ บริษัทประกันชีวิต บริษัทหลักทรัพย์ บริษัทหลักทรัพย์จัดการกองทุน กองทุนบำเหน็จบำนาญข้าราชการ และตลาดหลักทรัพย์แห่งประเทศไทย
            โดยเล็งเห็นประโยชน์ของบริการวางแผนการเงินที่จะมีต่อประชาชนและอุตสากรรมการเงินของประเทศไทยเป็นสำคัญ
          </p>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            ในปี 2550 สมาคมฯ ได้เข้าร่วมเป็นสมาชิกของ Financial Planning Standards Board Ltd. (FPSB) นับเป็นสมาชิกลำดับที่ 22 จากสมาชิกรวม 26 ประเทศทั่วโลก
            โดยมุ่งส่งเสริมให้ผู้ที่ได้รับคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP และคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT ซึ่งถือเป็นผู้ที่มีความรู้ ทักษะ ความสามารถ และ
            มีจรรยาบรรณในการประกอบวิชาชีพได้รับการยอมรับและมีความน่าเชื่อถือในระดับสากล รวมทั้งเป็นที่รู้จักและยอมรับในอุตสาหกรรมการเงินของประเทศไทยอย่างกว้างขวาง
          </p>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            ในปี 2552 มีผู้ขึ้นทะเบียนคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP กลุ่มแรก จำนวน 66 ราย และต่อมาในปี 2553
            เริ่มมีผู้ขึ้นทะเบียนคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT ด้านการลงทุน และคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT ด้านประกันชีวิตและเพื่อการเกษียณ
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">สมาชิกผู้ร่วมก่อตั้ง</h2> {/*TODO: Likely not updated, would be good to have logos, maybe remove the logos gallery in Home*/}
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-relaxed">เครือธนาคารกรุงเทพ จำกัด (มหาชน)</li>
            <li className="leading-relaxed">เครือธนาคารทิสโก้ จำกัด (มหาชน)</li>
            <li className="leading-relaxed">เครือธนาคารธนชาต จำกัด (มหาชน)</li>
            <li className="leading-relaxed">เครือธนาคารหลวงไทย จำกัด (มหาชน)</li>
            <li className="leading-relaxed">เครือธนาคารไทยพาณิชย์ จำกัด (มหาชน)</li>
            <li className="leading-relaxed">เครือธนาคารกสิกรไทย จำกัด (มหาชน)</li>
            <li className="leading-relaxed">ธนาคารยูโอบี จำกัด (มหาชน)</li>
            <li className="leading-relaxed">ธนาคารเอชเอสบีซี ประเทศไทย</li>
            <li className="leading-relaxed">ธนาคารเกียรตินาคิน จำกัด (มหาชน)</li>
            <li className="leading-relaxed">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</li>
            <li className="leading-relaxed">ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย) จำกัด (มหาชน)</li>
            <li className="leading-relaxed">บริษัทหลักทรัพย์ ดีบีเอส วิคเคอร์ส (ประเทศไทย) จำกัด</li>
            <li className="leading-relaxed">บริษัทหลักทรัพย์ ภัทร จำกัด (มหาชน)</li>
            <li className="leading-relaxed">บริษัทหลักทรัพย์ สินเอเซีย จำกัด</li>
            <li className="leading-relaxed">บริษัทหลักทรัพย์จัดการกองทุน กรุงไทย จำกัด (มหาชน)</li>
            <li className="leading-relaxed">บริษัทหลักทรัพย์จัดการกองทุน ทหารไทย จำกัด</li>
            <li className="leading-relaxed">บริษัทหลักทรัพย์จัดการกองทุน ฟินันซ่า จำกัด</li>
            <li className="leading-relaxed">บริษัทหลักทรัพย์จัดการกองทุนรวม วรรณ จำกัด</li>
            <li className="leading-relaxed">บริษัทหลักทรัพย์จัดการกองทุน แอสเซท พลัส จำกัด</li>
            <li className="leading-relaxed">บริษัทหลักทรัพย์จัดการกองทุน ไอเอ็นจี (ประเทศไทย) จำกัด</li>
            <li className="leading-relaxed">บริษัท กรุงเทพประกันชีวิต จำกัด (มหาชน)</li>
            <li className="leading-relaxed">บริษัท ไทยประกันชีวิต จำกัด (มหาชน)</li>
            <li className="leading-relaxed">บริษัท ไทยสมุทรประกันชีวิต จำกัด (มหาชน)</li>
            <li className="leading-relaxed">บริษัท เมืองไทยประกันชีวิต จำกัด (มหาชน)</li>
            <li className="leading-relaxed">บริษัท อเมริกันอินเตอร์แนชชั่นแนล แอสชัวรันส์ จำกัด</li>
            <li className="leading-relaxed">กองทุนบำเหน็จบำนาญข้าราชการ</li>
            <li className="leading-relaxed">ตลาดหลักทรัพย์แห่งประเทศไทย</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">โครงสร้างสมาคม</h2>
          <OrgChart />
        </section>

      </div>

      <Footer />
    </div>
  );
}
