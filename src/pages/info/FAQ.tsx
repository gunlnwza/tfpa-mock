import { Page } from "../../components/layout/Page";
import { PageHeader } from "../../components/layout/global/PageHeader";

import { QuestionSection } from "../../components/layout/QuestionSection";

import {
  training, exam, work_experience, register_cert, extend_cert, cert_development
} from "../../data/FAQ";


export default function FAQ() {
  return (
    <Page>
      <PageHeader title="คำถามที่พบบ่อย (FAQ)" />
      <QuestionSection title="การศึกษา" section={training} />
      <QuestionSection title="การสอบ" section={exam} />
      <QuestionSection title="ประสบการณ์ทำงาน" section={work_experience} />
      <QuestionSection title="การยื่นขึ้นทะเบียนคุณวุฒิวิชาชีพ" section={register_cert} />
      <QuestionSection title="การต่ออายุคุณวุฒิวิชาชีพ" section={extend_cert} />
      <QuestionSection title="การพัฒนาคุณวุฒิวิชาชีพอย่างต่อเนื่อง" section={cert_development} />
    </Page>
  );
}
