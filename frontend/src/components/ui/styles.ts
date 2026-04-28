const baseprimaryCTAButtonClass = `
  inline-flex items-center justify-center
  px-5 py-2
  bg-blue-600 text-white font-semibold text-sm
  shadow-sm
  transition
  hover:bg-blue-700
  active:scale-[0.97]
`;
export const primaryCTAButtonClass = `${baseprimaryCTAButtonClass} rounded`;
export const roundedprimaryCTAButtonClass = `${baseprimaryCTAButtonClass} rounded-full`;

export const highlightOnHoverClass = "hover:text-blue-600 transition";
export const groupHighlightOnHoverClass = "group-hover:text-blue-600 transition";

export const cardAddBorderClass = "rounded-xl border border-gray-300 bg-white shadow-sm overflow-hidden";
export const cardAddRaiseUpClass = "group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200";
