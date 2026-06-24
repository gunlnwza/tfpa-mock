import docsIcon from "../../assets/icons/docs.svg"
import docsWhiteIcon from "../../assets/icons/docs_white.svg"

type PDFLinkProps = {
  href: string;
  title: string;
}

function IconLink({ href, title, src }: {
  href: string;
  title: string;
  src: string;
}) {
  return (
    <a
    href={href}
    className="inline-flex items-center gap-1 hover:text-brand-blue hover:underline"
  >
    <img src={src} className="w-6 h-6" />
    <span className="text-lg">{title}</span>
  </a>
  );
}

export function PDFLink({ href, title }: PDFLinkProps) {
  return (<IconLink href={href} title={title} src={docsIcon} />);
}

export function WhitePDFLink({ href, title }: PDFLinkProps) {
  return (<IconLink href={href} title={title} src={docsWhiteIcon} />);
}
