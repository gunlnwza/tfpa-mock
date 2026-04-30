import { PageHeader } from "../../components/layout/global/PageHeader";
import { Page } from "../../components/layout/Page";

import { useState, useEffect } from "react";
import { Repeat } from "../../utils";

// MOCK PDF
type PDF = {
  id: string;
  title: string
  date: string;
  issue: string;
  pdfUrl: string;
  thumbnailUrl?: string;
}

function PDFCard({ pdf }: { pdf: PDF }) {
  return (
    <div className="w-40">
      <a href={pdf.pdfUrl}>
        <img src={pdf.thumbnailUrl}></img>

      </a>
      <div className="flex justify-between">
        <p>ฉบับที่ {pdf.issue}</p>
        <p>{pdf.date}</p>
      </div>
      <a href="#" className="hover:text-blue-700 hover:cursor-pointer text-right">อ่านเวอร์ชั่นบทความ →</a>
    </div>
  )
}

export function PDFSection({ url }: { url: string }) {
  const [pdfs, setPDF] = useState<PDF[]>([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPDF(data.data));
  }, []);
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <Repeat n={50}>
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
  return (
    <Page>
      <PageHeader title="วารสาร TFPA Magazine" />
      <PDFSection url="http://localhost:1337/api/pdfs" />
    </Page>
  );
}

export function ResourcesTFPANews() {
  return (
    <Page>
      <PageHeader title="วารสาร TFPA News" />
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
  return (
    <Page>
      <PageHeader title="E-Book / โบรชัวร์" />
    </Page>
  );
}
