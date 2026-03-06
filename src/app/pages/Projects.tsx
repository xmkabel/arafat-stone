import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

type ProjectCategory = "all" | "kitchen" | "bathroom" | "quartz" | "custom";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "مطبخ فاخر بجرانيت أسود",
      category: "kitchen",
      image:
        "https://images.unsplash.com/photo-1761864418991-57ed4a059f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwaXNsYW5kJTIwZ3Jhbml0ZSUyMGRhcmt8ZW58MXx8fHwxNzcyODAxMTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "مطبخ عصري أبيض",
      category: "kitchen",
      image:
        "https://images.unsplash.com/photo-1560185127-1902ccdc5094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwd2hpdGUlMjBncmFuaXRlfGVufDF8fHx8MTc3MjgwMTEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "حوض رخام فاخر",
      category: "bathroom",
      image:
        "https://images.unsplash.com/photo-1756079664354-34944e001f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBiYXRocm9vbSUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyODAxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      title: "أسطح كوارتز عصرية",
      category: "quartz",
      image:
        "https://images.unsplash.com/photo-1771795638652-01821921a461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFydHolMjBzdG9uZSUyMHN1cmZhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcyODAxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 5,
      title: "مطبخ فاخر متكامل",
      category: "kitchen",
      image:
        "https://plus.unsplash.com/premium_photo-1680127402190-4ec85e040290?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "حمام رخامي أنيق",
      category: "bathroom",
      image:
        "https://images.unsplash.com/photo-1765766600805-e75c44124d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHZhbml0eSUyMG1hcmJsZXxlbnwxfHx8fDE3NzI4MDEzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 7,
      title: "مطبخ تجاري احترافي",
      category: "kitchen",
      image:
        "https://images.unsplash.com/photo-1628977614615-f5f4068361ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGdyYW5pdGV8ZW58MXx8fHwxNzcyODAxMzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 8,
      title: "تركيب كوارتز احترافي",
      category: "quartz",
      image:
        "https://images.unsplash.com/photo-1745878134951-65bde84348f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFydHolMjBjb3VudGVydG9wJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3MjgwMTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 9,
      title: "تصميم مخصص فريد",
      category: "custom",
      image:
        "https://images.unsplash.com/photo-1657524497227-66242be7ee6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3MjgwMTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 10,
      title: "مطبخ أبيض أنيق",
      category: "kitchen",
      image:
        "https://images.unsplash.com/photo-1704428381527-71b82d7fc7d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjB3aGl0ZXxlbnwxfHx8fDE3NzI4MDEyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 11,
      title: "عينات جرانيت متنوعة",
      category: "custom",
      image:
        "https://images.unsplash.com/photo-1608388408622-5e273437c845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwc2FtcGxlcyUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzcyODAxMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 12,
      title: "مطبخ جرانيت كلاسيكي",
      category: "kitchen",
      image:
        "https://images.unsplash.com/photo-1610276099118-c929abaaa80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwa2l0Y2hlbiUyMGNvdW50ZXJ0b3AlMjBsdXh1cnl8ZW58MXx8fHwxNzcyODAxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const categories = [
    { id: "all" as ProjectCategory, label: "الكل" },
    { id: "kitchen" as ProjectCategory, label: "مطابخ" },
    { id: "bathroom" as ProjectCategory, label: "أحواض" },
    { id: "quartz" as ProjectCategory, label: "كوارتز" },
    { id: "custom" as ProjectCategory, label: "حلول خاصة" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#F2DFBF] to-[#BFA78A] py-16" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#2B160D] mb-4">معرض أعمالنا</h1>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            استعرض مجموعة من أفضل مشاريعنا المنفذة بأعلى مستويات الجودة
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 justify-center flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeFilter === category.id
                    ? "bg-[#2B160D] text-white shadow-md"
                    : "bg-[#F5F5F5] text-[#333333] hover:bg-[#BFA78A] hover:text-white"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#F5F5F5]" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <span className="inline-block bg-[#F2DFBF] text-[#2B160D] px-3 py-1 rounded-full text-sm">
                        {categories.find((c) => c.id === project.category)?.label}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#2B160D] mb-2">
                    {project.title}
                  </h3>
                  <span className="inline-block bg-[#F5F5F5] text-[#888888] px-3 py-1 rounded-full text-sm">
                    {categories.find((c) => c.id === project.category)?.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-[#888888]">لا توجد مشاريع في هذه الفئة</p>
            </div>
          )}
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-12 bg-white" dir="rtl">
        <div className="text-center">
          <p className="text-[#888888] mb-6">عرض {filteredProjects.length} مشروع</p>
          <Button
            variant="outline"
            className="border-[#2B160D] text-[#2B160D] hover:bg-[#2B160D] hover:text-white px-8 py-3 rounded-lg transition-all"
          >
            عرض المزيد من الأعمال
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2B160D]" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            هل ترغب في مشروع مماثل؟
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
