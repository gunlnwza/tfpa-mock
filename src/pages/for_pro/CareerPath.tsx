import { Page } from "../../components/layout/Page";
import { Section } from "../../components/layout/Section";
import { PageHeader } from "../../components/layout/global/PageHeader";

import { Center } from "../../components/primitive/Center";
import { RenderBlocks } from "../../components/primitive/renderer/Blocks";

import { Button } from "../../components/ui/Button";

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

import docsIcon from "../../assets/icons/docs.svg"

type CardProps = {
  src: string;
  imgDivClassName?: string;
  href?: string;
  title?: string;
};

type PDFLinkProps = {
  href: string;
  title: string;
}

export function PDFLink({ href, title }: PDFLinkProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 hover:text-blue-600 hover:underline"
    >
      <img src={docsIcon} className="w-6 h-6" />
      <span className="text-lg">{title}</span>
    </a>
  );
}

export function Card({ src, imgDivClassName, href, title }: CardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-xl border border-gray-300 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
    >
      {/* Image top */}
      <div className={`border-b border-gray-200 w-full h-36 overflow-hidden flex justify-center items-center ${imgDivClassName}`}>
        <img
          src={src}
          className={`max-w-full max-h-full object-contain p-4`}
        />
      </div>

      {/* Text bottom */}
      {title && (
        <div className="p-4">
          <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition">
            {title}
          </p>
        </div>
      )}
    </Wrapper>
  );
}

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
        <div className="grid grid-cols-2 w-full m-4">
          <img src={thaiPFATraining} className="w-full h-full object-contain" />
          <img src={cmskTraining} className="w-full h-full object-contain" />
          <img src={avpTraining} className="w-full h-full object-contain" />
          <img src={aimcTraining} className="w-full h-full object-contain" />
        </div>
        <PDFLink href="https://www.tfpa.or.th/upload/b4cdc8af-5097-4988-8aa1-e11699d437d4.pdf" title="ตารางอบรม"/>
      </Section>

      <Section title="ตารางสอบและสมัครสอบ">
        .
      </Section>

      <Center><Button to="/faq">คำถามที่พบบ่อย</Button></Center>
    
    </Page>
  );
}
