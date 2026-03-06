import { Outlet, Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Calendar,
  Wrench,
  FolderOpen,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "../../components/ui/button";

export function AdminLayout() {
  const location = useLocation();

  const menuItems = [
    {
      path: "/admin",
      label: "لوحة التحكم",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      path: "/admin/visits",
      label: "الحجوزات",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      path: "/admin/services",
      label: "الخدمات",
      icon: <Wrench className="w-5 h-5" />,
    },
    {
      path: "/admin/projects",
      label: "المشاريع",
      icon: <FolderOpen className="w-5 h-5" />,
    },
    {
      path: "/admin/messages",
      label: "الرسائل",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      path: "/admin/settings",
      label: "الإعدادات",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  const isActive = (path: string) => {
    if (path === "/admin") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex" dir="rtl">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2B160D] text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#BFA78A]/20">
          <img
    src="/logo.png"
    alt="Arafat Stone"
    className="w-18 h-21 object-contain"
  />
          <p className="text-[#BFA78A] text-sm mt-2">لوحة التحكم</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-right gap-3 ${
                      isActive(item.path)
                        ? "bg-[#F2DFBF] text-[#2B160D] hover:bg-[#F2DFBF] hover:text-[#2B160D]"
                        : "text-[#BFA78A] hover:bg-[#BFA78A]/10 hover:text-white"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-[#BFA78A]/20">
          <Link to="/admin/login">
            <Button
              variant="ghost"
              className="w-full justify-start text-right gap-3 text-[#BFA78A] hover:bg-[#BFA78A]/10 hover:text-white"
            >
              <LogOut className="w-5 h-5" />
              تسجيل الخروج
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#2B160D]">
              {menuItems.find((item) => isActive(item.path))?.label || "لوحة التحكم"}
            </h1>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-[#333333]">مرحباً، المدير</p>
                <p className="text-xs text-[#888888]">admin@arafatstone.com</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#F2DFBF] flex items-center justify-center">
                <span className="text-[#2B160D] font-bold">م</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
