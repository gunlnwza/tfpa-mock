import type { ListItems, InternetLink } from "../data/Core";


type Block =
  | { type: "paragraph"; content: string }
  | { type: "note"; content: string }
  | { type: "list"; content: ListItems}
  | { type: "link"; items: InternetLink }
;


export default function ContentRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return <p key={i}>{block.content}</p>;

          case "note":
            return (
              <p key={i} className="text-sm text-gray-500">
                {block.content}
              </p>
            );

          default:
            return null;
        }
      })}
    </>
  );
}