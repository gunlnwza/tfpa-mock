import type { Paragraph } from "./types";
import { RenderInline } from "./Inline";


export function RenderParagraph({ paragraph }: { paragraph: Paragraph }) {
  return (
    <p className="my-4">
      {paragraph.content.map((inline) => <RenderInline inline={inline} />)}
    </p>
  );
}
