import { PageHeader } from "../../components/layout/global/PageHeader";
import { Page } from "../../components/layout/Page";

import { useState, useEffect } from "react";
import { Repeat } from "../../utils";
import { PaginationMock } from "./News";

// MOCK PDF
type PDF = {
  id: string;
  title?: string
  date?: string;
  issue?: string;
  pdfUrl?: string;
  thumbnailUrl?: string;
  blogUrl?: string;
}

const BASE_URL = "http://localhost:1337/api/pdfs";

function PDFCard({ pdf }: { pdf: PDF }) {
  return (
    <div className="group border border-gray-300 shadow-sm rounded-xl p-4">
      <a
        href={pdf.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-1 mb-4
          block overflow-hidden rounded-xl transition-transform duration-300 
          group-hover:scale-105 hover:cursor-pointer
          flex justify-center
          "
      >
        <img
          src={pdf.thumbnailUrl || "/placeholder.png"}
          alt={pdf.title}
          className="w-7/8 h-60 object-cover border border-gray-200 rounded-md"
        />
      </a>

      <div className="mt-3 px-1 space-y-1">
        {pdf.title && (
          <p className="text-sm font-medium text-gray-800 line-clamp-2">{pdf.title}</p>
        )}
        <div className="flex justify-between">
          {pdf.issue && (<p className="text-xs text-gray-500 truncate">
            ฉบับที่ {pdf.issue}
          </p>)}
          {pdf.date && (<p className="text-xs text-gray-500">
            {pdf.date}
          </p>)}
        </div>
      </div>
      {pdf.blogUrl && (<a
        href={pdf.blogUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-2 block px-1 text-xs text-gray-300
          group-hover:text-black hover:text-blue-500 hover:cursor-pointer transition duration-200
        "
      >
        อ่านเวอร์ชันบทความ →
      </a>)}
    </div>
  )
}

export function PDFSection({ url, n = 1 }: { url: string; n?: number }) {
  const [pdfs, setPDF] = useState<PDF[]>([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPDF(data.data));
  }, []);
  
  return (
    <div
      className="
      grid gap-4
      grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8
      "
    >
      <Repeat n={n}>
        {pdfs.map((item) => {
          return (
            <PDFCard pdf={item} />
          );
        })}
      </Repeat>
    </div>
  );
}



export function ResourcesTFPAMagazine() {
  const url = `${BASE_URL}?filters[docType][$eq]=${encodeURIComponent("TFPA Magazine")}`;
  return (
    <Page>
      <PageHeader title="วารสาร TFPA Magazine" />
      <PDFSection url={url} n={2} />
      <PaginationMock />
    </Page>
  );
}

export function ResourcesTFPANews() {
  const url = `${BASE_URL}?filters[docType][$eq]=${encodeURIComponent("TFPA News")}`;
  return (
    <Page>
      <PageHeader title="วารสาร TFPA News" />
      <PDFSection url={url} n={2} />
      <PaginationMock />
    </Page>
  );
}

export function ResourcesBlogs() {
  return (
    <Page>
      <PageHeader title="บทความ" />
    </Page>
  );
}

export function ResourcesBooks() {
  const url = `${BASE_URL}?filters[docType][$eq]=${encodeURIComponent("E-Book")}`;
  return (
    <Page>
      <PageHeader title="E-Book / โบรชัวร์" />
      <PDFSection url={url} />
      <PaginationMock />
    </Page>
  );
}
