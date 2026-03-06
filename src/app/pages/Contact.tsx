import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("الرجاء ملء جميع الحقول");
      return;
    }

    // Simulate submission
    toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً");
    setFormData({ name: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "الهاتف",
      value: "+20 10 11760019",
      link: "tel:+201011760019",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "واتساب",
      value: "+20 10 34500414",
      link: "https://wa.me/201034500414",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "البريد الإلكتروني",
      value: "arafatstone786@gmail.com",
      link: "mailto:arafatstone786@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "العنوان",
      value: "القاهرة، مصر",
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "ساعات العمل",
      value: "السبت - الخميس: 9 صباحاً - 6 مساءً",
      link: null,
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: "فيسبوك",
      value: "ArafatStone",
      link: "https://www.facebook.com/arafatstone/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#F2DFBF] to-[#BFA78A] py-16" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#2B160D] mb-4">تواصل معنا</h1>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            نحن هنا للإجابة على أسئلتك ومساعدتك في اختيار الحل الأمثل
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#F2DFBF] w-12 h-12 rounded-full flex items-center justify-center text-[#2B160D] flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#2B160D] mb-1">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a dir="ltr"
                        href={info.link}
                        className="text-[#888888] hover:text-[#2B160D] transition-colors"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#888888]">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-[#F5F5F5]" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#2B160D] mb-6">
                أرسل لنا رسالة
              </h2>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-[#333333] mb-2 block">
                      الاسم <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="أدخل اسمك"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
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
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="01XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full"
                      dir="rtl"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-[#333333] mb-2 block">
                      الرسالة <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="اكتب رسالتك هنا..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      className="w-full"
                      dir="rtl"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#2B160D] text-white hover:bg-[#1f0f08] py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    إرسال الرسالة
                  </Button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-[#2B160D] mb-6">موقعنا</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[550px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.7528255887532!2d31.3168194842092!3d29.986147910371134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839daaaaaaaab%3A0x937e300d7321b6b9!2sArafat%20Stone%20For%20Marble%20%26%20Granite!5e1!3m2!1sen!2seg!4v1772808664137!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقعنا على الخريطة"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2B160D] mb-6">
            تفضل التواصل المباشر؟
          </h2>
          <p className="text-lg text-[#888888] mb-8">
            يمكنك التواصل معنا مباشرة عبر الواتساب أو الهاتف
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/201034500414"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all">
                <MessageCircle className="w-5 h-5 ml-2" />
                تواصل عبر واتساب
              </Button>
            </a>
            <a href="tel:+201011760019">
              <Button
                variant="outline"
                className="border-2 border-[#2B160D] text-[#2B160D] hover:bg-[#2B160D] hover:text-white px-8 py-6 text-lg rounded-lg transition-all"
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصل بنا الآن
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
