
export function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <section className="my-4">
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">{title}</h3>
        {children}
      </section>
    );
  }
  
  
  export function SubSectionUnorderedList({
    title,
    items,
  }: {
    title?: string;
    items: string[];
  }) {
    return (
      <div className="">
        <h4 className="font-bold">{title}</h4>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
          {items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  
  export function SubSectionOrderedList({
    title,
    items,
  }: {
    title?: string;
    items: string[];
  }) {
    return (
      <div className="">
        <h4 className="font-bold">{title}</h4>
        <ol className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
          {items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      </div>
    );
  }
  
  
  export function SubSectionParagraph({
    title,
    items,
  }: {
    title?: string;
    items: string[];
  }) {
    return (
      <div className="">
        <h4 className="font-bold">{title}</h4>
          {items.map((item) => (
            <p className="text-gray-700 leading-relaxed whitespace-pre-line my-4">{item}</p>
          ))}
      </div>
    );
  }
  