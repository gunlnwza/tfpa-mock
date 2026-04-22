import Header from "../components/Header";
import Footer from "../components/Footer";


function LoginCard() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-12">
      <div className="w-full max-w-4xl bg-white border border-black rounded-xl p-8 space-y-8">
        
        <h1 className="text-2xl font-semibold border-b pb-4">
          User Login
        </h1>

        {/* Form */}
        <div className="space-y-6">
          
          {/* ID */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label className="text-right font-medium">
              เลขประจำตัวประชาชน
            </label>
            <input
              type="text"
              placeholder="กรอกเลขประจำตัวประชาชน 13 หลัก (ตัวเลขเท่านั้น)"
              className="col-span-2 border border-black rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Password */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label className="text-right font-medium">
              รหัสผ่าน
            </label>
            <input
              type="password"
              placeholder="กรอกรหัสผ่าน"
              className="col-span-2 border border-black rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Captcha */}
          <div className="grid grid-cols-3 items-start gap-4">
            <label className="text-right font-medium pt-2">
              ยืนยันความปลอดภัย
            </label>

            <div className="col-span-2 border border-black rounded-xl p-6 space-y-4">
              
              <p className="text-sm font-medium">
                🔒 กรุณากรอกรหัสที่ปรากฏด้านล่าง:
              </p>

              <div className="flex items-center gap-4">
                <div className="border border-black rounded-lg px-6 py-4 text-xl tracking-widest">
                  Y R 8 A H
                </div>

                <button className="border border-black rounded-full w-10 h-10 flex items-center justify-center">
                  ↻
                </button>
              </div>

              <input
                type="text"
                placeholder="กรอกรหัส 5 หลัก"
                className="border border-black rounded-lg px-4 py-2 w-48"
              />
            </div>
          </div>

        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 pt-6">
          <button className="border border-black rounded-xl px-6 py-2 hover:bg-gray-100">
            ล็อกอิน
          </button>
          <button className="border border-black rounded-xl px-6 py-2 hover:bg-gray-100">
            สมัครสมาชิก
          </button>
          <button className="border border-black rounded-xl px-6 py-2 hover:bg-gray-100">
            ลืมรหัสผ่าน
          </button>
        </div>

      </div>
    </div>
  );
}


export default function Login() {
  return (
    <div>
      <Header />
      <LoginCard />
      <Footer />
    </div>
  );
}
