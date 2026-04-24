type CenterProps = {
  children: React.ReactNode;
  className?: string;
};


export function Center({ children, className = "" }: CenterProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      {children}
    </div>
  );
}
