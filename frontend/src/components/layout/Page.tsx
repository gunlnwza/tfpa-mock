import { Header } from "./global/Header";
import { Footer } from "./global/Footer";


export function Page({ children, padding = true }: {
  children: React.ReactNode;
  padding?: boolean
}) {
  const className = (padding) ? "px-8 py-8" : ""

  return (
    <div className="font-sans">
      <Header />
      <div className={className}>
        {children}
      </div>
      <Footer />
    </div>
  ) 
}
