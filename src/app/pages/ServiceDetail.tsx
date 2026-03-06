import { Link, useParams } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CheckCircle, Shield, Award, Clock } from "lucide-react";

export function ServiceDetail() {
  const { id } = useParams();

  const serviceDetails: Record<
    string,
    {
      title: string;
      subtitle: string;
      description: string;
      heroImage: string;
      features: { icon: JSX.Element; title: string; description: string }[];
      gallery: string[];
    }
  > = {
    "kitchen-granite": {
      title: "جرانيت المطابخ",
      subtitle: "أسطح جرانيت فاخرة تدوم لعقود",
      description:
        "نقدم أفضل حلول الجرانيت للمطابخ باستخدام أجود أنواع الجرانيت المستورد والمحلي. يتميز الجرانيت بمتانته العالية ومقاومته للحرارة والخدش، مما يجعله الخيار المثالي للمطابخ المستخدمة بكثافة. نوفر مجموعة واسعة من الألوان والأنماط التي تناسب جميع الأذواق، من ال��لاسيكي إلى العصري.",
      heroImage:
        "https://images.unsplash.com/photo-1610276099118-c929abaaa80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwa2l0Y2hlbiUyMGNvdW50ZXJ0b3AlMjBsdXh1cnl8ZW58MXx8fHwxNzcyODAxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "مقاومة عالية للحرارة",
          description: "يتحمل درجات حرارة عالية دون تلف أو تغير في اللون",
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "متانة طويلة المدى",
          description: "يدوم لعقود مع الحفاظ على جماله وقوته",
        },
        {
          icon: <CheckCircle className="w-6 h-6" />,
          title: "مظهر فاخر",
          description: "يضيف لمسة من الفخامة والأناقة لمطبخك",
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "سهولة التنظيف",
          description: "سطح أملس يسهل تنظيفه والحفاظ على بريقه",
        },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1761864418991-57ed4a059f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwaXNsYW5kJTIwZ3Jhbml0ZSUyMGRhcmt8ZW58MXx8fHwxNzcyODAxMTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1560185127-1902ccdc5094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwd2hpdGUlMjBncmFuaXRlfGVufDF8fHx8MTc3MjgwMTEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1608388408622-5e273437c845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwc2FtcGxlcyUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzcyODAxMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1704428381527-71b82d7fc7d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjB3aGl0ZXxlbnwxfHx8fDE3NzI4MDEyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    "quartz-surfaces": {
      title: "أسطح الكوارتز",
      subtitle: "تصاميم عصرية بجودة استثنائية",
      description:
        "الكوارتز هو الخيار الأمثل للمطابخ الحديثة، حيث يجمع بين جمال الحجر الطبيعي وقوة التصنيع المتطور. سطح الكوارتز غير مسامي بالكامل، مما يجعله مقاوماً للبقع والبكتيريا ولا يحتاج إلى صيانة دورية. نوفر تشكيلة واسعة من الألوان والأنماط العصرية.",
      heroImage:
        "https://images.unsplash.com/photo-1771795638652-01821921a461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFydHolMjBzdG9uZSUyMHN1cmZhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcyODAxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "غير مسامي",
          description: "لا يمتص السوائل مما يمنع نمو البكتيريا",
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "مقاوم للبقع",
          description: "يحافظ على لونه ولمعانه مهما كان الاستخدام",
        },
        {
          icon: <CheckCircle className="w-6 h-6" />,
          title: "تصاميم عصرية",
          description: "ألوان وأنماط تناسب كل التصاميم الحديثة",
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "صيانة سهلة",
          description: "لا يحتاج إلى معالجات أو صيانة دورية",
        },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1704428381527-71b82d7fc7d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjB3aGl0ZXxlbnwxfHx8fDE3NzI4MDEyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1560185127-1902ccdc5094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwd2hpdGUlMjBncmFuaXRlfGVufDF8fHx8MTc3MjgwMTEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1771795638652-01821921a461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFydHolMjBzdG9uZSUyMHN1cmZhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcyODAxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    "marble-sinks": {
      title: "أحواض رخام وجرانيت",
      subtitle: "فخامة لا مثيل لها",
      description:
        "أحواضنا المصنوعة من الرخام والجرانيت الطبيعي تضيف لمسة من الفخامة والأناقة لأي مساحة. كل حوض هو قطعة فنية فريدة بسبب النمط الطبيعي للحجر. نقدم تصاميم متنوعة من الكلاسيكية إلى العصرية، جميعها مصنوعة بدقة عالية وجودة استثنائية.",
      heroImage:
        "https://images.unsplash.com/photo-1756079664354-34944e001f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBiYXRocm9vbSUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyODAxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "تصاميم فاخرة",
          description: "كل قطعة فريدة بنمطها الطبيعي الخاص",
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "مواد طبيعية 100%",
          description: "رخام وجرانيت طبيعي بأعلى جودة",
        },
        {
          icon: <CheckCircle className="w-6 h-6" />,
          title: "مقاومة للرطوبة",
          description: "معالج خصيصاً لمقاومة الماء والرطوبة",
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "أشكال متعددة",
          description: "تصاميم متنوعة تناسب جميع المساحات",
        },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1756079664354-34944e001f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBiYXRocm9vbSUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyODAxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1610276099118-c929abaaa80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwa2l0Y2hlbiUyMGNvdW50ZXJ0b3AlMjBsdXh1cnl8ZW58MXx8fHwxNzcyODAxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    "custom-solutions": {
      title: "حلول حجرية مخصصة",
      subtitle: "تصاميم فريدة تعكس ذوقك الخاص",
      description:
        "نؤمن بأن كل مشروع فريد من نوعه. لذلك نقدم خدمة تصميم وتنفيذ حلول حجرية مخصصة تماماً حسب احتياجاتك. فريقنا يعمل معك من مرحلة التصميم الأولي وحتى التنفيذ النهائي لضمان الحصول على النتيجة التي تحلم بها. سواء كنت تبحث عن تصميم كلاسيكي أو عصري، نحن هنا لنحقق رؤيتك.",
      heroImage:
        "https://images.unsplash.com/photo-1555794812-7f4102b3773b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc3RvbmUlMjB0ZXh0dXJlJTIwYmVpZ2V8ZW58MXx8fHwxNzcyODAxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "تصميم حسب ��لطلب",
          description: "نصمم لك حلولاً تناسب احتياجاتك بالضبط",
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "استشارات مجانية",
          description: "نساعدك في اختيار الأفضل لمشروعك",
        },
        {
          icon: <CheckCircle className="w-6 h-6" />,
          title: "تنفيذ دقيق",
          description: "نلتزم بأعلى معايير الجودة في التنفيذ",
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "متابعة مستمرة",
          description: "نتابع معك كل مرحلة حتى التسليم",
        },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1647481837638-ebf6d2a060ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwaW5zdGFsbGF0aW9uJTIwd29ya2VyfGVufDF8fHx8MTc3MjgwMTIyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1608388408622-5e273437c845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwc2FtcGxlcyUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzcyODAxMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1704428381527-71b82d7fc7d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjB3aGl0ZXxlbnwxfHx8fDE3NzI4MDEyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
  };

  const service = serviceDetails[id || "kitchen-granite"];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center" dir="rtl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#2B160D] mb-4">
              الخدمة غير موجودة
            </h1>
            <Link to="/services">
              <Button className="bg-[#2B160D] text-white hover:bg-[#1f0f08]">
                العودة إلى الخدمات
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px]" dir="rtl">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <h1 className="text-5xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-2xl text-[#F2DFBF]">{service.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[#888888] leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#F5F5F5]" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2B160D] mb-12 text-center">
            المميزات الرئيسية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="bg-[#F2DFBF] w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[#2B160D]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2B160D] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#888888] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2B160D] mb-12 text-center">
            معرض الأعمال
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.gallery.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${service.title} - صورة ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2B160D]" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            مهتم بهذه الخدمة؟
          </h2>
          <p className="text-xl text-[#BFA78A] mb-8">
            احجز معاينة مجانية الآن واحصل على استشارة من خبرائنا
          </p>
          <Link to="/book-visit">
            <Button className="bg-[#F2DFBF] text-[#2B160D] hover:bg-white px-10 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all font-bold">
              احجز معاينة مجانية
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
