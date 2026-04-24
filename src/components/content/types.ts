export type InlineText = { type: "text", content: string }
export type InlineLink =  { type: "link", href: string, content: string }
export type InlineBreak = { type: "break" };
export type InlineBold = { type: "bold", content: string };
export type Inline = InlineText | InlineLink | InlineBreak | InlineBold;

export type Paragraph = { type: "paragraph", content: Inline[] };

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type Heading = { type: "heading", level: HeadingLevel, content: string };

type ListItem = {
  content: Inline[];  // text of the item
  children?: List;  // optional nested list
};
export type List = {
  type: "list";
  items: ListItem[];
  ordered?: boolean;
};

export type Card = { type: "card", blocks: Block[] };

type MediaImage = { type: "image", src: string, alt: string, caption?: string, className?: string };
type MediaVideo = { type: "video", src: string, controls: boolean, caption?: string, className?: string };
type MediaEmbed = { type: "embed", src: string, caption?: string, className?: string };
type MediaItem = MediaImage | MediaVideo | MediaEmbed;
export type Media = { type: "media", item: MediaItem };

// export type Note = { type: "note"; content: string };

// export type Divider = { type: "divider" };

// export type Table = { type: "table", headers: string[], rows: string[][] };

export type Block =
  | Paragraph
  | Heading
  | List
  | Card
  | Media
  // | Note
  // | Divider
  // | Table
