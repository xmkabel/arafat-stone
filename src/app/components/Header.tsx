import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
             <img
    src="/logo-white.png"
    alt="Arafat Stone"
    className="w-21 h-21 object-contain"
  />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-[#2B160D] font-semibold"
                  : "text-[#333333] hover:text-[#2B160D]"
              }`}
            >
              الرئيسية
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${
                isActive("/services") || location.pathname.startsWith("/service")
                  ? "text-[#2B160D] font-semibold"
                  : "text-[#333333] hover:text-[#2B160D]"
              }`}
            >
              خدماتنا
            </Link>
            <Link
              to="/projects"
              className={`transition-colors ${
                isActive("/projects")
                  ? "text-[#2B160D] font-semibold"
                  : "text-[#333333] hover:text-[#2B160D]"
              }`}
            >
              معرض الأعمال
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "text-[#2B160D] font-semibold"
                  : "text-[#333333] hover:text-[#2B160D]"
              }`}
            >
              من نحن
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive("/contact")
                  ? "text-[#2B160D] font-semibold"
                  : "text-[#333333] hover:text-[#2B160D]"
              }`}
            >
              تواصل معنا
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link to="/book-visit" className="hidden md:block">
              <Button className="bg-[#2B160D] text-white hover:bg-[#1f0f08] rounded-lg px-6 py-2 transition-all shadow-md hover:shadow-lg">
                احجز معاينة موقع
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#2B160D]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#F5F5F5] py-4">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`py-2 px-4 rounded-lg transition-colors ${
                  isActive("/")
                    ? "bg-[#F2DFBF] text-[#2B160D] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5]"
                }`}
              >
                الرئيسية
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`py-2 px-4 rounded-lg transition-colors ${
                  isActive("/services") || location.pathname.startsWith("/service")
                    ? "bg-[#F2DFBF] text-[#2B160D] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5]"
                }`}
              >
                خدماتنا
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
                className={`py-2 px-4 rounded-lg transition-colors ${
                  isActive("/projects")
                    ? "bg-[#F2DFBF] text-[#2B160D] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5]"
                }`}
              >
                معرض الأعمال
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`py-2 px-4 rounded-lg transition-colors ${
                  isActive("/about")
                    ? "bg-[#F2DFBF] text-[#2B160D] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5]"
                }`}
              >
                من نحن
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`py-2 px-4 rounded-lg transition-colors ${
                  isActive("/contact")
                    ? "bg-[#F2DFBF] text-[#2B160D] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5]"
                }`}
              >
                تواصل معنا
              </Link>
              <Link to="/book-visit" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#2B160D] text-white hover:bg-[#1f0f08] rounded-lg px-6 py-3 transition-all">
                  احجز معاينة موقع
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}