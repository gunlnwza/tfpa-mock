import handshakeImg from "../assets/stock/handshake.png"
import { PrimaryCTAButton } from "../components/ui/Button";


export function Hero() {
  return (
    <div className="relative h-[500px] w-full">
      {/* background image */}
      <img
        src={handshakeImg}
        alt="Handshake Image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* text */}
      <div className="relative z-10 h-full flex flex-col justify-center p-8">
        <div className="md:text-5xl font-bold leading-tight space-y-2 bg-white/90 rounded-xl p-4">
          <h1 className="mb-6">
            <span className="block text-black text-3xl mb-4">
              CFP® Professionals Deliver
            </span>
            <span className="block text-blue-800 text-5xl mb-6">
              "The Standard of Excellence"
            </span>
            <span className="block text-yellow-600 text-3xl mb-4">
              เป้าหมายชีวิตสำเร็จได้ด้วยนักวางแผนการเงิน CFP®
            </span>
          </h1>
          <div className="text-xl">
            <PrimaryCTAButton to="find_planner">รับบริการวางแผนการเงิน</PrimaryCTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
