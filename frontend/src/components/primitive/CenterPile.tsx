import type React from "react";


export function CenterPile({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {children}
    </div>
  );
}
