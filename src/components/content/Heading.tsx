import type { Heading } from "./types";


export default function RenderHeading({ block }: { block: Heading }) {
  switch (block.level) {
    case "h1":
      return <h1>{block.content}</h1>;
    case "h2":
      return <h2>{block.content}</h2>;
    case "h3":
      return <h3 className="text-lg font-semibold">{block.content}</h3>;
    case "h4":
      return <h4>{block.content}</h4>;
    case "h5":
      return <h5>{block.content}</h5>;
    case "h6":
      return <h6>{block.content}</h6>;
    default:
      return null;
  }
}
