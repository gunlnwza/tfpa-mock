import { PageHeader } from "../../components/layout/global/PageHeader";
import { Page } from "../../components/layout/Page";
import { PDFLink } from "../../components/primitive/PDFLink";

export default function ForTrainingSchool() {
  return (
    <Page>
      <PageHeader title="สถาบันฝึกอบรม" />
      <PDFLink
        href="https://tfpa.or.th/Upload/1982022133019.pdf"
        title="ข้อกำหนดอ้างอิงเกณฑ์การขึ้นทะเบียนสถาบันจัดอบรมหลักสูตรการวางแผนการเงิน CFP"
      />
      <PDFLink
        href="https://www.tfpa.or.th/upload/9ee50080-dd71-4bad-8f46-e3860587cdcf.pdf"
        title="คู่มือการใช้เครื่องหมายรับรองคุณวุฒิวิชีพนักวางแผนการเงิน CFP สำหรับสถาบันอบรม"
      />
    </Page>
  );
}
