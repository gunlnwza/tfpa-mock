import Header from "../components/Header";
import Footer from "../components/Footer";


export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  ) 
}


export function PageHeader({ title }: { title: string }) {
  return (
    <h1 className="p-4 text-xl mb-10 font-bold">{title}</h1>
  );
}
