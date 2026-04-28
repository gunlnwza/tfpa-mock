import { PageHeader } from "../../components/layout/global/PageHeader";
import { Page } from "../../components/layout/Page";

import { NewsSection } from "./News";

export default function ResourcesAnnouncements() {
  return (
    <Page>
      <PageHeader title="ประกาศ" />
      <NewsSection url="http://localhost:1337/api/announcements?populate=pdf&sort=date:desc" />  
    </Page>
  );
}
