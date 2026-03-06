import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Calendar, MapPin, Phone, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function BookVisit() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    serviceType: "",
    placeType: "",
    date: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.city ||
      !formData.serviceType ||
      !formData.placeType ||
      !formData.date
    ) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    // Simulate submission
    setIsSubmitted(true);
    toast.success("تم إرسال طلب المعاينة بنجاح!");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <section className="flex-1 flex items-center justify-center bg-[#F5F5F5]" dir="rtl">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="bg-[#F2DFBF] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-[#2B160D]" />
              </div>
              <h1 className="text-4xl font-bold text-[#2B160D] mb-4">
                تم استلام طلبك بنجاح!
              </h1>
              <p className="text-xl text-[#888888] mb-8 leading-relaxed">
                شكراً لك على اختيار عرفات ستون. سيتم التواصل معك خلال 24 ساعة لتأكيد
                موعد المعاينة.
              </p>
              <div className="bg-[#F5F5F5] rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-[#2B160D] mb-4">
                  تفاصيل طلبك:
                </h2>
                <div className="space-y-2 text-right">
                  <p className="text-[#888888]">
                    <strong className="text-[#333333]">الاسم:</strong>{" "}
                    {formData.fullName}
                  </p>
                  <p className="text-[#888888]">
                    <strong className="text-[#333333]">الهاتف:</strong>{" "}
                    {formData.phone}
                  </p>
                  <p className="text-[#888888]">
                    <strong className="text-[#333333]">المحافظة:</strong>{" "}
                    {formData.city}
                  </p>
                  <p className="text-[#888888]">
                    <strong className="text-[#333333]">نوع الخدمة:</strong>{" "}
                    {formData.serviceType}
                  </p>
                  <p className="text-[#888888]">
                    <strong className="text-[#333333]">التاريخ المقترح:</strong>{" "}
                    {formData.date}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-[#2B160D] text-[#2B160D] hover:bg-[#2B160D] hover:text-white px-8 py-3 rounded-lg transition-all"
              >
                حجز معاينة أخرى
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#F2DFBF] to-[#BFA78A] py-16" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#2B160D] mb-4">احجز معاينة موقع</h1>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            احجز معاينة مجانية لموقعك واحصل على استشارة مهنية من خبرائنا
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2B160D] mb-8 text-center">
            كيف تتم المعاينة؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#F2DFBF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#2B160D] text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-[#2B160D] mb-2">
                احجز موعدك
              </h3>
              <p className="text-[#888888]">
                املأ النموذج أدناه واختر الموعد المناسب لك
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#F2DFBF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#2B160D] text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-[#2B160D] mb-2">
                تأكيد الموعد
              </h3>
              <p className="text-[#888888]">
                سنتواصل معك خلال 24 ساعة لتأكيد الموعد
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#F2DFBF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#2B160D] text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-[#2B160D] mb-2">
                المعاينة والاستشارة
              </h3>
              <p className="text-[#888888]">
                يقوم خبراؤنا بزيارتك وتقديم استشارة شاملة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-[#F5F5F5]" dir="rtl">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-[#2B160D] mb-8">
              نموذج حجز المعاينة
            </h2>

            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-[#333333] mb-2 block">
                  الاسم بالكامل <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full"
                  dir="rtl"
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-[#333333] mb-2 block">
                  رقم الهاتف <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Phone className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] w-5 h-5" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pr-12"
                    dir="rtl"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <Label htmlFor="city" className="text-[#333333] mb-2 block">
                  المحافظة / المنطقة <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] w-5 h-5" />
                  <Input
                    id="city"
                    type="text"
                    placeholder="القاهرة"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full pr-12"
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <Label htmlFor="serviceType" className="text-[#333333] mb-2 block">
                  نوع الخدمة <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, serviceType: value })
                  }
                >
                  <SelectTrigger className="w-full" dir="rtl">
                    <SelectValue placeholder="اختر نوع الخدمة" />
                  </SelectTrigger>
                  <SelectContent dir="rtl">
                    <SelectItem value="جرانيت المطابخ">جرانيت المطابخ</SelectItem>
                    <SelectItem value="أسطح الكوارتز">أسطح الكوارتز</SelectItem>
                    <SelectItem value="أحواض رخام وجرانيت">
                      أحواض رخام وجرانيت
                    </SelectItem>
                    <SelectItem value="حلول حجرية مخصصة">
                      حلول حجرية مخصصة
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Place Type */}
              <div>
                <Label htmlFor="placeType" className="text-[#333333] mb-2 block">
                  نوع المكان <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.placeType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, placeType: value })
                  }
                >
                  <SelectTrigger className="w-full" dir="rtl">
                    <SelectValue placeholder="اختر نوع المكان" />
                  </SelectTrigger>
                  <SelectContent dir="rtl">
                    <SelectItem value="شقة">شقة</SelectItem>
                    <SelectItem value="فيلا">فيلا</SelectItem>
                    <SelectItem value="محل">محل</SelectItem>
                    <SelectItem value="شركة">شركة</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div>
                <Label htmlFor="date" className="text-[#333333] mb-2 block">
                  تاريخ مقترح للمعاينة <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] w-5 h-5" />
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full pr-12"
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <Label htmlFor="notes" className="text-[#333333] mb-2 block">
                  ملاحظات إضافية
                </Label>
                <Textarea
                  id="notes"
                  placeholder="أضف أي ملاحظات أو تفاصيل إضافية..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  rows={4}
                  className="w-full"
                  dir="rtl"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#2B160D] text-white hover:bg-[#1f0f08] py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                تأكيد طلب المعاينة
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
