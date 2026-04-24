import { Link } from "react-router-dom";


type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
};


export function Button({ children, to, href, onClick }: ButtonProps) {
  const base = `
    inline-flex items-center justify-center
    px-6 py-3
    rounded-xl bg-blue-600 text-white font-semibold shadow-sm
    transition hover:bg-blue-700 active:scale-[0.98]
  `;
  const style = `${base}`

  if (to) {
    return (
      <Link to={to} className={style}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={style}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  );
}