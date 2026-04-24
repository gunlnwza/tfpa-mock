import { Header } from "../components/page/Header";
import { Footer } from "../components/page/Footer";


export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="p-4">
        {children}
      </div>
      <Footer />
    </div>
  ) 
}

