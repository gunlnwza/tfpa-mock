const basePrimaryCTAButtonStyle = `
  inline-flex items-center justify-center
  px-5 py-2
  bg-blue-600 text-white font-semibold text-sm
  shadow-sm
  transition
  hover:bg-blue-700
  active:scale-[0.97]
`;

export const PrimaryCTAButtonStyle = `${basePrimaryCTAButtonStyle} rounded`;
export const roundedPrimaryCTAButtonStyle = `${basePrimaryCTAButtonStyle} rounded-full`;
