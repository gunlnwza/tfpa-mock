import { RenderBlocks } from "../primitive/renderer/Blocks";
import type { Block } from "../primitive/renderer/types";
import { cardAddBorderClass } from "./styles";


type TextCardProps = {
  blocks: Block[];
  className?: string;
};

export function TextCard({ blocks, className }: TextCardProps) {
  return (
    <div className={`px-4 ${cardAddBorderClass} ${className}`}>
      <RenderBlocks blocks={blocks} />
    </div>
  );
}
