import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { toast } from "sonner";

export function AdminLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple mock authentication
    if (credentials.email === "admin@arafatstone.com" && credentials.password === "admin123") {
      toast.success("تم تسجيل الدخول بنجاح");
      navigate("/admin");
    } else {
      toast.error("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2DFBF] to-[#BFA78A] flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="bg-[#F2DFBF] inline-block px-6 py-3 rounded-lg mb-4">
            <span className="text-[#2B160D] text-2xl font-bold">عرفات ستون</span>
          </div>
          <h1 className="text-2xl font-bold text-[#2B160D]">لوحة التحكم</h1>
          <p className="text-[#888888] mt-2">قم بتسجيل الدخول للمتابعة</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-[#333333] mb-2 block">
              البريد الإلكتروني
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@arafatstone.com"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              className="w-full"
              dir="ltr"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-[#333333] mb-2 block">
              كلمة المرور
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              className="w-full"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#2B160D] text-white hover:bg-[#1f0f08] py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            تسجيل الدخول
          </Button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-[#F5F5F5] rounded-lg">
          <p className="text-sm text-[#888888] text-center mb-2">
            معلومات تجريبية:
          </p>
          <p className="text-xs text-[#888888] text-center">
            البريد: admin@arafatstone.com
            <br />
            كلمة المرور: admin123
          </p>
        </div>
      </div>
    </div>
  );
}
