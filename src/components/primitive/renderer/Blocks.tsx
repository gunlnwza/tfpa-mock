import type { Block } from "./types";
import { RenderParagraph } from "./Paragraph";
import { RenderHeading } from "./Heading";
import { RenderList } from "./List";
import { RenderCard } from "./Card";
import { RenderMedia } from "./Media";
import { RenderDivider } from "./Divider";
import { RenderTable } from "./Table";


export function RenderBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block) => {
        switch (block.type) {
          case "paragraph":
            return <RenderParagraph paragraph={block} />;
          case "heading":
            return <RenderHeading heading={block} />;
          case "list":
            return <RenderList list={block} />;
          case "card":
            return <RenderCard blocks={block.blocks} />;
          case "media":
            return <RenderMedia block={block} />;
          case "divider":
            return <RenderDivider block={block} />;
          case "table":
            return <RenderTable block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
