import { Card } from "../../components/ui/card";
import { Calendar, CheckCircle, Clock, FolderOpen } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export function AdminDashboard() {
  const stats = [
    {
      title: "إجمالي الحجوزات",
      value: "156",
      icon: <Calendar className="w-8 h-8" />,
      color: "bg-blue-500",
    },
    {
      title: "حجوزات اليوم",
      value: "12",
      icon: <Clock className="w-8 h-8" />,
      color: "bg-yellow-500",
    },
    {
      title: "الحجوزات المعلقة",
      value: "24",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "bg-red-500",
    },
    {
      title: "المشاريع المنشورة",
      value: "48",
      icon: <FolderOpen className="w-8 h-8" />,
      color: "bg-green-500",
    },
  ];

  const monthlyBookings = [
    { month: "يناير", bookings: 35 },
    { month: "فبراير", bookings: 42 },
    { month: "مارس", bookings: 38 },
    { month: "أبريل", bookings: 45 },
    { month: "مايو", bookings: 52 },
    { month: "يونيو", bookings: 48 },
  ];

  const serviceDistribution = [
    { name: "جرانيت المطابخ", value: 45, color: "#2B160D" },
    { name: "أسطح الكوارتز", value: 25, color: "#BFA78A" },
    { name: "أحواض رخام", value: 20, color: "#F2DFBF" },
    { name: "حلول مخصصة", value: 10, color: "#888888" },
  ];

  const recentBookings = [
    {
      id: 1,
      name: "أحمد محمد",
      service: "جرانيت المطابخ",
      date: "2026-03-10",
      status: "جديد",
    },
    {
      id: 2,
      name: "فاطمة علي",
      service: "أسطح الكوارتز",
      date: "2026-03-11",
      status: "مؤكد",
    },
    {
      id: 3,
      name: "محمود حسن",
      service: "حلول مخصصة",
      date: "2026-03-12",
      status: "جديد",
    },
    {
      id: 4,
      name: "سارة إبراهيم",
      service: "أحواض رخام",
      date: "2026-03-13",
      status: "معلق",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "جديد":
        return "bg-blue-100 text-blue-800";
      case "مؤكد":
        return "bg-green-100 text-green-800";
      case "معلق":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8" dir="rtl">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#888888] mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-[#2B160D]">{stat.value}</p>
              </div>
              <div className={`${stat.color} text-white p-4 rounded-xl`}>
                {stat.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Bookings Chart */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-[#2B160D] mb-6">
            الحجوزات الشهرية
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyBookings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#2B160D" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Service Distribution */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-[#2B160D] mb-6">
            أكثر الخدمات طلباً
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={serviceDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {serviceDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Bookings */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-[#2B160D] mb-6">أحدث الحجوزات</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#F5F5F5]">
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  اسم العميل
                </th>
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  الخدمة
                </th>
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  التاريخ
                </th>
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  الحالة
                </th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="border-b border-[#F5F5F5]">
                  <td className="py-3 px-4 text-[#333333]">{booking.name}</td>
                  <td className="py-3 px-4 text-[#888888]">{booking.service}</td>
                  <td className="py-3 px-4 text-[#888888]">{booking.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm ${getStatusColor(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
