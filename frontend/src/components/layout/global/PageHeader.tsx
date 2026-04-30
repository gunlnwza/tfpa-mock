export function PageHeader({ title, margin = 8 }: { title: string; margin?: number }) {
  return (
    <h1 className={`text-2xl mb-${margin} font-semibold`}>{title}</h1>
  );
}

export function PageSubheader({ title, margin = 8 }: { title: string; margin?: number }) {
  return (
    <h2 className={`text-md text-gray-500 mb-${margin} font-normal`}>{title}</h2>
  );
}
