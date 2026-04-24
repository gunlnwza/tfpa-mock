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
  tfpaContactCard, googleMapBlocks, infographicMapBlocks, contactBlocks, reportBlocks
} from "../../data/Contact"


function TFPAInfo() {
  return (
    <Section title="Location">
      <RenderBlocks blocks={tfpaContactCard}/>
    </Section>
  );
}


function GoogleMap() {
  return (
    <Section title="Google Map">
      <RenderBlocks blocks={googleMapBlocks}/>
    </Section>
  );
}


function InfographicMap() {
  return (
    <Section title="วิธีเดินทาง">
      <RenderBlocks blocks={infographicMapBlocks}/>
    </Section>
  );
}


function ContactSection() {
  return (
    <Section title="ติดต่อเจ้าหน้าที่">
      <RenderBlocks blocks={contactBlocks}/>
    </Section>
  );
}


function ReportSection() {
  return (
    <Section title="ร้องเรียน">
      <RenderBlocks blocks={reportBlocks}/>
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
