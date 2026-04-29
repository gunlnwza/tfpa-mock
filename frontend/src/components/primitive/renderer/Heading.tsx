import type { JSX } from "react";
import type { Heading } from "./types";

const styles = {
  h1: "text-4xl md:text-5xl font-bold tracking-tight mb-6",
  h2: "text-3xl md:text-4xl font-semibold tracking-tight mt-10 mb-4",
  h3: "text-lg font-semibold mt-6 mb-2",
  h4: "text-lg font-medium mt-4 mb-2",
  h5: "text-base font-medium mt-3 mb-1",
  h6: "text-sm font-medium mt-2 mb-1 uppercase tracking-wide",
};

export function RenderHeading({ heading }: { heading: Heading }) {
  const Tag = heading.level as keyof JSX.IntrinsicElements;
  return <Tag className={styles[heading.level]}>{heading.content}</Tag>;
}
