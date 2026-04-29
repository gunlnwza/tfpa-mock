import { Link } from "react-router-dom";
import type { Inline } from "./types";


export function RenderInline( { inline }: { inline: Inline } ) {
  switch (inline.type) {
    case "text":
      return <span className="">{inline.content}</span>;
    case "bold":
      return <b className="font-medium">{inline.content}</b>;

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
