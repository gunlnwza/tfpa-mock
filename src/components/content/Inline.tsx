import { Link } from "react-router-dom";
import type { Inline } from "./types";


export default function RenderInline( { inline }: { inline: Inline } ) {
  switch (inline.type) {
    case "text":
      return <span className="text-gray-700">{inline.content}</span>;
    case "bold":
      return <b className="text-gray-700">{inline.content}</b>;

    case "link":
      return (
        <Link to={inline.href} className="underline text-blue-500">
          {inline.content}
        </Link>
      );

    case "break":
      return (<br />);
  }
}
