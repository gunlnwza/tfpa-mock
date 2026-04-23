import type { List } from "./types";

export default function RenderList( { block }: { block: List }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-gray-700 my-2">
      {block.items.map((item, i) => (
        <li key={i} className="leading-relaxed">
          {item.text}
        </li>
      ))}
    </ul>
  );
}
