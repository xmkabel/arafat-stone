import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Search, Eye, Trash2, MessageSquare } from "lucide-react";
import { toast } from "sonner";

type MessageStatus = "new" | "read" | "replied";

interface Message {
  id: number;
  name: string;
  phone: string;
  message: string;
  status: MessageStatus;
  createdAt: string;
}

export function AdminMessages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "أحمد محمد",
      phone: "01234567890",
      message: "أريد الاستفسار عن أسعار جرانيت المطابخ وهل يوجد لديكم عينات يمكن مشاهدتها؟",
      status: "new",
      createdAt: "2026-03-06 10:30",
    },
    {
      id: 2,
      name: "فاطمة علي",
      phone: "01234567891",
      message: "هل تقدمون خدمة التركيب أيضاً أم فقط توريد المواد؟",
      status: "read",
      createdAt: "2026-03-05 14:20",
    },
    {
      id: 3,
      name: "محمود حسن",
      phone: "01234567892",
      message: "أحتاج إلى عرض سعر لمطبخ بمساحة 8 متر مربع. متى يمكنكم المعاينة؟",
      status: "replied",
      createdAt: "2026-03-04 09:15",
    },
    {
      id: 4,
      name: "سارة إبراهيم",
      phone: "01234567893",
      message: "شكراً على الخدمة الممتازة. المطبخ تم تركيبه بشكل احترافي.",
      status: "read",
      createdAt: "2026-03-03 16:45",
    },
  ]);

  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.includes(searchTerm) ||
      msg.phone.includes(searchTerm) ||
      msg.message.includes(searchTerm)
  );

  const markAsRead = (id: number) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, status: "read" as MessageStatus } : msg
      )
    );
    toast.success("تم تحديث حالة الرسالة");
  };

  const markAsReplied = (id: number) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, status: "replied" as MessageStatus } : msg
      )
    );
    toast.success("تم تحديث حالة الرسالة إلى 'تم الرد'");
  };

  const deleteMessage = (id: number) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
    toast.success("تم حذف الرسالة بنجاح");
  };

  const getStatusColor = (status: MessageStatus) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "read":
        return "bg-yellow-100 text-yellow-800";
      case "replied":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: MessageStatus) => {
    switch (status) {
      case "new":
        return "جديدة";
      case "read":
        return "مقروءة";
      case "replied":
        return "تم الرد";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6" dir="rtl">
      {/* Search */}
      <Card className="p-6">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] w-5 h-5" />
          <Input
            placeholder="ابحث في الرسائل..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-12"
            dir="rtl"
          />
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <p className="text-sm text-[#888888] mb-1">إجمالي الرسائل</p>
          <p className="text-2xl font-bold text-[#2B160D]">{messages.length}</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-sm text-[#888888] mb-1">رسائل جديدة</p>
          <p className="text-2xl font-bold text-blue-600">
            {messages.filter((m) => m.status === "new").length}
          </p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-sm text-[#888888] mb-1">مقروءة</p>
          <p className="text-2xl font-bold text-yellow-600">
            {messages.filter((m) => m.status === "read").length}
          </p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-sm text-[#888888] mb-1">تم الرد</p>
          <p className="text-2xl font-bold text-green-600">
            {messages.filter((m) => m.status === "replied").length}
          </p>
        </Card>
      </div>

      {/* Messages Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#F5F5F5]">
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  الاسم
                </th>
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  الهاتف
                </th>
                <th className="text-right py-3 px-4 text-[#888888] font-medium">
                  الرسالة
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
              {filteredMessages.map((message) => (
                <tr key={message.id} className="border-b border-[#F5F5F5] hover:bg-[#F5F5F5]/50">
                  <td className="py-3 px-4 text-[#333333] font-medium">
                    {message.name}
                  </td>
                  <td className="py-3 px-4 text-[#888888]">{message.phone}</td>
                  <td className="py-3 px-4 text-[#888888] max-w-md truncate">
                    {message.message}
                  </td>
                  <td className="py-3 px-4 text-[#888888] text-sm">
                    {message.createdAt}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm ${getStatusColor(
                        message.status
                      )}`}
                    >
                      {getStatusLabel(message.status)}
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
                            onClick={() => {
                              setSelectedMessage(message);
                              if (message.status === "new") {
                                markAsRead(message.id);
                              }
                            }}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent dir="rtl">
                          <DialogHeader>
                            <DialogTitle>تفاصيل الرسالة</DialogTitle>
                          </DialogHeader>
                          {selectedMessage && (
                            <div className="space-y-4">
                              <div>
                                <p className="text-sm text-[#888888]">اسم المرسل</p>
                                <p className="font-medium">{selectedMessage.name}</p>
                              </div>
                              <div>
                                <p className="text-sm text-[#888888]">رقم الهاتف</p>
                                <p className="font-medium">{selectedMessage.phone}</p>
                              </div>
                              <div>
                                <p className="text-sm text-[#888888]">التاريخ</p>
                                <p className="font-medium">{selectedMessage.createdAt}</p>
                              </div>
                              <div>
                                <p className="text-sm text-[#888888] mb-2">الرسالة</p>
                                <p className="bg-[#F5F5F5] p-4 rounded-lg leading-relaxed">
                                  {selectedMessage.message}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  className="flex-1 bg-[#2B160D] text-white hover:bg-[#1f0f08]"
                                  onClick={() => {
                                    markAsReplied(selectedMessage.id);
                                  }}
                                >
                                  <MessageSquare className="w-4 h-4 ml-2" />
                                  تم الرد
                                </Button>
                                <a
                                  href={`tel:${selectedMessage.phone}`}
                                  className="flex-1"
                                >
                                  <Button variant="outline" className="w-full">
                                    اتصال
                                  </Button>
                                </a>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                      {/* Delete */}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => deleteMessage(message.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredMessages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#888888]">لا توجد رسائل</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
