import type { Heading } from "./types";


export default function RenderHeading({ heading }: { heading: Heading }) {
  switch (heading.level) {
    case "h1":
      return <h1>{heading.content}</h1>;
    case "h2":
      return <h2>{heading.content}</h2>;
    case "h3":
      return <h3 className="text-lg font-semibold">{heading.content}</h3>;
    case "h4":
      return <h4>{heading.content}</h4>;
    case "h5":
      return <h5>{heading.content}</h5>;
    case "h6":
      return <h6>{heading.content}</h6>;
    default:
      return null;
  }
}
