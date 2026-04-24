import { Link } from "react-router-dom";
import { blueOnHoverClass } from "../ui/styles";

type NextPageProps = {
  children: React.ReactNode;
  to: string;
}

export function NextPage({ children, to }: NextPageProps) {
  return (
    <Link
      to={to}
      className={`flex items-center justify-end gap-2 py-2 ${blueOnHoverClass}`}
    >
      <span className="text-lg">{children}</span>
      <span className="text-xl">→</span> 
    </Link>
  );
}
