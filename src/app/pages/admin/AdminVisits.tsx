import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Search, Eye, CheckCircle, XCircle, Calendar, Trash2 } from "lucide-react";
import { toast } from "sonner";

type VisitStatus = "جديد" | "مؤكد" | "مكتمل" | "ملغي";

interface Visit {
  id: number;
  customerName: string;
  phone: string;
  service: string;
  placeType: string;
  city: string;
  date: string;
  status: VisitStatus;
  notes: string;
}

export function AdminVisits() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedVisit, setSelectedVisit] = useState<Visit | null>(null);

  const [visits, setVisits] = useState<Visit[]>([
    {
      id: 1,
      customerName: "أحمد محمد علي",
      phone: "01234567890",
      service: "جرانيت المطابخ",
      placeType: "شقة",
      city: "القاهرة",
      date: "2026-03-10",
      status: "جديد",
      notes: "يفضل المعاينة صباحاً",
    },
    {
      id: 2,
      customerName: "فاطمة علي حسن",
      phone: "01234567891",
      service: "أسطح الكوارتز",
      placeType: "فيلا",
      city: "الجيزة",
      date: "2026-03-11",
      status: "مؤكد",
      notes: "مشروع كبير - مطبخين",
    },
    {
      id: 3,
      customerName: "محمود حسن إبراهيم",
      phone: "01234567892",
      service: "حلول حجرية مخصصة",
      placeType: "محل",
      city: "الإسكندرية",
      date: "2026-03-12",
      status: "جديد",
      notes: "",
    },
    {
      id: 4,
      customerName: "سارة إبراهيم محمد",
      phone: "01234567893",
      service: "أحواض رخام وجرانيت",
      placeType: "شقة",
      city: "القاهرة",
      date: "2026-03-13",
      status: "مكتمل",
      notes: "تم التنفيذ بنجاح",
    },
    {
      id: 5,
      customerName: "خالد عبد الله",
      phone: "01234567894",
      service: "جرانيت المطابخ",
      placeType: "شركة",
      city: "المنصورة",
      date: "2026-03-14",
      status: "ملغي",
      notes: "العميل أجل المشروع",
    },
  ]);

  const filteredVisits = visits.filter((visit) => {
    const matchesSearch =
      visit.customerName.includes(searchTerm) ||
      visit.phone.includes(searchTerm) ||
      visit.service.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || visit.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateVisitStatus = (id: number, newStatus: VisitStatus) => {
    setVisits((prev) =>
      prev.map((visit) => (visit.id === id ? { ...visit, status: newStatus } : visit))
    );
    toast.success(`تم تحديث حالة الحجز إلى "${newStatus}"`);
  };

  const deleteVisit = (id: number) => {
    setVisits((prev) => prev.filter((visit) => visit.id !== id));
    toast.success("تم حذف الحجز بنجاح");
  };

  const getStatusColor = (status: VisitStatus) => {
    switch (status) {
      case "جديد":
        return "bg-blue-100 text-blue-800";
      case "مؤكد":
        return "bg-green-100 text-green-800";
      case "مكتمل":
        return "bg-gray-100 text-gray-800";
      case "ملغي":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6" dir="rtl">
      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] w-5 h-5" />
            <Input
              placeholder="ابحث باسم العميل، الهاتف، أو الخدمة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-12"
              dir="rtl"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48" dir="rtl">
              <SelectValue placeholder="تصفية حسب الحالة" />
            </SelectTrigger>
            <SelectContent dir="rtl">
              <SelectItem value="all">جميع الحالات</SelectItem>
              <SelectItem value="جديد">جديد</SelectItem>
              <SelectItem value="مؤكد">مؤكد</SelectItem>
              <SelectItem value="مكتمل">مكتمل</SelectItem>
              <SelectItem value="ملغي">ملغي</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <p className="text-sm text-[#888888] mb-1">إجمالي الحجوزات</p>
          <p className="text-2xl font-bold text-[#2B160D]">{visits.length}</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-sm text-[#888888] mb-1">جديد</p>
          <p className="text-2xl font-bold text-blue-600">
            {visits.filter((v) => v.status === "جديد").length}
          </p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-sm text-[#888888] mb-1">مؤكد</p>
          <p className="text-2xl font-bold text-green-600">
            {visits.filter((v) => v.status === "مؤكد").length}
          </p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-sm text-[#888888] mb-1">مكتمل</p>
          <p className="text-2xl font-bold text-gray-600">
            {visits.filter((v) => v.status === "مكتمل").length}
          </p>
        </Card>
      </div>

      {/* Visits Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#F5F5F5]">
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  اسم العميل
                </th>
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  الهاتف
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
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredVisits.map((visit) => (
                <tr key={visit.id} className="border-b border-[#F5F5F5] hover:bg-[#F5F5F5]/50">
                  <td className="py-3 px-4 text-[#333333] font-medium">
                    {visit.customerName}
                  </td>
                  <td className="py-3 px-4 text-[#888888]">{visit.phone}</td>
                  <td className="py-3 px-4 text-[#888888]">{visit.service}</td>
                  <td className="py-3 px-4 text-[#888888]">{visit.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm ${getStatusColor(
                        visit.status
                      )}`}
                    >
                      {visit.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      {/* View Details */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setSelectedVisit(visit)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent dir="rtl">
                          <DialogHeader>
                            <DialogTitle>تفاصيل الحجز</DialogTitle>
                          </DialogHeader>
                          {selectedVisit && (
                            <div className="space-y-4">
                              <div>
                                <p className="text-sm text-[#888888]">اسم العميل</p>
                                <p className="font-medium">{selectedVisit.customerName}</p>
                              </div>
                              <div>
                                <p className="text-sm text-[#888888]">رقم الهاتف</p>
                                <p className="font-medium">{selectedVisit.phone}</p>
                              </div>
                              <div>
                                <p className="text-sm text-[#888888]">الخدمة</p>
                                <p className="font-medium">{selectedVisit.service}</p>
                              </div>
                              <div>
                                <p className="text-sm text-[#888888]">نوع المكان</p>
                                <p className="font-medium">{selectedVisit.placeType}</p>
                              </div>
                              <div>
                                <p className="text-sm text-[#888888]">المدينة</p>
                                <p className="font-medium">{selectedVisit.city}</p>
                              </div>
                              <div>
                                <p className="text-sm text-[#888888]">التاريخ</p>
                                <p className="font-medium">{selectedVisit.date}</p>
                              </div>
                              <div>
                                <p className="text-sm text-[#888888]">الملاحظات</p>
                                <p className="font-medium">
                                  {selectedVisit.notes || "لا توجد ملاحظات"}
                                </p>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                      {/* Status Actions */}
                      {visit.status === "جديد" && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-green-600 hover:text-green-700 hover:bg-green-50"
                          onClick={() => updateVisitStatus(visit.id, "مؤكد")}
                        >
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                      )}
                      {visit.status === "مؤكد" && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                          onClick={() => updateVisitStatus(visit.id, "مكتمل")}
                        >
                          <Calendar className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => deleteVisit(visit.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredVisits.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#888888]">لا توجد حجوزات</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
