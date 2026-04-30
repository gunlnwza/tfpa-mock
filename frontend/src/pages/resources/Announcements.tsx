import { PageHeader, PageSubheader } from "../../components/layout/global/PageHeader";
import { Page } from "../../components/layout/Page";

import { NewsSection } from "./News";
import { PaginationMock } from "./News";

export default function ResourcesAnnouncements() {
  return (
    <Page>
      <PageHeader title="ประกาศ" margin={0} />
      <PageSubheader title="ประกาศปรับปรุงหลักเกณฑ์" />
  
      <NewsSection url="http://localhost:1337/api/announcements?populate=pdf&sort=date:desc" />  
      <PaginationMock />
    </Page>
  );
}
