// type InternetLink = {
//   text: string;
//   href: string;
// }


type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type ListItem = Inline[];

// implemented
export type InlineText = { type: "text", content: string }
export type InlineLink =  { type: "link", href: string, content: string }
export type InlineBreak = { type: "break" };

export type Inline = InlineText | InlineLink | InlineBreak ;

export type Paragraph = { type: "paragraph", content: Inline[] };
export type Heading = { type: "heading", level: HeadingLevel, content: string };
export type List = { type: "list", items: ListItem[] };
export type Card = { type: "card", blocks: Block[] };
export type Image = { type: "image", }

// not implemented
export type Note = { type: "note"; content: string };
export type Divider = { type: "divider" };
export type Table = { type: "table", headers: string[], rows: string[][] };
export type Media = { type: "media", src: string, title?: string};


export type Block =
  | Inline
  | Paragraph
  | Heading
  | List
  | Card

  // | NumberedList
  // | LinkList
  | Note
  | Divider
  // | CardList
  | Table
  | Media
