import { Page } from "../../layouts/Page";
import { PageHeader } from "../../components/page/PageHeader";


export default function FAQ() {
  return (
    <Page>
      <PageHeader title="FAQ" />
      <QuestionSection title="การศึกษา" section={training} />
      <QuestionSection title="การสอบ" section={exam} />
      <QuestionSection title="ประสบการณ์ทำงาน" section={work_experience} />
      <QuestionSection title="การยื่นขึ้นทะเบียนคุณวุฒิวิชาชีพ" section={register_cert} />
      <QuestionSection title="การต่ออายุคุณวุฒิวิชาชีพ" section={extend_cert} />
      <QuestionSection title="การพัฒนาคุณวุฒิวิชาชีพอย่างต่อเนื่อง" section={cert_development} />
    </Page>
  );
}
