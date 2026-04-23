# 🧩 Content Blocks CMS Spec

A lightweight structured content system used to render pages via `RenderBlocks`.

---

## 1. Inline

Inline elements are the smallest units of content. They are rendered **in sequence** and flow like normal text.

### Types
```ts
type Inline =
  | { type: "text"; content: string }
  | { type: "link"; href: string; content: string }
  | { type: "break" };
```

### Behavior
- `text` → plain text
- `link` → clickable link
- `break` → line break (`<br />`)
- Order matters (left → right rendering)

### Example
```ts
[
  { type: "text", content: "Visit " },
  { type: "link", href: "/", content: "home" },
  { type: "break" },
  { type: "text", content: "Thank you" }
]
```

---

## 2. Paragraph

A paragraph is a block that contains **Inline[]**.

### Type
```ts
type Paragraph = {
  type: "paragraph";
  content: Inline[];
};
```

### Behavior
- Renders as a text block (e.g. `<p>`)
- Supports mixed inline content (text, links, breaks)

### Example
```ts
{
  type: "paragraph",
  content: [
    { type: "text", content: "Hello " },
    { type: "link", href: "/", content: "world" }
  ]
}
```

---

## 3. Heading

A heading is a simple text-only block.

### Type
```ts
type Heading = {
  type: "heading";
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  content: string;
};
```

### Behavior
- Renders as `<h1>`–`<h6>`
- Does **not** support Inline (text only)

### Example
```ts
{
  type: "heading",
  level: "h3",
  content: "Section Title"
}
```

---

## 4. List

A list is a collection of items, where each item is **Inline[]**.

### Type
```ts
type ListItem = Inline[];

type List = {
  type: "list";
  items: ListItem[];
};
```

### Behavior
- Each `ListItem` = one `<li>`
- Each item supports rich inline content
- No nested lists (currently)

### Example
```ts
{
  type: "list",
  items: [
    [
      { type: "text", content: "Item 1" }
    ],
    [
      { type: "text", content: "Go to " },
      { type: "link", href: "/", content: "home" }
    ]
  ]
}
```

---

## 5. Card

A card is a container block that groups other blocks.

### Type
```ts
type Card = {
  type: "card";
  blocks: Block[];
};
```

### Behavior
- Acts as a visual container (e.g. box, panel)
- Can contain any `Block`
- Supports nesting (cards inside cards if needed)

### Example
```ts
{
  type: "card",
  blocks: [
    {
      type: "heading",
      level: "h3",
      content: "Contact"
    },
    {
      type: "paragraph",
      content: [
        { type: "text", content: "Email: info@example.com" }
      ]
    }
  ]
}
```

---

## 6. Block

Top-level union used by the renderer.

### Type
```ts
type Block =
  | Inline
  | Paragraph
  | Heading
  | List
  | Card
  | Note
  | Divider
  | Table
  | Media;
```

### Behavior
- `RenderBlocks` iterates through `Block[]`
- Dispatches rendering based on `block.type`
- Inline blocks can appear at top-level (rendered directly)

---

## 7. Rendering Model

```ts
<RenderBlocks blocks={Block[]} />
```

### Rules
- Blocks are rendered **in order**
- Each block type maps to a specific renderer:
  - Inline → `RenderInline`
  - Paragraph → `RenderParagraph`
  - Heading → `RenderHeading`
  - List → `RenderList`
  - Card → `RenderCard`
- System is **extensible** via new block types

---

## Notes

- Inline is reused across Paragraph and List for consistency
- Heading intentionally uses `string` (simpler, no inline styling)
- Lists are flat (no nesting yet)
- Card enables composition and layout grouping
