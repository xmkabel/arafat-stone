import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2B160D] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center text-center gap-4">
  <img
    src="/logo.png"
    alt="Arafat Stone"
    className="w-24 h-24 object-contain"
  />

  <p className="text-[#BFA78A] leading-relaxed max-w-md">
    متخصصون في تنفيذ أسطح الجرانيت والأحجار الطبيعية
    للمطابخ والحمامات بأعلى جودة ودقة في التنفيذ
  </p>
</div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#BFA78A] hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#BFA78A] hover:text-white transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#BFA78A] hover:text-white transition-colors">
                  معرض الأعمال
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#BFA78A] hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#BFA78A] hover:text-white transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
<div>
  <h3 className="font-bold text-lg mb-4">خدماتنا</h3>
  <ul className="space-y-2 text-[#BFA78A]">
    <li>
      <a href="/service/kitchen-granite" className="hover:text-white transition">
        جرانيت المطابخ
      </a>
    </li>
    <li>
      <a href="/service/quartz-surfaces" className="hover:text-white transition">
        أسطح الكوارتز
      </a>
    </li>
    <li>
      <a href="/service/marble-sinks" className="hover:text-white transition">
        أحواض رخام وجرانيت
      </a>
    </li>
    <li>
      <a href="/service/custom-solutions" className="hover:text-white transition">
        حلول حجرية مخصصة
      </a>
    </li>
  </ul>
</div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[#BFA78A]">
                  <Phone size={18} />
                  <span dir="ltr">+20 10 1176 0019</span>
                </li>
                <li className="flex items-center gap-2 text-[#BFA78A]">
                  <Mail size={18} />
                  <span>arafatstone786@gmail.com</span>
                </li>
                <li className="flex items-center gap-2 text-[#BFA78A]">
                  <MapPin size={18} />
                  <span>القاهرة، مصر</span>
                </li>
              </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/arafatstone/"
                className="bg-[#BFA78A] hover:bg-white text-[#2B160D] p-2 rounded-full transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/arafaatstone"
                className="bg-[#BFA78A] hover:bg-white text-[#2B160D] p-2 rounded-full transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@arafaatstone8724"
                className="bg-[#BFA78A] hover:bg-white text-[#2B160D] p-2 rounded-full transition-all"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#BFA78A]/20 mt-8 pt-8 text-center text-[#BFA78A]">
          <p>&copy; {new Date().getFullYear()} عرفات ستون. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
