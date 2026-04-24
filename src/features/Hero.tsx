import { Link } from "react-router-dom";


export function Hero() {
  return (
    <div>
      <section className="py-50 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Financial Planning Starts Here
        </h1>

        <p className="text-gray-600">
          Build a career or find expert advice.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 px-8">
        <Link
          to="/cfp/types"
          className="p-6 border rounded-xl hover:shadow"
        >
          CFP Career Journey
        </Link>

        <Link
          to="/advisor/search"
          className="p-6 border rounded-xl hover:shadow"
        >
          Find a Financial Advisor
        </Link>
      </section>
    </div>
  );
}