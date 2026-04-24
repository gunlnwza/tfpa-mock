import { Link } from "react-router-dom";


export function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-8 py-10">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Address */}
          <div className="space-y-2 text-sm leading-relaxed">
            <p className="font-semibold">สมาคมนักวางแผนการเงินไทย</p>
            <p>
              ชั้น 6 อาคารตลาดหลักทรัพย์แห่งประเทศไทย<br />
              93 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง<br />
              กรุงเทพมหานคร 10400
            </p>
            <p>โทรศัพท์: 0 2009 9393</p>
            <p>Website: www.tfpa.or.th</p>
          </div>

          {/* Legal */}
          <div className="text-sm leading-relaxed">
            <p>
              สงวนลิขสิทธิ์ 2560 สมาคมนักวางแผนการเงินไทย
            </p>
            <p className="mt-2 text-gray-300">
              CFP®, CERTIFIED FINANCIAL PLANNER™ are trademarks owned outside the U.S.
              by Financial Planning Standards Board Ltd.
              Thai Financial Planners Association is the licensing authority in Thailand.
            </p>
          </div>

          {/* Social + Links */}
          <div className="flex flex-col justify-between">
            
            {/* Social icons */}
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80">FB</a>
              <a href="#" className="hover:opacity-80">YT</a>
              <a href="#" className="hover:opacity-80">LINE</a>
            </div>

            {/* Policy links */}
            <div className="flex gap-4 text-sm mt-4">
              <Link to="/privacy_policy" className="hover:underline text-blue-100 underline block text-center">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="hover:underline text-blue-100 underline block text-center">
                Sitemap
              </Link>
              <a
                href="https://www.tfpa.or.th/upload/tfpa-2109221601078698.pdf"
                className="text-blue-100 underline block text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                ข้อบังคับสมาคม
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
