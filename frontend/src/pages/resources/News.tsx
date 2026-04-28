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
  blogUrl: string;
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
      className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ${cardAddBorderClass} ${cardAddRaiseUpClass}`}
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
        <p className={`text-sm font-medium text-gray-700 line-clamp-2 ${groupHighlightOnHoverClass}`}>
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

export function NewsSection() {
  const [news, setNews] = useState<NewsPDF[]>([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/news?populate=pdf")
      .then(res => res.json())
      .then(data => setNews(data.data));
  }, []);

  return (
    <div className="p-4 flex flex-wrap">
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

function formatThaiDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "short",
  });
}


export default function ResourcesNews() {
  return (
    <Page>
      <PageHeader title="ข่าว / ประกาศ" />
      <NewsSection />
    </Page>
  );
}
