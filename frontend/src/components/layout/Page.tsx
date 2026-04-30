import { Header } from "./global/Header";
import { Footer } from "./global/Footer";


export function Page({ children, padding = true }: {
  children: React.ReactNode;
  padding?: boolean
}) {
  
  const className = 
    (padding) ? 
      "max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16" :
      "";

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
