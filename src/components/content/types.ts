type ListItem = {
  text: string;
  description?: string;
}

type InternetLink = {
  text: string;
  href: string;
}

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";




export type Paragraph = { type: "paragraph", content: string };
export type Heading = { type: "heading", content: string, level: HeadingLevel };
export type List = { type: "list", items: ListItem[] };
export type NumberedList = { type: "numbered-list", items: ListItem[] };
export type LinkList = { type: "link-list"; items: InternetLink[] };
export type Note = { type: "note"; content: string };
export type Divider = { type: "divider" };
export type CardList = { type: "card-list"; items: ListItem[] };
export type Table = { type: "table", headers: string[], rows: string[][] };
export type Media = { type: "media", src: string, title?: string};

export type Block =
  | Paragraph
  | Heading
  | List
  | NumberedList
  | LinkList
  | Note
  | Divider
  | CardList
  | Table
  | Media
