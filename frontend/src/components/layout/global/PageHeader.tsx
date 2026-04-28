export function PageHeader({ title, margin = 8 }: { title: string; margin?: number }) {
  return (
    <h1 className={`text-2xl mb-${margin} font-semibold`}>{title}</h1>
  );
}
