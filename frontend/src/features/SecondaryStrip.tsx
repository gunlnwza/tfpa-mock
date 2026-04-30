import { SecondaryCTAButton } from "../components/ui/Button";

const cardClassName = "w-full p-4 border border-gray-200 bg-white rounded-xl shadow-sm flex flex-col gap-2 items-center justify-center";


function SecondaryCTACard({ title, to, href, msg }: { title: string, to?: string, href?: string, msg: string } ) {
  return (
    <div className="w-full border border-gray-200 shadow-sm rounded-xl p-4 flex flex-col gap-2 items-center justify-center">
      <p className="text-sm">{title}</p>
      <SecondaryCTAButton to={to} href={href}>{msg}</SecondaryCTAButton>
    </div>
  );
}


function KPICard({ title, msg }: { title: string, msg: string } ) {
  return (
    <div className={`${cardClassName} gap-2`}>
      <p className="text-3xl">{msg}</p>
      <p className="text-sm">{title}</p>
    </div>
  )
}

// TODO: Can add icons, more aesthetics
export function SecondaryStrip() {
  return (
    <div className="mx-8 my-4 flex gap-4 justify-center">
      {/* <SecondaryCTACard title="สนใจเป็นนักวางแผนการเงิน?" to="/career_path" msg="สมัครอบรม" /> */}
      {/* <SecondaryCTACard title="สนใจสอบ CFP?" href="https://member.tfpa.or.th/UserLoginNew.aspx" msg="สมัครสอบ" /> */}
      <KPICard title="นักวางแผนการเงิน CFP" msg="833+" />
      <KPICard title="ที่ปรึกษาการเงิน AFPT" msg="1798+" />
      <KPICard title="สมาชิกนิติบุคคล" msg="26+" />
    </div>
  );
}
