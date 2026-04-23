import type { List } from "./types";
import RenderInline from "./Inline";

export default function RenderList({ list }: { list: List }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-gray-700 my-2">
      {list.items.map((item, i) => (
        <li key={i} className="leading-relaxed">
          {item.map((inline, j) => (
            <RenderInline inline={inline} />
          ))}
        </li>
      ))}
    </ul>
  );
}
