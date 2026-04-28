export function PageHeader({ title, margin = 8 }: { title: string; margin?: number }) {
  return (
    <h1 className={`text-3xl mb-${margin} font-bold`}>{title}</h1>
  );
}
