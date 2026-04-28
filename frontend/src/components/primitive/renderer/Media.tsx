import { RenderInline } from "./Inline";
import type { Media } from "./types";


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

      <div className="inline-block border border-gray-300 rounded">
        {children}
      </div>
    </div>
  );
}


export function RenderMedia({ block }: { block: Media }) {
  const item = block.item;

  switch (item.type) {
    case "image":
      return (
        <BorderWithCaption caption={item.caption}>
          <img
            src={item.src}
            alt={item.alt ?? ""}
            className={`rounded block max-w-3xl object-contain ${item.className}`}
          />
        </BorderWithCaption>
      );

    case "video":
      return (
        <BorderWithCaption caption={item.caption}>
          <video
            src={item.src}
            controls={item.controls ?? true}
            className={`rounded block max-w-3xl ${item.className}`}
          />
        </BorderWithCaption>  
      );

    case "embed":
      return (
        <BorderWithCaption caption={item.caption}>
          <iframe
            src={item.src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className={`rounded w-200 h-100 ${item.className}`}
          />
        </BorderWithCaption>
      );

    default:
      return null;
  }
}