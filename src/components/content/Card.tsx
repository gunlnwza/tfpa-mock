import RenderBlocks from "./Blocks";
import type { Block } from "./types";


export default function RenderCard({ blocks }: { blocks: Block[] }) {
  return (
    <div
      // onClick={onClick}
      className={`border border-black rounded-xl p-4 text-sm leading-relaxedm m-4`}
    >
      <RenderBlocks blocks={blocks}/>
    </div>
  )
}
