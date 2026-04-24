import { Page } from "../../layouts/Page"
import { Section } from "../../layouts/Section"
import { PageHeader } from "../../components/page/PageHeader";
import { Button } from "../../components/Button";


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
      <Button to="/faq">คำถามที่พบบ่อย</Button>
    </Page>
  );
}
