import OrganizationChart from "../features/OrganizationChart";

import nsf_logo from "../assets/logos/nsf.png"

import { Page } from "../components/layout/Page";
import { PageHeader } from "../components/layout/global/PageHeader";
import { Section } from "../components/layout/Section";

import { RenderBlocks } from "../components/primitive/renderer/Blocks";

import { ImageCard } from "../components/ui/ImageCard";

import type { Block } from "../components/primitive/renderer/types";

const missionBlocks: Block[] = [
  {
    type: "list",
    items: [
      { content: [{ type: "text", content: "ส่งเสริมวิชาชีพนักวางแผนการเงิน CFP ให้เป็นที่รู้จักแพร่หลายในอุตสาหกรรมการเงินของไทย โดยผลิตนักวางแผนการเงิน CFP ที่มีคุณภาพ มีจรรยาบรรณในการประกอบวิชาชีพตามมาตรฐานสากล" }] },
      { content: [{ type: "text", content: "สร้างมาตรฐานการวางแผนการเงินที่เป็นเลิศ" }] }
    ]
  }
];


const historyBlocks: Block[] = [
  { type: "paragraph", content: [{ type: "text", content: "สมาคมนักวางแผนการเงินไทย (Thai Financial Planners Association - TFPA) เป็นองค์กรกำกับดูแลตนเองที่ไม่แสวงหากำไร จัดตั้งขึ้นตามพระราชบัญญัติสมาคมการค้า พ.ศ. 2509 เมื่อวันที่ 26 กันยายน พ.ศ. 2550 ซึ่งมีผู้ร่วมก่อตั้งทั้งในส่วนของบุคคลและนิติบุคคล จำนวน 39 ราย ประกอบด้วย ธนาคารพาณิชย์ บริษัทประกันชีวิต บริษัทหลักทรัพย์ บริษัทหลักทรัพย์จัดการกองทุน กองทุนบำเหน็จบำนาญข้าราชการ และตลาดหลักทรัพย์แห่งประเทศไทย โดยเล็งเห็นประโยชน์ของบริการวางแผนการเงินที่จะมีต่อประชาชนและอุตสากรรมการเงินของประเทศไทยเป็นสำคัญ" }] },
  { type: "paragraph", content: [{ type: "text", content: "ในปี 2550 สมาคมฯ ได้เข้าร่วมเป็นสมาชิกของ Financial Planning Standards Board Ltd. (FPSB) นับเป็นสมาชิกลำดับที่ 22 จากสมาชิกรวม 26 ประเทศทั่วโลก โดยมุ่งส่งเสริมให้ผู้ที่ได้รับคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP และคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT ซึ่งถือเป็นผู้ที่มีความรู้ ทักษะ ความสามารถ และมีจรรยาบรรณในการประกอบวิชาชีพได้รับการยอมรับและมีความน่าเชื่อถือในระดับสากล รวมทั้งเป็นที่รู้จักและยอมรับในอุตสาหกรรมการเงินของประเทศไทยอย่างกว้างขวาง" }] },
  { type: "paragraph", content: [{ type: "text", content: "ในปี 2552 มีผู้ขึ้นทะเบียนคุณวุฒิวิชาชีพนักวางแผนการเงิน CFP กลุ่มแรก จำนวน 66 ราย และต่อมาในปี 2553 เริ่มมีผู้ขึ้นทะเบียนคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT ด้านการลงทุน และคุณวุฒิวิชาชีพที่ปรึกษาการเงิน AFPT ด้านประกันชีวิตและเพื่อการเกษียณ" }] }
];


const founders: string[] = [
  "เครือธนาคารกรุงเทพ จำกัด (มหาชน)" ,
  "เครือธนาคารทิสโก้ จำกัด (มหาชน)",
  "เครือธนาคารธนชาต จำกัด (มหาชน)",
  "เครือธนาคารหลวงไทย จำกัด (มหาชน)",
  "เครือธนาคารไทยพาณิชย์ จำกัด (มหาชน)",
  "เครือธนาคารกสิกรไทย จำกัด (มหาชน)",
  "ธนาคารยูโอบี จำกัด (มหาชน)",
  "ธนาคารเอชเอสบีซี ประเทศไทย",
  "ธนาคารเกียรตินาคิน จำกัด (มหาชน)",
  "ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)",
  "ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย) จำกัด (มหาชน)",
  "บริษัทหลักทรัพย์ ดีบีเอส วิคเคอร์ส (ประเทศไทย) จำกัด",
  "บริษัทหลักทรัพย์ ภัทร จำกัด (มหาชน)",
  "บริษัทหลักทรัพย์ สินเอเซีย จำกัด",
  "บริษัทหลักทรัพย์จัดการกองทุน กรุงไทย จำกัด (มหาชน)",
  "บริษัทหลักทรัพย์จัดการกองทุน ทหารไทย จำกัด",
  "บริษัทหลักทรัพย์จัดการกองทุน ฟินันซ่า จำกัด",
  "บริษัทหลักทรัพย์จัดการกองทุนรวม วรรณ จำกัด",
  "บริษัทหลักทรัพย์จัดการกองทุน แอสเซท พลัส จำกัด",
  "บริษัทหลักทรัพย์จัดการกองทุน ไอเอ็นจี (ประเทศไทย) จำกัด",
  "บริษัท กรุงเทพประกันชีวิต จำกัด (มหาชน)",
  "บริษัท ไทยประกันชีวิต จำกัด (มหาชน)",
  "บริษัท ไทยสมุทรประกันชีวิต จำกัด (มหาชน)",
  "บริษัท เมืองไทยประกันชีวิต จำกัด (มหาชน)",
  "บริษัท อเมริกันอินเตอร์แนชชั่นแนล แอสชัวรันส์ จำกัด",
  "กองทุนบำเหน็จบำนาญข้าราชการ",
  "ตลาดหลักทรัพย์แห่งประเทศไทย",
];


function Mission() {
  return (
    <Section title="พันธกิจ">
      <RenderBlocks blocks={ missionBlocks }/>
    </Section>
  );
}


function History() {
  return (
    <Section title="ประวัติสมาคม">
      <RenderBlocks blocks={ historyBlocks }/>
    </Section>
  );
}


{/*TODO: Likely not updated, would be good to have logos, maybe remove the logos gallery in Home*/}
function Founders() {
  return (
    <Section title="สมาชิกผู้ร่วมก่อตั้ง">
      <ul className="grid grid-cols-1 lg:grid-cols-2 disc list-disc pl-6 space-y-2 my-2">
        {founders.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </Section>
  );
}


function OrganizationStructure() {
  return (
    <Section title="โครงสร้างสมาคม">
      <OrganizationChart />
    </Section>
  );
}


function Alliance() {
  return (
    <Section title="หน่วยงานพันธมิตร">
      <div className="flex flex-col items-center space-y-2">
        <ImageCard src={nsf_logo} alt="NSF Logo" href="https://www.nsf.or.th/" title="กองทุนการออมแห่งชาติ" />
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
