import { Link } from "react-router-dom";


// News modern carousel
export function News() {
  return (
    <section className="py-5">
      <h2 className="p-2 text-center">Latest News</h2>
      <div className="h-50 grid md:grid-cols-3 gap-6 px-8">
        <div className="p-6 border rounded-xl hover:shadow">News Card 1</div>
        <div className="p-6 border rounded-xl hover:shadow">News Card 2</div>
        <div className="p-6 border rounded-xl hover:shadow">News Card 3</div>
      </div>
    </section>
  );
}
