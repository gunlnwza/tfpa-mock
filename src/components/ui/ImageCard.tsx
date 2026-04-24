import { groupHighlightOnHoverClass } from "./styles";
import { cardAddBorderClass, cardAddRaiseUpClass } from "./styles";

type ImageCardProps = {
  src?: string;
  alt?: string;
  imgDivClassName?: string;
  href?: string;
  title?: string;
};


export function ImageCard({ src, alt, imgDivClassName, href, title }: ImageCardProps) {
  const Wrapper = href ? "a" : "div";
  const wrapperClass = href ? `w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ${cardAddBorderClass} ${cardAddRaiseUpClass}` : cardAddBorderClass;

  return (
    <Wrapper
      href={href}
      className={wrapperClass}
    >
      {/* Image top */}
      <div className={`border-b border-gray-200 w-full h-36 overflow-hidden flex justify-center items-center ${imgDivClassName}`}>
        <img
          src={src}
          alt={alt}
          className={`max-w-full max-h-full object-contain p-4`}
          />
      </div>

      {/* Text bottom */}
      {title && (
        <div className="p-4">
          <p className={`text-sm font-medium text-gray-700 ${groupHighlightOnHoverClass}`}>
            {title}
          </p>
        </div>
      )}
    </Wrapper>
  );
}
