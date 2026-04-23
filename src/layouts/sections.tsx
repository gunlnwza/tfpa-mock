import type React from "react";


export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="my-4">
      <h2 className="text-xl font-semibold border-b pb-2 mb-4">{title}</h2>
      {children}
    </section>
  );
}
