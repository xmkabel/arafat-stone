import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Switch } from "../../components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  isActive: boolean;
}

export function AdminServices() {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: "جرانيت المطابخ",
      description: "أسطح جرانيت فاخرة للمطابخ بأعلى جودة ومتانة استثنائية",
      image: "granite-kitchen.jpg",
      isActive: true,
    },
    {
      id: 2,
      title: "أسطح الكوارتز",
      description: "حلول كوارتز عصرية بتصاميم متنوعة وألوان مميزة",
      image: "quartz-surfaces.jpg",
      isActive: true,
    },
    {
      id: 3,
      title: "أحواض رخام وجرانيت",
      description: "أحواض فاخرة من الرخام والجرانيت بتصاميم عصرية",
      image: "marble-sinks.jpg",
      isActive: true,
    },
    {
      id: 4,
      title: "حلول حجرية مخصصة",
      description: "تصاميم مخصصة تناسب احتياجاتك وأذواقك الخاصة",
      image: "custom-solutions.jpg",
      isActive: false,
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      image: service.image,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingService) {
      setServices((prev) =>
        prev.map((s) =>
          s.id === editingService.id ? { ...s, ...formData } : s
        )
      );
      toast.success("تم تحديث الخدمة بنجاح");
    } else {
      const newService: Service = {
        id: Math.max(...services.map((s) => s.id)) + 1,
        ...formData,
        isActive: true,
      };
      setServices((prev) => [...prev, newService]);
      toast.success("تم إضافة الخدمة بنجاح");
    }

    setIsDialogOpen(false);
    setEditingService(null);
    setFormData({ title: "", description: "", image: "" });
  };

  const handleDelete = (id: number) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
    toast.success("تم حذف الخدمة بنجاح");
  };

  const toggleActive = (id: number) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isActive: !s.isActive } : s))
    );
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditingService(null);
    setFormData({ title: "", description: "", image: "" });
  };

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#2B160D]">إدارة الخدمات</h2>
          <p className="text-[#888888]">أضف أو عدل أو احذف الخدمات المتاحة</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              className="bg-[#2B160D] text-white hover:bg-[#1f0f08]"
              onClick={() => {
                setEditingService(null);
                setFormData({ title: "", description: "", image: "" });
              }}
            >
              <Plus className="w-4 h-4 ml-2" />
              إضافة خدمة جديدة
            </Button>
          </DialogTrigger>
          <DialogContent dir="rtl">
            <DialogHeader>
              <DialogTitle>
                {editingService ? "تعديل الخدمة" : "إضافة خدمة جديدة"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">عنوان الخدمة</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  dir="rtl"
                />
              </div>
              <div>
                <Label htmlFor="description">الوصف</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                  rows={4}
                  dir="rtl"
                />
              </div>
              <div>
                <Label htmlFor="image">اسم ملف الصورة</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  placeholder="service-image.jpg"
                  required
                  dir="rtl"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  type="submit"
                  className="flex-1 bg-[#2B160D] text-white hover:bg-[#1f0f08]"
                >
                  {editingService ? "حفظ التغييرات" : "إضافة الخدمة"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleDialogClose}
                  className="flex-1"
                >
                  إلغاء
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <p className="text-sm text-[#888888] mb-1">إجمالي الخدمات</p>
          <p className="text-2xl font-bold text-[#2B160D]">{services.length}</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-sm text-[#888888] mb-1">الخدمات النشطة</p>
          <p className="text-2xl font-bold text-green-600">
            {services.filter((s) => s.isActive).length}
          </p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-sm text-[#888888] mb-1">الخدمات غير النشطة</p>
          <p className="text-2xl font-bold text-gray-600">
            {services.filter((s) => !s.isActive).length}
          </p>
        </Card>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#2B160D] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center gap-2 mr-4">
                <Switch
                  checked={service.isActive}
                  onCheckedChange={() => toggleActive(service.id)}
                />
                {service.isActive ? (
                  <Eye className="w-4 h-4 text-green-600" />
                ) : (
                  <EyeOff className="w-4 h-4 text-gray-400" />
                )}
              </div>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg p-3 mb-4">
              <p className="text-sm text-[#888888]">
                <strong>الصورة:</strong> {service.image}
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => handleEdit(service)}
              >
                <Edit className="w-4 h-4 ml-2" />
                تعديل
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
                onClick={() => handleDelete(service.id)}
              >
                <Trash2 className="w-4 h-4 ml-2" />
                حذف
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
