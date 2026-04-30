import { PageHeader } from "../../components/layout/global/PageHeader";
import { Page } from "../../components/layout/Page";

import { useState, useEffect } from "react";
import { Repeat } from "../../utils";
import { PaginationMock } from "./News";
import { cardAddRaiseUpClass } from "../../components/ui/styles";

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
    <a
      href={pdf.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group p-4
        border border-gray-300 shadow-sm rounded-xl 
        hover:cursor-pointer
        group hover:shadow-md hover:-translate-y-1 transition-all duration-300
      `}
    >
      <div
        className="
          mt-1 mb-4
          block overflow-hidden rounded-lg
          border border-gray-200
          transition-transform group-hover:scale-104 duration-300
          flex justify-center
          "
      >
        <img
          src={pdf.thumbnailUrl || "/placeholder.png"}
          alt={pdf.title}
          className="w-full h-60 object-cover"
        />
      </div>

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
    </a>
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



function BrochuresRow({ title, url }: { title: string; url: string; }) {
  return (
    <div className="mb-8">
      <h2 className="mb-2 font-medium text-lg">{title}</h2>
      <PDFSection url={url} />
    </div>
  );
}

export function ResourcesBooks() {
  const ebookUrl = `${BASE_URL}?filters[docType][$eq]=${encodeURIComponent("E-Book")}`;
  
  const brochuresUrl = `${BASE_URL}?filters[docType][$eq]=${encodeURIComponent("Brochures")}`;
  const brochureForGeneralAudience = `${brochuresUrl}&filters[audienceType][$eq]=${encodeURIComponent("General Audience")}`
  const brochureForProfessional = `${brochuresUrl}&filters[audienceType][$eq]=${encodeURIComponent("Professionals")}`
  const brochureForCompany = `${brochuresUrl}&filters[audienceType][$eq]=${encodeURIComponent("Company")}`

  return (
    <Page>
      <div className="mb-12">
        <PageHeader title="E-Book" />      
        <PDFSection url={ebookUrl} />
      </div>

      <PageHeader title="โบรชัวร์" />
      <BrochuresRow title="บุคคลทั่วไป" url={brochureForGeneralAudience} />
      <BrochuresRow title="ผู้ประกอบวิชาชีพ CFP/AFPT" url={brochureForProfessional} />
      <BrochuresRow title="องค์กร" url={brochureForCompany} />
    </Page>
  );
}
