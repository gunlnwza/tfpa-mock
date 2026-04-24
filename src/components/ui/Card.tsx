import { blueOnHoverClass } from "./styles";

type CardProps = {
  src: string;
  imgDivClassName?: string;
  href?: string;
  title?: string;
};

// COMPONENT
export function Card({ src, imgDivClassName, href, title }: CardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-xl border border-gray-300 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
    >
      {/* Image top */}
      <div className={`border-b border-gray-200 w-full h-36 overflow-hidden flex justify-center items-center ${imgDivClassName}`}>
        <img
          src={src}
          className={`max-w-full max-h-full object-contain p-4`}
        />
      </div>

      {/* Text bottom */}
      {title && (
        <div className="p-4">
          <p className={`text-sm font-medium text-gray-700 ${blueOnHoverClass}`}>
            {title}
          </p>
        </div>
      )}
    </Wrapper>
  );
}
