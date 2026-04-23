import { Link } from "react-router-dom";
import type { Paragraph, Inline } from "./types";


function RenderInline(inline: Inline, key: number) {
  switch (inline.type) {
    case "text":
      return <span key={key}>{inline.content}</span>;

    case "link":
      return (
        <Link key={key} to={inline.href} className="underline text-blue-500">
          {inline.content}
        </Link>
      );

    case "break":
      return (<br />);
  }
}


export default function RenderParagraph({ block }: { block: Paragraph }) {
  return (
    <p className="my-4 text-gray-700">
      {block.content.map((inline, j) => RenderInline(inline, j))}
    </p>
  );
}
