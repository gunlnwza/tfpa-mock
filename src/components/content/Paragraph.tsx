import type { Paragraph } from "./types";


export default function RenderParagraph({ block }: { block: Paragraph }) {
  return (<p className="my-4">{block.content}</p>);
}
