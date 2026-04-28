import { PageHeader } from "../../components/layout/global/PageHeader";
import { Page } from "../../components/layout/Page";

import { cardAddBorderClass, cardAddRaiseUpClass, groupHighlightOnHoverClass } from "../../components/ui/styles";
import { useEffect, useState } from "react";

type PDF = {
  id: number;
  url: string;
}

type NewsPDF = {
  id: number;
  title: string;
  date: string;
  issue: string;
  pdf: PDF;
}

type NewsCardProps = {
  title: string;
  date: string;
  issue?: string;
  pdfUrl?: string;
  thumbnailUrl?: string;
};

function formatThaiDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "short",
  });
}

export function NewsCard({
  title,
  date,
  issue,
  pdfUrl,
  thumbnailUrl,
}: NewsCardProps) {
  return (
    <a
      href={pdfUrl}
      target="_blank"
      className={`${cardAddBorderClass} ${cardAddRaiseUpClass}`}
    >
      {/* Image top */}
      <div className="border-b border-gray-200 w-full h-36 overflow-hidden flex justify-center items-center bg-gray-50">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            className="max-w-full max-h-full object-contain p-2"
          />
        ) : (
          <span className="text-gray-400 text-sm">PDF</span> // fallback
        )}
      </div>

      {/* Text bottom */}
      <div className="p-4 space-y-1">
        <p className={`text-sm font-medium text-gray-700 ${groupHighlightOnHoverClass}`}>
          {title}
        </p>

        <div className="text-xs text-gray-500 flex justify-between">
          <span>{issue}</span>
          <span>{formatThaiDate(date)}</span>
        </div>
      </div>
    </a>
  );
}

export function NewsSection({ url }: { url: string; }) {
  const [news, setNews] = useState<NewsPDF[]>([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setNews(data.data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {news.map((item) => {
        const pdfUrl = item.pdf
          ? `http://localhost:1337${item.pdf.url}`
          : undefined;

        return (
          <NewsCard
            key={item.id}
            title={item.title}
            date={item.date}
            issue={item.issue}
            pdfUrl={pdfUrl}
          />
        );
      })}
    </div>
  );
}


export default function ResourcesNews() {
  return (
    <Page>
      <PageHeader title="ข่าว" />
      <NewsSection url="http://localhost:1337/api/news?populate=pdf&sort=date:desc" />
    </Page>
  );
}
