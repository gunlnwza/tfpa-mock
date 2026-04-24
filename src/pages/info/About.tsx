import OrganizationChart from "../../features/OrganizationChart";

import nsf_logo from "../../assets/logos/nsf.png"

import { Page } from "../../components/layout/Page";
import { PageHeader } from "../../components/layout/global/PageHeader";
import { Section } from "../../components/layout/Section";

import { RenderBlocks } from "../../components/primitive/renderer/Blocks";

import { missionBlocks, historyBlocks, founderBlocks } from "../../data/About";


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
      <RenderBlocks blocks={ founderBlocks }/>
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


// TODO: make clickable card. A card UI is very important
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
