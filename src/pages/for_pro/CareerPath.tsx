import { Page } from "../../components/layout/Page";
import { Section } from "../../components/layout/Section";
import { PageHeader } from "../../components/layout/global/PageHeader";

import { RenderBlocks } from "../../components/primitive/renderer/Blocks";

import { registerForLicenseBlocks } from "../../data/CareerPath";

import atiLogo from "../../assets/logos/ati.png";
import aimcLogo from "../../assets/logos/aimc.png";
import avpAcademyLogo from "../../assets/logos/avp_academy.webp";
import cmskLogo from "../../assets/logos/cmsk.webp";
import thaiPFALogo from "../../assets/logos/thai_pfa.png";

import aimcTraining from "../../assets/training_tables/aimc_training.jpg";
import avpTraining from "../../assets/training_tables/avp_training.jpeg";
import cmskTraining from "../../assets/training_tables/cmsk_training.jpg";
import thaiPFATraining from "../../assets/training_tables/thai_pfa_training.jpg";

import examPage1 from "../../assets/exam/exam_page1.jpg";
import examPage2 from "../../assets/exam/exam_page2.jpg";

import { Card } from "../../components/ui/Card";
import { PDFLink } from "../../components/primitive/PDFLink";
import { NextPage } from "../../components/primitive/NextPage";

export default function CareerPath() {
  return (
    <Page>
      <PageHeader title="เส้นทางอาชีพ" />
      
      <Section title="การขึ้นทะเบียนคุณวุฒิวิชาชีพ">
        <RenderBlocks blocks={registerForLicenseBlocks} />
      </Section>

      <Section title="สมัครอบรม">
        <div className="flex flex-wrap gap-4">
          <Card src={thaiPFALogo} href="https://www.thaipfa.co.th" title="ศูนย์อบรมไทยพีเอฟเอ (ThaiPFA)" />
          <Card src={atiLogo} imgDivClassName="bg-black" href="https://ati-asco.org" title="สถาบันฝึกอบรมสมาคมบริษัทหลักทรัพย์ (ATI)" />
          <Card src={aimcLogo} href="https://www.aimc.or.th/center/" title="ศูนย์ความรู้ผู้ประกอบวิชาชีพทางการเงิน สมาคมบริษัทจัดการลงทุน (AIMC)" />
          <Card src={cmskLogo} href="https://mycmsk.com/filter/11" title="บริษัท ซีเอ็มเอสเค จำกัด (CMSK Academy)" />
          <Card src={avpAcademyLogo} href="https://www.avp-academy.com" title="สถาบันฝึกอบรม เอวีพี อะคาเดมี่ (AVP Academy)" />
        </div>

        <RenderBlocks blocks={[
          { type: "paragraph", content: [
            { type: "text", content: "ผู้สนใจอบรมหลักสูตรการวางแผนการเงิน CFP สามารถสอบถามรายละเอียดและติดต่อกับสถาบันโดยตรง" }
          ]},
          { type: "heading", level: "h3", content: "รายละเอียดตารางอบรมปี 2569" },
        ]}/>

        <div className="m-4 flex flex-col items-center gap-4">
            <div className="grid grid-cols-2 w-full">
              <img src={thaiPFATraining} className="w-full h-full object-contain" />
              <img src={cmskTraining} className="w-full h-full object-contain" />
              <img src={avpTraining} className="w-full h-full object-contain" />
              <img src={aimcTraining} className="w-full h-full object-contain" />
            </div>
            <PDFLink
              href="https://www.tfpa.or.th/upload/b4cdc8af-5097-4988-8aa1-e11699d437d4.pdf"
              title="ตารางอบรม"
            />
        </div>

      </Section>

      <Section title="ตารางสอบและสมัครสอบ">
        <div className="m-4 flex flex-col items-center gap-4">
          <div className="grid grid-cols-2 w-3/5">
            <img src={examPage1} className="w-full h-full object-contain" />
            <img src={examPage2} className="w-full h-full object-contain" />
          </div>        
          <PDFLink
            href="https://www.tfpa.or.th/upload/c46dedcd-9d83-49e7-9f04-e5fc9e16ca6e.pdf"
            title="ตารางสอบ"
          />
        </div>
      </Section>

      <NextPage to="/faq" >คำถามที่พบบ่อย</NextPage>
    </Page>
  );
}
