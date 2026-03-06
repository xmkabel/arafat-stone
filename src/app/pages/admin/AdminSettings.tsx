import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { toast } from "sonner";

export function AdminSettings() {
  const [companyInfo, setCompanyInfo] = useState({
    name: "عرفات ستون",
    email: "info@arafatstone.com",
    phone: "+20 123 456 7890",
    whatsapp: "+20 123 456 7890",
    address: "القاهرة، مصر",
    facebook: "https://facebook.com/arafatstone",
    instagram: "https://instagram.com/arafatstone",
  });

  const [workingHours, setWorkingHours] = useState({
    workingDays: "السبت - الخميس",
    workingTime: "9 صباحاً - 6 مساءً",
    closedDays: "الجمعة",
  });

  const [aboutText, setAboutText] = useState(
    "عرفات ستون شركة متخصصة في تنفيذ أسطح الجرانيت والأحجار الطبيعية للمطابخ والحمامات، مع التركيز على الجودة العالية والدقة في التنفيذ."
  );

  const handleSaveCompanyInfo = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم حفظ معلومات الشركة بنجاح");
  };

  const handleSaveWorkingHours = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم حفظ مواعيد العمل بنجاح");
  };

  const handleSaveAbout = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم حفظ نص 'من نحن' بنجاح");
  };

  return (
    <div className="space-y-6" dir="rtl">
      {/* Company Info */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-[#2B160D] mb-6">معلومات الشركة</h3>
        <form onSubmit={handleSaveCompanyInfo} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="companyName">اسم الشركة</Label>
              <Input
                id="companyName"
                value={companyInfo.name}
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, name: e.target.value })
                }
                dir="rtl"
              />
            </div>
            <div>
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                value={companyInfo.email}
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, email: e.target.value })
                }
                dir="ltr"
              />
            </div>
            <div>
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input
                id="phone"
                value={companyInfo.phone}
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, phone: e.target.value })
                }
                dir="ltr"
              />
            </div>
            <div>
              <Label htmlFor="whatsapp">واتساب</Label>
              <Input
                id="whatsapp"
                value={companyInfo.whatsapp}
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, whatsapp: e.target.value })
                }
                dir="ltr"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">العنوان</Label>
              <Input
                id="address"
                value={companyInfo.address}
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, address: e.target.value })
                }
                dir="rtl"
              />
            </div>
            <div>
              <Label htmlFor="facebook">رابط فيسبوك</Label>
              <Input
                id="facebook"
                value={companyInfo.facebook}
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, facebook: e.target.value })
                }
                dir="ltr"
              />
            </div>
            <div>
              <Label htmlFor="instagram">رابط إنستغرام</Label>
              <Input
                id="instagram"
                value={companyInfo.instagram}
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, instagram: e.target.value })
                }
                dir="ltr"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="bg-[#2B160D] text-white hover:bg-[#1f0f08]"
          >
            حفظ التغييرات
          </Button>
        </form>
      </Card>

      {/* Working Hours */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-[#2B160D] mb-6">مواعيد العمل</h3>
        <form onSubmit={handleSaveWorkingHours} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="workingDays">أيام العمل</Label>
              <Input
                id="workingDays"
                value={workingHours.workingDays}
                onChange={(e) =>
                  setWorkingHours({ ...workingHours, workingDays: e.target.value })
                }
                dir="rtl"
              />
            </div>
            <div>
              <Label htmlFor="workingTime">ساعات العمل</Label>
              <Input
                id="workingTime"
                value={workingHours.workingTime}
                onChange={(e) =>
                  setWorkingHours({ ...workingHours, workingTime: e.target.value })
                }
                dir="rtl"
              />
            </div>
            <div>
              <Label htmlFor="closedDays">أيام الإغلاق</Label>
              <Input
                id="closedDays"
                value={workingHours.closedDays}
                onChange={(e) =>
                  setWorkingHours({ ...workingHours, closedDays: e.target.value })
                }
                dir="rtl"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="bg-[#2B160D] text-white hover:bg-[#1f0f08]"
          >
            حفظ التغييرات
          </Button>
        </form>
      </Card>

      {/* About Text */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-[#2B160D] mb-6">نص "من نحن"</h3>
        <form onSubmit={handleSaveAbout} className="space-y-4">
          <div>
            <Label htmlFor="aboutText">النص التعريفي</Label>
            <Textarea
              id="aboutText"
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              rows={6}
              dir="rtl"
            />
          </div>
          <Button
            type="submit"
            className="bg-[#2B160D] text-white hover:bg-[#1f0f08]"
          >
            حفظ التغييرات
          </Button>
        </form>
      </Card>

      {/* SEO Settings */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-[#2B160D] mb-6">
          إعدادات تحسين محركات البحث (SEO)
        </h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="seoTitle">عنوان الموقع (Title)</Label>
            <Input
              id="seoTitle"
              defaultValue="عرفات ستون - جرانيت وأحجار طبيعية للمطابخ"
              dir="rtl"
            />
          </div>
          <div>
            <Label htmlFor="seoDescription">وصف الموقع (Meta Description)</Label>
            <Textarea
              id="seoDescription"
              defaultValue="عرفات ستون متخصصون في تنفيذ أسطح الجرانيت والأحجار الطبيعية للمطابخ والحمامات بأعلى جودة ودقة في التنفيذ."
              rows={3}
              dir="rtl"
            />
          </div>
          <div>
            <Label htmlFor="seoKeywords">الكلمات المفتاحية</Label>
            <Input
              id="seoKeywords"
              defaultValue="جرانيت, مطابخ, أحجار طبيعية, كوارتز, رخام"
              dir="rtl"
            />
          </div>
          <Button className="bg-[#2B160D] text-white hover:bg-[#1f0f08]">
            حفظ إعدادات SEO
          </Button>
        </div>
      </Card>

      {/* Blocked Dates */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-[#2B160D] mb-6">
          التواريخ المحظورة للمعاينة
        </h3>
        <p className="text-[#888888] mb-4">
          أضف التواريخ التي لا تريد استقبال حجوزات معاينة فيها (الإجازات، العطلات،
          إلخ)
        </p>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input type="date" className="flex-1" />
            <Button className="bg-[#2B160D] text-white hover:bg-[#1f0f08]">
              إضافة
            </Button>
          </div>
          <div className="bg-[#F5F5F5] rounded-lg p-4">
            <p className="text-sm text-[#888888]">
              لا توجد تواريخ محظورة حالياً
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
