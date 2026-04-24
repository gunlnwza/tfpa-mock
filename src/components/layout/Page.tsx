import { Header } from "./global/Header";
import { Footer } from "./global/Footer";


export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="px-20 py-10">
        {children}
      </div>
      <Footer />
    </div>
  ) 
}
