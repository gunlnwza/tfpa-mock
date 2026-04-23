import type { Paragraph } from "./types";


export default function RenderParagraph({ block }: { block: Paragraph }) {
  return (<p>{block.content}</p>);
}
