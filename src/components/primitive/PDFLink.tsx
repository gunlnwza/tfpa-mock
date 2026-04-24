import docsIcon from "../../assets/icons/docs.svg"

type PDFLinkProps = {
  href: string;
  title: string;
}

export function PDFLink({ href, title }: PDFLinkProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 hover:text-blue-600 hover:underline"
    >
      <img src={docsIcon} className="w-6 h-6" />
      <span className="text-lg">{title}</span>
    </a>
  );
}
