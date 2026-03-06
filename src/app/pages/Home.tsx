import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

export function Home() {
  const services = [
    {
      id: "kitchen-granite",
      title: "جرانيت المطابخ",
      description: "أسطح جرانيت فاخرة للمطابخ بأعلى جودة ومتانة استثنائية",
      image: "https://images.unsplash.com/photo-1610276099118-c929abaaa80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwa2l0Y2hlbiUyMGNvdW50ZXJ0b3AlMjBsdXh1cnl8ZW58MXx8fHwxNzcyODAxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "quartz-surfaces",
      title: "أسطح الكوارتز",
      description: "حلول كوارتز عصرية بتصاميم متنوعة وألوان مميزة",
      image: "https://images.unsplash.com/photo-1771795638652-01821921a461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFydHolMjBzdG9uZSUyMHN1cmZhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcyODAxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "marble-sinks",
      title: "أحواض رخام وجرانيت",
      description: "أحواض فاخرة من الرخام والجرانيت بتصاميم عصرية",
      image: "https://images.unsplash.com/photo-1756079664354-34944e001f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBiYXRocm9vbSUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyODAxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "custom-solutions",
      title: "حلول حجرية مخصصة",
      description: "تصاميم مخصصة تناسب احتياجاتك وأذواقك الخاصة",
      image: "https://images.unsplash.com/photo-1555794812-7f4102b3773b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc3RvbmUlMjB0ZXh0dXJlJTIwYmVpZ2V8ZW58MXx8fHwxNzcyODAxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8 text-[#2B160D]" />,
      title: "جودة عالية",
      description: "نستخدم أجود أنواع الجرانيت والأحجار الطبيعية",
    },
    {
      icon: <Users className="w-8 h-8 text-[#2B160D]" />,
      title: "فريق محترف",
      description: "فريق عمل مدرب وذو خبرة عالية في التنفيذ",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#2B160D]" />,
      title: "التزام بالمواعيد",
      description: "نلتزم بمواعيد التسليم المحددة دون تأخير",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#2B160D]" />,
      title: "ضمان شامل",
      description: "ضمان على جميع أعمالنا لراحة بالك",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F2DFBF] to-[#BFA78A] py-20" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-[#2B160D] mb-6 leading-tight">
                جرانيت وأحجار طبيعية
                <br />
                لمطبخ أحلامك
              </h1>
              <p className="text-xl text-[#333333] mb-8 leading-relaxed">
                متخصصون في تنفيذ أسطح الجرانيت والأحجار الطبيعية للمطابخ والحمامات بأعلى
                جودة ودقة في التنفيذ
              </p>
              <div className="flex gap-4">
                <Link to="/book-visit">
                  <Button className="bg-[#2B160D] text-white hover:bg-[#1f0f08] px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                    احجز معاينة مجانية
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    variant="outline"
                    className="border-2 border-[#2B160D] text-[#2B160D] hover:bg-[#2B160D] hover:text-white px-8 py-6 text-lg rounded-lg transition-all"
                  >
                    تصفح خدماتنا
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761864418991-57ed4a059f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwaXNsYW5kJTIwZ3Jhbml0ZSUyMGRhcmt8ZW58MXx8fHwxNzcyODAxMTMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="مطبخ فاخر بجرانيت"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2B160D] mb-4">خدماتنا المميزة</h2>
            <p className="text-xl text-[#888888] max-w-2xl mx-auto">
              نقدم مجموعة متكاملة من الحلول الحجرية الفاخرة لتلبية جميع احتياجاتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2B160D] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#888888] mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to={`/service/${service.id}`}>
                    <Button
                      variant="outline"
                      className="w-full border-[#2B160D] text-[#2B160D] hover:bg-[#2B160D] hover:text-white transition-all"
                    >
                      اعرف المزيد
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F5F5F5]" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2B160D] mb-4">لماذا عرفات ستون؟</h2>
            <p className="text-xl text-[#888888] max-w-2xl mx-auto">
              نتميز بالجودة والاحترافية في كل مشروع نقوم به
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all"
              >
                <div className="bg-[#F2DFBF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2B160D] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#888888] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2B160D]" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            جاهز لتحويل مطبخك إلى تحفة فنية؟
          </h2>
          <p className="text-xl text-[#BFA78A] mb-8 leading-relaxed">
            احجز معاينة مجانية الآن ودع خبراءنا يساعدونك في اختيار الحل الأمثل
          </p>
          <Link to="/book-visit">
            <Button className="bg-[#F2DFBF] text-[#2B160D] hover:bg-white px-10 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all font-bold">
              احجز معاينة مجانية الآن
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
