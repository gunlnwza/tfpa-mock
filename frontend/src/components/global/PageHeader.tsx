// the h1 text at the top

export function PageHeader({ title, margin = 8, border = false }: { title: string; margin?: number; border?: boolean }) {
  const addBorder = border ? "border-b pb-1 border-gray-500" : "";
  return (
    <h1 className={`
      text-2xl font-semibold
      mb-${margin}
      ${addBorder}
    `}>
      {title}
    </h1>
  );
}

export function PageSubheader({ title, margin = 8 }: { title: string; margin?: number }) {
  return (
    <h2 className={`text-md text-gray-500 mb-${margin} font-normal`}>{title}</h2>
  );
}
