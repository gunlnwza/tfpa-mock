type KPICardProps = {
  title: string;
  msg: string;
}

// refactor/delete later, not used in features/
export function KPICard({ title, msg }: KPICardProps ) {
  return (
      <div className="w-full p-4 border border-gray-200 bg-white rounded-xl shadow-sm flex flex-col gap-2 items-center justify-center">
      <p className="text-sm">{title}</p>
      <p className="text-xl">{msg}</p>
      </div>
  )
}
