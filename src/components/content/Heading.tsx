import type { JSX } from "react";
import type { Heading } from "./types";

const styles = {
  h1: "text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6",
  h2: "text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mt-10 mb-4",
  h3: "text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-2",
  h4: "text-lg font-medium text-gray-800 mt-4 mb-2",
  h5: "text-base font-medium text-gray-700 mt-3 mb-1",
  h6: "text-sm font-medium text-gray-600 mt-2 mb-1 uppercase tracking-wide",
};

export default function RenderHeading({ heading }: { heading: Heading }) {
  const Tag = heading.level as keyof JSX.IntrinsicElements;
  return <Tag className={styles[heading.level]}>{heading.content}</Tag>;
}
