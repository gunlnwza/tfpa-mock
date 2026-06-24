import { PageHeader } from "../../../components/global/PageHeader";
import { Page } from "../../../components/layout/Page";
import { PrimaryCTAButton } from "../../../components/ui/Button";
import { Center } from "../../../components/ui/Center";
import { Section } from "../../../components/layout/Section";
import { FeaturedVideo } from "../../resources/Videos";

import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

function KnowledgeCorner() {
  return (
    <div className="mt-6">
      <Section title="มุมความรู้">
        <FeaturedVideo
          title="แผนเกษียณพัง เพราะมองไม่เห็นภาพรวมทางการเงิน | ลงทุนวิทยาฉบับ50+ SS2 EP.1"
          href="https://www.youtube.com/watch?v=FPDIajtvtMs"
          videoId="FPDIajtvtMs"
        />
    
        <p className="mt-8 mb-8">(เนื้อหาที่น่าสนใจเกี่ยวกับการวางแผนการเงิน)</p>
        <p className="mt-8 mb-8">(เนื้อหาที่น่าสนใจเกี่ยวกับการวางแผนการเงิน)</p>
        <p className="mt-8 mb-8">(เนื้อหาที่น่าสนใจเกี่ยวกับการวางแผนการเงิน)</p>
        <p className="mt-8 mb-8">(เนื้อหาที่น่าสนใจเกี่ยวกับการวางแผนการเงิน)</p>
        <p className="mt-8 mb-8">(เนื้อหาที่น่าสนใจเกี่ยวกับการวางแผนการเงิน)</p>
        <p className="mt-8 mb-8">(เนื้อหาที่น่าสนใจเกี่ยวกับการวางแผนการเงิน)</p>
      </Section>
    </div>
  );
}


type Rich = {
  id: number;
  title: string;
  content: any;
};

function StyledBlockRenderer({ content }: { content: any }) {
  return (<BlocksRenderer
    content={content}
    blocks={{
      paragraph: ({ children }) => (
        <p className="text-gray-700 leading-relaxed my-4">
          {children}
        </p>
      ),

      heading: ({ children, level }) => {
        if (level === 1)
          return <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>;
        if (level === 2)
          return <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>;
        if (level === 3)
          return <h3 className="text-2xl font-semibold mt-5 mb-2">{children}</h3>;
        if (level === 4)
          return <h4 className="text-xl font-medium mt-4 mb-2">{children}</h4>;
        if (level === 5)
          return <h5 className="text-lg font-medium mt-3 mb-1">{children}</h5>;
        return <h6 className="text-base font-medium mt-2 mb-1">{children}</h6>;
      },

      list: ({ children, format }) => {
        const Tag = format === "ordered" ? "ol" : "ul";
        const bullet = format === "ordered" ? "list-decimal" : "list-disc";
        return (
          <Tag className={`list-inside my-4 pl-4 space-y-2 ${bullet}`}>
            {children}
          </Tag>
        );
      },

      quote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
          {children}
        </blockquote>
      ),

      code: ({ children }) => (
        <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto my-4">
          <code className="text-sm text-gray-800">{children}</code>
        </pre>
      ),

      link: ({ children, url }) => (
        <a
          href={url}
          className="text-brand-blue underline hover:text-brand-blue-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),

      image: ({ image }) => (
        <img
          src={image.url}
          alt={image.alternativeText || ""}
          className="rounded-lg shadow-lg my-6"
        />
      ),
    }} />
  );
}


export default function ForGeneralAudience() {
  // const [riches, setRiches] = useState<Rich[]>([]);

  // const BASE_URL = "http://localhost:1337/api/riches";

  // useEffect(() => {
  //   fetch(BASE_URL)
  //     .then((res) => res.json())
  //     .then((data) => setRiches(data.data));
  // }, []);

  // if (!riches.length) return null;

  // const item = riches[0];

  return (
    <Page>
      <PageHeader title="บุคคลทั่วไป" />
{/* 
      <Section title={item.title}>
        <StyledBlockRenderer content={item.content} />
      </Section> */}

      <Center>
        <PrimaryCTAButton to="/find_planner">รับบริการวางแผนการเงิน</PrimaryCTAButton>
      </Center>

      <KnowledgeCorner />
    </Page>
  );
}
