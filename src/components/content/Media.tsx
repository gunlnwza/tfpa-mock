import RenderInline from "./Inline";
import type { Media } from "./types";


function Caption(caption) {

}

function BorderWithCaption({
  caption,
  children,
}: {
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      {caption && (
        <div className="mt-2 text-center">
          <RenderInline inline={{ type: "text", content: caption }} />
        </div>
      )}

      <div className="inline-block border border-gray-300">
        {children}
      </div>
    </div>
  );
}


export default function RenderMedia({ block }: { block: Media }) {
  const item = block.item;

  switch (item.type) {
    case "image":
      return (
        <BorderWithCaption caption={item.caption}>
          <img
            src={item.src}
            alt={item.alt ?? ""}
            className="mx-auto object-contain"
          />
        </BorderWithCaption>
      );

    case "video":
      return (
        <BorderWithCaption caption={item.caption}>
          <video
            src={item.src}
            controls={item.controls ?? true}
            className="w-full"
          />
        </BorderWithCaption>    
      );

    case "embed":
      return (
        <iframe
          src={item.src}
          className="w-1/2 h-100 rounded-xl overflow-hidden border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      );

    default:
      return null;
  }
}