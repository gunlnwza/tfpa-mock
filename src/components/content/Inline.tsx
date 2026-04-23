import { Link } from "react-router-dom";
import type { Inline } from "./types";


export default function RenderInline( { inline }: { inline: Inline } ) {
  switch (inline.type) {
    case "text":
      return <span>{inline.content}</span>;

    case "link":
      return (
        <Link to={inline.href} className="underline text-blue-500">
          {inline.content}
        </Link>
      );

    case "break":
      return (<br />);

    case "bold":
      return <b>{inline.content}</b>;
  }
}
