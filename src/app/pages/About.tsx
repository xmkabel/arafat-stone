import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Users, CheckCircle, Target } from "lucide-react";

export function About() {
  const stats = [
    { number: "15+", label: "سنوات الخبرة" },
    { number: "500+", label: "مشروع منجز" },
    { number: "450+", label: "عميل راضٍ" },
    { number: "100%", label: "التزام بالجودة" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#F2DFBF] to-[#BFA78A] py-16" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#2B160D] mb-4">من نحن</h1>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            تعرف على قصتنا ورؤيتنا في تقديم أفضل حلول الجرانيت والأحجار الطبيعية
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2B160D] mb-6">
                عرفات ستون - شريكك الموثوق
              </h2>
              <div className="space-y-4 text-lg text-[#888888] leading-relaxed">
                <p>
                  عرفات ستون شركة متخصصة في تنفيذ أسطح الجرانيت والأحجار الطبيعية
                  للمطابخ والحمامات، مع التركيز على الجودة العالية والدقة في التنفيذ.
                </p>
                <p>
                  منذ تأسيسنا، ونحن نسعى لتقديم أفضل الحلول الحجرية التي تجمع بين
                  الجمال والمتانة. نستخدم أجود أنواع الجرانيت والأحجار الطبيعية
                  المستوردة والمحلية، ونوظف فريق عمل محترف ومدرب على أعلى مستوى.
                </p>
                <p>
                  نفخر بثقة عملائنا ورضاهم عن خدماتنا، ونلتزم بتقديم أعمال تفوق
                  توقعاتهم في كل مرة.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://plus.unsplash.com/premium_photo-1663013634679-cbecce444aff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="فريق عرفات ستون"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2B160D]" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#F2DFBF] mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-[#BFA78A]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-[#F5F5F5] rounded-2xl p-8 shadow-md">
              <div className="bg-[#F2DFBF] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#2B160D]" />
              </div>
              <h3 className="text-3xl font-bold text-[#2B160D] mb-4">رؤيتنا</h3>
              <p className="text-lg text-[#888888] leading-relaxed">
                أن نكون الخيار الأول والأكثر ثقة في مجال الجرانيت والأحجار
                الطبيعية في المنطقة، من خلال تقديم منتجات وخدمات تتجاوز توقعات
                عملائنا وتحقق لهم أحلامهم في مساحات مثالية تدوم لعقود.
              </p>
            </div>

            <div className="bg-[#F5F5F5] rounded-2xl p-8 shadow-md">
              <div className="bg-[#F2DFBF] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-[#2B160D]" />
              </div>
              <h3 className="text-3xl font-bold text-[#2B160D] mb-4">رسالتنا</h3>
              <p className="text-lg text-[#888888] leading-relaxed">
                نلتزم بتقديم أفضل حلول الجرانيت والأحجار الطبيعية بجودة استثنائية
                وأسعار منافسة، مع الحفاظ على أعلى معايير الخدمة والاحترافية في كل
                مرحلة من مراحل العمل، من الاستشارة الأولى وحتى التسليم النهائي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F5F5F5]" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#2B160D] mb-12 text-center">
            قيمنا الأساسية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all">
              <div className="bg-[#F2DFBF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#2B160D]" />
              </div>
              <h3 className="text-xl font-bold text-[#2B160D] mb-3">الجودة</h3>
              <p className="text-[#888888] leading-relaxed">
                نلتزم بأعلى معايير الجودة في كل مشروع نقوم به، ونستخدم أفضل المواد
                والتقنيات المتاحة.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all">
              <div className="bg-[#F2DFBF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#2B160D]" />
              </div>
              <h3 className="text-xl font-bold text-[#2B160D] mb-3">الاحترافية</h3>
              <p className="text-[#888888] leading-relaxed">
                فريق عمل محترف ومدرب يتعامل مع كل مشروع باهتمام ودقة عالية لضمان
                أفضل النتائج.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all">
              <div className="bg-[#F2DFBF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#2B160D]" />
              </div>
              <h3 className="text-xl font-bold text-[#2B160D] mb-3">الالتزام</h3>
              <p className="text-[#888888] leading-relaxed">
                نلتزم بمواعيد التسليم وبتقديم أعمال تفوق توقعات عملائنا في كل مرة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2B160D]" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            هل ترغب في العمل معنا؟
          </h2>
          <p className="text-xl text-[#BFA78A] mb-8">
            نحن هنا لمساعدتك في تحويل أحلامك إلى واقع
          </p>
          <Link to="/book-visit">
            <Button className="bg-[#F2DFBF] text-[#2B160D] hover:bg-white px-10 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all font-bold">
              احجز استشارة مجانية
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
