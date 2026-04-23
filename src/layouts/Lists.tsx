import type { ListItems } from "../data/Core";

export function UnorderedList({
  title,
  items,
}: {
  title?: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="font-bold">{title}</h4>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
        {items.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
