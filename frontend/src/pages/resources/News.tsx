import { PageHeader, PageSubheader } from "../../components/global/PageHeader";
import { Page } from "../../components/layout/Page";

import { cardAddBorderClass, cardAddRaiseUpClass, groupHighlightOnHoverClass } from "../../components/ui/styles";
import { useEffect, useState } from "react";


type Media = {
  url: string;
};

type PDF = {
  id: number;
  url: string;
}

type NewsPDF = {
  id: number;
  title: string;
  date: string;
  issue: string;
  blogUrl: string;
  pdf: PDF;
  thumbnail?: Media;
};

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

  const isExam = title.includes("ผลสอบ");
  const bg = (isExam) ? "bg-brand-blue/15" : "bg-gray-100";
  
  return (
    <a
      href={pdfUrl}
      target="_blank"
      className={`${cardAddBorderClass} ${cardAddRaiseUpClass}`}
    >
      {/* Image top */}
      <div className={`border-b border-gray-200 w-full h-36 overflow-hidden flex justify-center items-center`}>
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            className="max-w-full max-h-full object-contain p-2"
          />
        ) : (
          <div className={`w-full h-full flex flex-col justify-center items-center ${bg}`}>
            {/* <span className="text-xs text-gray-400">CFP®</span> */}
            <span className="text-sm font-semibold text-gray-600">
              {issue}
            </span>
          </div>
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

export function NewsCardMock({ title, date }: { title: string; date: string }) {
  return (
    <a
      href="#"
      target="_blank"
      className={`${cardAddBorderClass} ${cardAddRaiseUpClass}`}
    >
      {/* Image top */}
      <div className={`border-b border-gray-200 w-full h-36 overflow-hidden flex justify-center items-center`}>
        <div className={`w-full h-full flex flex-col justify-center items-center bg-gray-100`}>
          {/* <span className="text-xs text-gray-400">CFP®</span> */}
          <span className="text-sm font-semibold text-gray-600">
            {formatThaiDate(date)}
          </span>
        </div>
      </div>

      {/* Text bottom */}
      <div className="p-4 space-y-1">
        <p className={`text-sm font-medium text-gray-700 ${groupHighlightOnHoverClass}`}>
          {title}
        </p>

        <div className="text-xs text-gray-500 flex justify-between">
          <span>{formatThaiDate(date)}</span>
        </div>
      </div>
    </a>
  );
}

export function PaginationMock() {
  const base = "px-3 py-1 text-sm border border-gray-300 rounded-md shadow-sm";
  const disabled = `${base} text-gray-400 cursor-not-allowed`;
  const active = `${base} bg-brand-blue text-white hover:cursor-pointer`;
  const neutral = `${base} text-gray-700 hover:bg-gray-200 hover:cursor-pointer`;

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {/* Prev */}
      <button className={disabled}>
        Prev
      </button>

      {/* Page numbers */}
      <button className={active}>
        1
      </button>

      <button className={neutral}>
        2
      </button>

      <button className={neutral}>
        3
      </button>

      <span className="px-1 text-gray-400">...</span>

      <button className={neutral}>
        10
      </button>

      {/* Next */}
      <button className={neutral}>
        Next
      </button>
    </div>
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

        const thumbnailUrl = item.thumbnail
          ? `http://localhost:1337${item.thumbnail.url}`
          : undefined;

        return (
          <NewsCard
            key={item.id}
            title={item.title}
            date={item.date}
            issue={item.issue}
            pdfUrl={pdfUrl}
            thumbnailUrl={thumbnailUrl}
          />
        );
      })}
    </div>
  );
}


export default function ResourcesNews() {
  return (
    <Page>
      <PageHeader title="ข่าว" margin={0} />
      <PageSubheader title="ประกาศผลสอบ / ประกาศปรับปรุงเนื้อหา / แจ้งประชุม / ข่าวสาร" />
      <NewsSection url="http://localhost:1337/api/news?populate=pdf&sort=date:desc" />
      <PaginationMock />
    </Page>
  );
}
