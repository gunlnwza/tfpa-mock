import consultImg from "../assets/stock/consult.png"
import { PrimaryCTAButton } from "../components/ui/Button";


function Card() {
  return (
    <div className={`px-16`}>
      <h1 className="space-y-2">
        <span className="block text-4xl font-bold text-yellow-500">
          วางแผนชีวิตให้สำเร็จ
        </span>
        <span className="block text-4xl font-bold text-yellow-500">
          ด้วยนักวางแผนการเงิน CFP®
        </span>
      </h1>
      <p className="mt-3 text-md text-gray-200">
        CFP® Professionals Deliver "The Standard of Excellence"
      </p>
      <p className="mt-6 mb-8 text-md text-gray-200">
        มาตรฐานระดับสากล ที่ช่วยให้คุณวางแผนการเงินอย่างเป็นระบบ<br />เพื่ออนาคตที่มั่นคงและเป้าหมายชีวิตที่เป็นจริงได้
      </p>

      <div className="text-xl">
        <PrimaryCTAButton to="find_planner">รับบริการวางแผนการเงิน →</PrimaryCTAButton>
        <p className="mt-3 text-sm text-gray-300">กับนักวางแผนการเงิน CFP® มากกว่า 800+ คนทั่วประเทศ</p>
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
