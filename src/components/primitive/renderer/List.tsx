import type { List } from "./types";
import { RenderInline } from "./Inline";

export function RenderList({ list }: { list: List }) {
  const { items, ordered = false } = list;

  const Tag = ordered ? "ol" : "ul";
  const listStyle = ordered ? "list-decimal" : "list-disc";

  return (
    <Tag className={`${listStyle} pl-6 space-y-2 text-gray-700 my-2`}>
      {items.map((item, i) => (
        <li key={i} className="leading-relaxed">
          {item.content.map((inline, j) => (
            <RenderInline key={j} inline={inline} />
          ))}

          {item.children && (
            <div className="mt-2">
              <RenderList list={item.children} />
            </div>
          )}
        </li>
      ))}
    </Tag>
  );
}