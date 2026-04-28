/*
1. 📍 Location (header block): instant usefulness
2. 🗺️ Google Map (primary visual): interactive + main “where is this place”
3. 🧭 Infographic (supporting): “how to get there” + MRT / landmarks
4. 👥 Staff / departments: contact persons + roles
*/

import { Page } from "../../components/layout/Page";
import { PageHeader } from "../../components/layout/global/PageHeader";
import { Section } from "../../components/layout/Section";

import { RenderBlocks } from "../../components/primitive/renderer/Blocks";

import {
  tfpaContactBlocks,
  googleMapBlocks,
  infographicMapBlocks,
  trainingStaffContactBlocks, licenseStaffContactBlocks, financialStaffContactBlocks,
  reportBlocks
} from "../../data/Contact"

import { TextCard } from "../../components/ui/TextCard";
import { CenterPile } from "../../components/primitive/CenterPile";


export default function Contact() {
  return (
    <Page>
      <PageHeader title="ติดต่อ" />

      <Section title="Location">
        <CenterPile>
          <TextCard blocks={tfpaContactBlocks} />
        </CenterPile>
      </Section>

      <Section title="Google Map">
        <RenderBlocks blocks={googleMapBlocks}/>
      </Section>

      <Section title="วิธีเดินทาง">
        <RenderBlocks blocks={infographicMapBlocks}/>
      </Section>

      <Section title="ติดต่อเจ้าหน้าที่">
        <CenterPile>
          <TextCard blocks={trainingStaffContactBlocks}/>
          <TextCard blocks={licenseStaffContactBlocks}/>
          <TextCard blocks={financialStaffContactBlocks}/>
        </CenterPile>
      </Section>
      
      <Section title="ร้องเรียน">
        <RenderBlocks blocks={reportBlocks}/>
      </Section>
    </Page>
  );
}
