import { Link } from "react-router-dom";


type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
}

type BaseButtonProps = ButtonProps & { className?: string };


export function BaseButton({ children, to, href, onClick, className }: BaseButtonProps) {
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export function PrimaryCTAButton({ children, to, href, onClick }: ButtonProps) {
  return (
    <BaseButton to={to} href={href} onClick={onClick} className={`
      inline-flex items-center justify-center px-6 py-3
      rounded-xl bg-blue-600 text-white font-semibold shadow-sm
      transition hover:bg-blue-800 active:scale-[0.98]
      `}
      >
      {children}
    </BaseButton>
  );
}

export function SecondaryCTAButton({ children, to, href, onClick }: ButtonProps) {
  return (
    <BaseButton to={to} href={href} onClick={onClick} className={`
      inline-flex items-center justify-center px-6 py-3
      rounded-xl shadow-sm bg-blue-200 font-semibold
      transition hover:bg-blue-100 active:scale-[0.98]
      `}
      >
      {children}
    </BaseButton>
  );
}
