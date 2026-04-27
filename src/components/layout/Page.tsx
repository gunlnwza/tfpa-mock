import { Header } from "./global/Header";
import { Footer } from "./global/Footer";


export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans">
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  ) 
}
