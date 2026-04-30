import React from "react";


export function Repeat({ children, n = 1 }: { children: React.ReactNode; n?: number }) {
  return (
    <>
      {Array.from({ length: n }).map((_, i) => (
        <React.Fragment key={i}>
          {children}
        </React.Fragment>
      ))}
    </>
  );
}
