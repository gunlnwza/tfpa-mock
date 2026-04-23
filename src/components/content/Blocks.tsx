

import RenderDivider from "./Divider";
import RenderHeading from "./Heading";
import RenderList from "./List";
import RenderMedia from "./Media";
import RenderNote from "./Note";

import RenderParagraph from "./Paragraph";
import RenderTable from "./Table";
import type { Block } from "./types";
import RenderCard from "./Card";
import RenderInline from "./Inline";


export default function RenderBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block) => {
        switch (block.type) {
          case "text":
          case "link":
          case "break":
            return <RenderInline inline={block} />;
          case "paragraph":
            return <RenderParagraph paragraph={block} />;
          case "heading":
            return <RenderHeading heading={block} />;
          case "list":
            return <RenderList list={block} />;
          case "card":
            return <RenderCard blocks={block.blocks} />;
          // case "numbered-list":
            // return <RenderNumberedList block={block} />;
          // case "link-list":
            // return <RenderLinkList block={block} />;
          case "note":
            return <RenderNote block={block} />;
          case "divider":
            return <RenderDivider block={block} />;
          // case "card-list":
            // return <RenderCardList block={block} />;
          case "table":
            return <RenderTable block={block} />;
          case "media":
            return <RenderMedia block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
