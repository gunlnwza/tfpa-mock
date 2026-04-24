import { RenderBlocks } from "./Blocks";
import type { Block } from "./types";


export function RenderCard({ blocks }: { blocks: Block[] }) {
  return (
    <div
      // onClick={onClick}
      className={`border border-black rounded-xl p-4 my-4 leading-relaxed`}
    >
      <RenderBlocks blocks={blocks}/>
    </div>
  )
}
