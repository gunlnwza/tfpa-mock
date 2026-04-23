import OrgChart from "../../components/OrgChart";

import nsf_logo from "../../assets/logos/nsf.png"
import { Page, PageHeader } from "../../layouts/Page";
import { Section } from "../../layouts/Section";

import ContentRenderer from "../../components/content/ContentRenderer";
import type { Block } from "../../components/content/types";


const missionBlocks: Block[] = [
  {
    type: "list",
    items: [
      { text: "ส่งเสริมวิชาชีพนักวางแผนการเงิน CFP ให้เป็นที่รู้จักแพร่หลายในอุตสาหกรรมการเงินของไทย โดยผลิตนักวางแผนการเงิน CFP ที่มีคุณภาพ มีจรรยาบรรณในการประกอบวิชาชีพตามมาตรฐานสากล" },
      { text: "สร้างมาตรฐานการวางแผนการเงินที่เป็นเลิศ" }
    ]
  }
]

const historyBlocks: Block[] = [
  { type: "paragraph", content: "สมาคมนักวางแผนการเงินไทย (Thai Financial Planners Association - TFPA) เป็นองค์กรกำกับดูแลตนเองที่ไม่แสวงหากำไร จัดตั้งขึ้นตามพระราชบัญญัติสมาคมการค้า พ.ศ. 2509 เมื่อวันที่ 26 กันยายน พ.ศ. 2550 ซึ่งมีผู้ร่วมก่อตั้งทั้งในส่วนของบุคคลและนิติบุคคล จำนวน 39 ราย ประกอบด้วย ธนาคารพาณิชย์ บริษัทประกันชีวิต บริษัทหลักทรัพย์ บริษัทหลักทรัพย์จัดการกองทุน กองทุนบำเหน็จบำนาญข้าราชการ และตลาดหลักทรัพย์แห่งประเทศไทย โดยเล็งเห็นประโยชน์ของบริการวางแผนการเงินที่จะมีต่อประชาชนและอุตสากรรมการเงินของประเทศไทยเป็นสำคัญ" },
  { type: "paragraph", content: "ในปี 2550 สมาคมฯ ได้เข้าร่วมเป็นสมาชิกของ Financial Planning Standards Board Ltd. (FPSB) นับเป็นสมาชิกลำดับที่ 22 จากสมาชิกรวม 26 ประเทศทั่วโลก โดยมุ่งส่งเสริมให้ผู้ที่ได้รับคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP และคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT ซึ่งถือเป็นผู้ที่มีความรู้ ทักษะ ความสามารถ และมีจรรยาบรรณในการประกอบวิชาชีพได้รับการยอมรับและมีความน่าเชื่อถือในระดับสากล รวมทั้งเป็นที่รู้จักและยอมรับในอุตสาหกรรมการเงินของประเทศไทยอย่างกว้างขวาง" },
  { type: "paragraph", content: "ในปี 2552 มีผู้ขึ้นทะเบียนคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP กลุ่มแรก จำนวน 66 ราย และต่อมาในปี 2553 เริ่มมีผู้ขึ้นทะเบียนคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT ด้านการลงทุน และคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT ด้านประกันชีวิตและเพื่อการเกษียณ" }
]


const founderBlocks: Block[] = [
  {
    type: "list",
    items: [
      { text: "เครือธนาคารกรุงเทพ จำกัด (มหาชน)" },
      { text: "เครือธนาคารทิสโก้ จำกัด (มหาชน)"},
      { text: "เครือธนาคารธนชาต จำกัด (มหาชน)"},
      { text: "เครือธนาคารหลวงไทย จำกัด (มหาชน)"},
      { text: "เครือธนาคารไทยพาณิชย์ จำกัด (มหาชน)"},
      { text: "เครือธนาคารกสิกรไทย จำกัด (มหาชน)"},
      { text: "ธนาคารยูโอบี จำกัด (มหาชน)"},
      { text: "ธนาคารเอชเอสบีซี ประเทศไทย"},
      { text: "ธนาคารเกียรตินาคิน จำกัด (มหาชน)"},
      { text: "ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)"},
      { text: "ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย) จำกัด (มหาชน)"},
      { text: "บริษัทหลักทรัพย์ ดีบีเอส วิคเคอร์ส (ประเทศไทย) จำกัด"},
      { text: "บริษัทหลักทรัพย์ ภัทร จำกัด (มหาชน)"},
      { text: "บริษัทหลักทรัพย์ สินเอเซีย จำกัด"},
      { text: "บริษัทหลักทรัพย์จัดการกองทุน กรุงไทย จำกัด (มหาชน)"},
      { text: "บริษัทหลักทรัพย์จัดการกองทุน ทหารไทย จำกัด"},
      { text: "บริษัทหลักทรัพย์จัดการกองทุน ฟินันซ่า จำกัด"},
      { text: "บริษัทหลักทรัพย์จัดการกองทุนรวม วรรณ จำกัด"},
      { text: "บริษัทหลักทรัพย์จัดการกองทุน แอสเซท พลัส จำกัด"},
      { text: "บริษัทหลักทรัพย์จัดการกองทุน ไอเอ็นจี (ประเทศไทย) จำกัด"},
      { text: "บริษัท กรุงเทพประกันชีวิต จำกัด (มหาชน)"},
      { text: "บริษัท ไทยประกันชีวิต จำกัด (มหาชน)"},
      { text: "บริษัท ไทยสมุทรประกันชีวิต จำกัด (มหาชน)"},
      { text: "บริษัท เมืองไทยประกันชีวิต จำกัด (มหาชน)"},
      { text: "บริษัท อเมริกันอินเตอร์แนชชั่นแนล แอสชัวรันส์ จำกัด"},
      { text: "กองทุนบำเหน็จบำนาญข้าราชการ"},
      { text: "ตลาดหลักทรัพย์แห่งประเทศไทย"},
    ]
  }
]

function Mission() {
  return (
    <Section title="พันธกิจ">
      <ContentRenderer blocks={ missionBlocks }/>
    </Section>
  );
}


function History() {
  return (
    <Section title="ประวัติสมาคม">
      <ContentRenderer blocks={ historyBlocks }/>
    </Section>
  );
}


{/*TODO: Likely not updated, would be good to have logos, maybe remove the logos gallery in Home*/}
function Founders() {
  return (
    <Section title="สมาชิกผู้ร่วมก่อตั้ง">
      <ContentRenderer blocks={ founderBlocks }/>
    </Section>
  );
}


function OrganizationStructure() {
  return (
    <Section title="โครงสร้างสมาคม">
      <OrgChart />
    </Section>
  );
}


function Alliance() {
  return (
    <Section title="หน่วยงานพันธมิตร">
      <div className="flex flex-col items-center space-y-2">
        <a href="https://www.nsf.or.th">
          <img src={nsf_logo} alt="NSF Logo" className="h-40 mx-auto border border-gray-300" />
        </a>
        <p className="text-center">กองทุนการออมแห่งชาติ</p>
      </div>
    </Section>
  );
}

export default function Overview() {
  return (
    <Page>
      <PageHeader title="เกี่ยวกับสมาคม" />
      <Mission />
      <History />
      <Founders />
      <OrganizationStructure />
      <Alliance />
    </Page>
  );
}
