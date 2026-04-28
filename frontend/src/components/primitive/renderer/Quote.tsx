import { TextCard } from "../../ui/TextCard";
import type { Block } from "./types";


export function RenderQuote({ blocks }: { blocks: Block[] }) {
  return (<TextCard blocks={blocks} />);
}
