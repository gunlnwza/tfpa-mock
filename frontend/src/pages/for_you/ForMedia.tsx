import { PageHeader } from "../../components/layout/global/PageHeader";
import { Page } from "../../components/layout/Page";
import { PDFLink } from "../../components/primitive/PDFLink";

export default function ForMedia() {
  return (
    <Page>
      <PageHeader title="สื่อมวลชน" />
      <PDFLink
        href="https://tfpa.or.th/Upload/b126a5ae-3b21-4a2e-b6cf-a560ae1b5f99.pdf"
        title="คู่มือการใช้เครื่องหมายรับรองคุณวุฒิวิชีพนักวางแผนการเงิน CFP สำหรับสื่อมวลชน"
      />
    </Page>
  );
}
