import consultImg from "../assets/stock/consult.png"
import { PrimaryCTAButton } from "../components/ui/Button";

import avatar1 from "../assets/people/kanokthip_saichumint.jpg";
import avatar2 from "../assets/people/narint_aekwongwiriya.jpg";
import avatar3 from "../assets/people/seksan_towiwat.jpg";
import avatar4 from "../assets/people/waraporn_wibunkanaruk.jpg";
import avatar5 from "../assets/people/tharisa_chaisunthornyothin.jpg";

const AVATARS = [avatar1, avatar2, avatar3, avatar4, avatar5];

function AvatarStack() {
  return (
    <div className="mt-5 flex items-center gap-3">
      {/* overlapping circles */}
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`CFP Professional ${i + 1}`}
            className="w-10 h-10 rounded-full object-cover object-top border-2 border-white"
          />
        ))}
        {/* +N overflow bubble */}
        <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-yellow flex items-center justify-center">
          <span className="text-xs font-bold text-gray-900">+795</span>
        </div>
      </div>

      {/* label */}
      <div className="leading-tight">
        <p className="text-sm font-semibold text-white">800+ นักวางแผนการเงิน CFP®</p>
        <p className="text-xs text-gray-300">พร้อมดูแลคุณทั่วประเทศ</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className={`px-16`}>
      <h1 className="space-y-2">
        <span className="block text-4xl font-bold text-brand-yellow">
          วางแผนชีวิตให้สำเร็จ
        </span>
        <span className="block text-4xl font-bold text-brand-yellow">
          ด้วยนักวางแผนการเงิน CFP®
        </span>
      </h1>

      {/* tagline */}
      <p className="mt-3 text-sm font-medium tracking-widest text-gray-300 uppercase">
        CFP® Professionals Deliver "The Standard of Excellence"
      </p>

      {/* sub copy */}
      <p className="mt-4 mb-8 text-base text-gray-200 leading-relaxed">
        มาตรฐานระดับสากล ที่ช่วยให้คุณวางแผนการเงินอย่างเป็นระบบ<br />
        เพื่ออนาคตที่มั่นคงและเป้าหมายชีวิตที่เป็นจริงได้
      </p>

      <div className="text-xl">
        <PrimaryCTAButton to="find_planner">รับบริการวางแผนการเงิน →</PrimaryCTAButton>
        <AvatarStack />
      </div>
    </div>
  );
}

export function Hero({ className }: { className: string }) {
  return (
    <div className={`relative w-full ${className} flex items-center`}>
      {/* background image */}
      <img
        src={consultImg}
        alt="Consult Image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* optional dark overlay for readability */}
      <div className={`
        absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent 
        `}
      />

      {/* text */}
      <div className="relative">
        <Card />
      </div>
    </div>
  );
}
