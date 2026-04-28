import { Link } from "react-router-dom";
import { highlightOnHoverClass } from "../ui/styles";

type NextPageProps = {
  children: React.ReactNode;
  to: string;
}

export function NextPage({ children, to }: NextPageProps) {
  return (
    <div className="flex justify-end">
      <Link
        to={to}
        className={`inline-flex items-center gap-2 py-2 ${highlightOnHoverClass}`}
      >
        <span className="text-lg">{children}</span>
        <span className="text-xl">→</span> 
      </Link>
    </div>
  );
}
