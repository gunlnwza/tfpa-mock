import { PageHeader, PageSubheader } from "../../components/layout/global/PageHeader";
import { Page } from "../../components/layout/Page";

import { PaginationMock } from "./News";
import { NewsCardMock } from "./News";

export default function ResourcesActivities() {
  return (
    <Page>
      <PageHeader title="กิจกรรม" margin={0} />
      <PageSubheader title="ประกาศสัมมนา" />
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <NewsCardMock title="การประชุมใหญ่สามัญประจำปี 2569" date="4/1/2025"/>
        <NewsCardMock title="งานสัมมนา TFPA Wealth Management Forum 2025" date="11/1/2026"/>
        <NewsCardMock title="หลักสูตรการวางแผนและการบริหารการเงินหลังเกษียณ PRS" date="10/1/2025"/>
        <NewsCardMock title="งานสัมมนา World Financial Planning Day 2025" date="10/1/2025"/>
        <NewsCardMock title="บันทึกเทปงานสัมมนา TFPA Wealth Management Forum 2024" date="11/1/2024"/>
        <NewsCardMock title="งานสัมมนา TFPA Wealth Management Forum 2024" date="10/1/2024"/>
        <NewsCardMock title="กิจกรรม Financial Planning Clinic ครั้งที่ 4/2567" date="10/1/2024"/>
        <NewsCardMock title="กิจกรรม Financial Planning Clinic ครั้งที่ 3/2567" date="6/1/2024"/>
      </div>
      <PaginationMock />
    </Page>
  );
}
