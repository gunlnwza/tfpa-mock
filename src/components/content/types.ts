// implemented
export type InlineText = { type: "text", content: string }
export type InlineLink =  { type: "link", href: string, content: string }
export type InlineBreak = { type: "break" };
export type InlineBold = { type: "bold", content: string };
export type Inline = InlineText | InlineLink | InlineBreak | InlineBold;

export type Paragraph = { type: "paragraph", content: Inline[] };

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type Heading = { type: "heading", level: HeadingLevel, content: string };

export type ListItem = {
  content: Inline[];     // text of the item
  children?: List;       // optional nested list
};
export type List = {
  type: "list";
  items: ListItem[];
  ordered?: boolean;
};

export type Card = { type: "card", blocks: Block[] };

export type Image = { type: "image", }

export type Block =
  | Inline
  | Paragraph
  | Heading
  | List
  | Card

  | Note
  | Divider
  | Table
  | Media

// not implemented
export type Note = { type: "note"; content: string };
export type Divider = { type: "divider" };
export type Table = { type: "table", headers: string[], rows: string[][] };
export type Media = { type: "media", src: string, title?: string};
