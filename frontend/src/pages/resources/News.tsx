import { PageHeader } from "../../components/layout/global/PageHeader";
import { Page } from "../../components/layout/Page";

import { useEffect, useState } from "react";


export function NewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/news?populate=pdf")
      .then(res => res.json())
      .then(data => setNews(data.data));
  }, []);

  return (
    <div>
      {news.map((item: any) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>

            {item.pdf && (
              <a
                href={`http://localhost:1337${item.pdf.url}`}
                target="_blank"
              >
                PDF
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ResourcesNews() {
  return (
    <Page>
      <PageHeader title="ข่าว / ประกาศ" />
      <NewsSection />
    </Page>
  );
}
