const baseprimaryCTAButtonClass = `
  inline-flex items-center justify-center
  px-5 py-2
  bg-brand-blue text-white font-semibold text-sm
  shadow-sm
  transition
  hover:bg-brand-blue-dark
  active:scale-[0.97]
`;
export const primaryCTAButtonClass = `${baseprimaryCTAButtonClass} rounded`;
export const roundedprimaryCTAButtonClass = `${baseprimaryCTAButtonClass} rounded-full`;

const baseLoginButtonClass = `
  inline-flex items-center justify-center
  px-5 py-2 rounded-full
  font-semibold text-sm
`;
export const loginButtonClass = `${baseLoginButtonClass}
  bg-gradient-to-r from-brand-yellow to-brand-teal
  ml-0.5
  text-brand-navy shadow-sm hover:brightness-110
`;
export const loginButtonGhostClass = `${baseLoginButtonClass}
  bg-transparent
  border border-white text-white
  hover:bg-white/10
`;



export const highlightOnHoverClass = "hover:text-brand-blue transition";
export const groupHighlightOnHoverClass = "group-hover:text-brand-blue transition";

export const cardAddBorderClass = "rounded-xl border border-gray-300 bg-white shadow-sm overflow-hidden";
export const cardAddRaiseUpClass = "group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200";
