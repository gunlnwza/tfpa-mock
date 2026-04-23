import RenderCardList from "./CardList";
import RenderLinkList from "./LinkList";
import RenderDivider from "./Divider";
import RenderHeading from "./Heading";
import RenderList from "./List";
import RenderMedia from "./Media";
import RenderNote from "./Note";
import RenderNumberedList from "./NumberedList";
import RenderParagraph from "./Paragraph";
import RenderTable from "./Table";
import type { Block } from "./types";
import RenderCard from "./Card";


export default function RenderBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block) => {
        switch (block.type) {
          case "paragraph":
            return <RenderParagraph block={block} />;
          case "heading":
            return <RenderHeading block={block} />;
          case "list":
            return <RenderList block={block} />;
          case "card":
            return <RenderCard blocks={block.blocks} />;
          case "numbered-list":
            return <RenderNumberedList block={block} />;
          case "link-list":
            return <RenderLinkList block={block} />;
          case "note":
            return <RenderNote block={block} />;
          case "divider":
            return <RenderDivider block={block} />;
          case "card-list":
            return <RenderCardList block={block} />;
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
