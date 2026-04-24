// type CoolCardProps = {
//   title: string;
//   description?: string;
//   image?: string;
//   href?: string;
// };

// export function CoolCard({ title, description, image, href }: CoolCardProps) {
//   const Wrapper = href ? "a" : "div";

//   return (
//     <Wrapper
//       href={href}
//       className="group block rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
//     >
//       {image && (
//         <div className="relative h-44 w-full overflow-hidden">
//           <img
//             src={image}
//             alt={title}
//             className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
//         </div>
//       )}

//       <div className="p-4 space-y-2">
//         <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition">
//           {title}
//         </h3>

//         {description && (
//           <p className="text-sm text-gray-400 line-clamp-2">
//             {description}
//           </p>
//         )}

//         <div className="pt-2 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition">
//           View →
//         </div>
//       </div>
//     </Wrapper>
//   );
// }
