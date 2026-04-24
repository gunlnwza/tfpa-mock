import { Page } from "../../components/layout/Page";
import { Section } from "../../components/layout/Section";
import { PageHeader } from "../../components/layout/global/PageHeader";

import { Center } from "../../components/primitive/Center";

import { Button } from "../../components/ui/Button";


export default function CareerPath() {
  return (
    <Page>
      <PageHeader title="เส้นทางอาชีพ" />
      <Section title="การขึ้นทะเบียนคุณวุฒิวิชาชีพ">
        .
      </Section>
      <Section title="สมัครอบรม">
        .
      </Section>
      <Section title="ตารางสอบและสมัครสอบ">
        .
      </Section>

      <Center><Button to="/faq">คำถามที่พบบ่อย</Button></Center>
    
    </Page>
  );
}
