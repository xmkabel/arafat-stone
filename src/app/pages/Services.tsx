import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      id: "kitchen-granite",
      title: "جرانيت المطابخ",
      description:
        "أسطح جرانيت فاخرة للمطابخ بأعلى جودة ومتانة استثنائية. نقدم مجموعة واسعة من الألوان والأنماط التي تناسب جميع الأذواق والتصاميم. الجرانيت مقاوم للحرارة والخدش ويدوم لعقود.",
      image: "https://images.unsplash.com/photo-1610276099118-c929abaaa80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwa2l0Y2hlbiUyMGNvdW50ZXJ0b3AlMjBsdXh1cnl8ZW58MXx8fHwxNzcyODAxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["مقاومة عالية للحرارة", "متانة استثنائية", "ألوان متنوعة", "سهولة التنظيف"],
    },
    {
      id: "quartz-surfaces",
      title: "أسطح الكوارتز",
      description:
        "حلول كوارتز عصرية بتصاميم متنوعة وألوان مميزة. الكوارتز هو خيار مثالي للمطابخ الحديثة، يجمع بين الجمال والمتانة. غير مسامي مما يجعله مقاوم للبقع والبكتيريا.",
      image: "https://images.unsplash.com/photo-1771795638652-01821921a461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFydHolMjBzdG9uZSUyMHN1cmZhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcyODAxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["غير مسامي", "مقاوم للبقع", "تصاميم عصرية", "صيانة سهلة"],
    },
    {
      id: "marble-sinks",
      title: "أحواض رخام وجرانيت",
      description:
        "أحواض فاخرة من الرخام والجرانيت بتصاميم عصرية. نقدم تشكيلة واسعة من الأحواض المصنوعة من أجود أنواع الرخام والجرانيت، مصممة لتضيف لمسة من الفخامة والأناقة لمطبخك أو حمامك.",
      image: "https://images.unsplash.com/photo-1756079664354-34944e001f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBiYXRocm9vbSUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyODAxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["تصاميم فاخرة", "مواد طبيعية 100%", "مقاومة للرطوبة", "أشكال متعددة"],
    },
    {
      id: "custom-solutions",
      title: "حلول حجرية مخصصة",
      description:
        "تصاميم مخصصة تناسب احتياجاتك وأذواقك الخاصة. نعمل معك خطوة بخطوة لتصميم وتنفيذ حلول حجرية فريدة تعكس ذوقك الشخصي وتلبي متطلباتك الخاصة. من التصميم إلى التنفيذ، نحن معك في كل مرحلة.",
      image: "https://images.unsplash.com/photo-1555794812-7f4102b3773b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc3RvbmUlMjB0ZXh0dXJlJTIwYmVpZ2V8ZW58MXx8fHwxNzcyODAxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["تصميم حسب الطلب", "استشارات مجانية", "تنفيذ دقيق", "متابعة مستمرة"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#F2DFBF] to-[#BFA78A] py-16" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#2B160D] mb-4">خدماتنا</h1>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            نقدم حلولاً متكاملة من الجرانيت والأحجار الطبيعية بأعلى جودة
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl font-bold text-[#2B160D] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-[#888888] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#2B160D] mb-3">المميزات:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[#888888]">
                          <div className="w-2 h-2 bg-[#2B160D] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Link to={`/service/${service.id}`}>
                      <Button className="bg-[#2B160D] text-white hover:bg-[#1f0f08] px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
                        التفاصيل الكاملة
                      </Button>
                    </Link>
                    <Link to="/book-visit">
                      <Button
                        variant="outline"
                        className="border-[#2B160D] text-[#2B160D] hover:bg-[#2B160D] hover:text-white px-6 py-2 rounded-lg transition-all"
                      >
                        احجز معاينة لهذه الخدمة
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F5F5F5]" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2B160D] mb-4">
            هل لديك استفسار عن خدماتنا؟
          </h2>
          <p className="text-lg text-[#888888] mb-6">
            تواصل معنا الآن وسنكون سعداء بمساعدتك
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[#2B160D] text-white hover:bg-[#1f0f08] px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
                تواصل معنا
              </Button>
            </Link>
            <Link to="/book-visit">
              <Button
                variant="outline"
                className="border-[#2B160D] text-[#2B160D] hover:bg-[#2B160D] hover:text-white px-8 py-3 rounded-lg transition-all"
              >
                احجز معاينة مجانية
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
