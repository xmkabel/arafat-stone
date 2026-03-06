import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
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
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

type ProjectCategory = "kitchen" | "bathroom" | "quartz" | "custom";
type ProjectStatus = "published" | "draft";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  images: string[];
  createdAt: string;
}

export function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "مطبخ فاخر بجرانيت أسود",
      category: "kitchen",
      status: "published",
      images: ["kitchen1.jpg", "kitchen2.jpg"],
      createdAt: "2026-03-01",
    },
    {
      id: 2,
      title: "حوض رخام فاخر",
      category: "bathroom",
      status: "published",
      images: ["bathroom1.jpg"],
      createdAt: "2026-03-02",
    },
    {
      id: 3,
      title: "أسطح كوارتز عصرية",
      category: "quartz",
      status: "draft",
      images: ["quartz1.jpg", "quartz2.jpg", "quartz3.jpg"],
      createdAt: "2026-03-03",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "kitchen" as ProjectCategory,
    status: "published" as ProjectStatus,
  });

  const categoryLabels: Record<ProjectCategory, string> = {
    kitchen: "مطابخ",
    bathroom: "أحواض",
    quartz: "كوارتز",
    custom: "حلول خاصة",
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      category: project.category,
      status: project.status,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingProject) {
      setProjects((prev) =>
        prev.map((p) =>
          p.id === editingProject.id ? { ...p, ...formData } : p
        )
      );
      toast.success("تم تحديث المشروع بنجاح");
    } else {
      const newProject: Project = {
        id: Math.max(...projects.map((p) => p.id)) + 1,
        ...formData,
        images: ["placeholder.jpg"],
        createdAt: new Date().toISOString().split("T")[0],
      };
      setProjects((prev) => [...prev, newProject]);
      toast.success("تم إضافة المشروع بنجاح");
    }

    setIsDialogOpen(false);
    setEditingProject(null);
    setFormData({ title: "", category: "kitchen", status: "published" });
  };

  const handleDelete = (id: number) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    toast.success("تم حذف المشروع بنجاح");
  };

  const toggleStatus = (id: number) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "published" ? "draft" : "published" }
          : p
      )
    );
  };

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#2B160D]">إدارة المشاريع</h2>
          <p className="text-[#888888]">أضف أو عدل أو احذف المشاريع في المعرض</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              className="bg-[#2B160D] text-white hover:bg-[#1f0f08]"
              onClick={() => {
                setEditingProject(null);
                setFormData({ title: "", category: "kitchen", status: "published" });
              }}
            >
              <Plus className="w-4 h-4 ml-2" />
              إضافة مشروع جديد
            </Button>
          </DialogTrigger>
          <DialogContent dir="rtl">
            <DialogHeader>
              <DialogTitle>
                {editingProject ? "تعديل المشروع" : "إضافة مشروع جديد"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">عنوان المشروع</Label>
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
                <Label htmlFor="category">الفئة</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value as ProjectCategory })
                  }
                >
                  <SelectTrigger dir="rtl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent dir="rtl">
                    <SelectItem value="kitchen">مطابخ</SelectItem>
                    <SelectItem value="bathroom">أحواض</SelectItem>
                    <SelectItem value="quartz">كوارتز</SelectItem>
                    <SelectItem value="custom">حلول خاصة</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="status">الحالة</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) =>
                    setFormData({ ...formData, status: value as ProjectStatus })
                  }
                >
                  <SelectTrigger dir="rtl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent dir="rtl">
                    <SelectItem value="published">منشور</SelectItem>
                    <SelectItem value="draft">مسودة</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button
                  type="submit"
                  className="flex-1 bg-[#2B160D] text-white hover:bg-[#1f0f08]"
                >
                  {editingProject ? "حفظ التغييرات" : "إضافة المشروع"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
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
          <p className="text-sm text-[#888888] mb-1">إجمالي المشاريع</p>
          <p className="text-2xl font-bold text-[#2B160D]">{projects.length}</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-sm text-[#888888] mb-1">المنشو��ة</p>
          <p className="text-2xl font-bold text-green-600">
            {projects.filter((p) => p.status === "published").length}
          </p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-sm text-[#888888] mb-1">المسودات</p>
          <p className="text-2xl font-bold text-gray-600">
            {projects.filter((p) => p.status === "draft").length}
          </p>
        </Card>
      </div>

      {/* Projects Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#F5F5F5]">
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  عنوان المشروع
                </th>
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  الفئة
                </th>
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  الصور
                </th>
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  تاريخ الإضافة
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
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-[#F5F5F5] hover:bg-[#F5F5F5]/50">
                  <td className="py-3 px-4 text-[#333333] font-medium">
                    {project.title}
                  </td>
                  <td className="py-3 px-4 text-[#888888]">
                    {categoryLabels[project.category]}
                  </td>
                  <td className="py-3 px-4 text-[#888888]">
                    {project.images.length} صورة
                  </td>
                  <td className="py-3 px-4 text-[#888888]">{project.createdAt}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => toggleStatus(project.id)}
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                        project.status === "published"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.status === "published" ? (
                        <>
                          <Eye className="w-3 h-3" />
                          منشور
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3 h-3" />
                          مسودة
                        </>
                      )}
                    </button>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(project)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDelete(project.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#888888]">لا توجد مشاريع</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
