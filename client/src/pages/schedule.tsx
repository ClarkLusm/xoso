import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function SchedulePage() {
  const schedule = [
    { day: "Thứ Hai", mb: "Hà Nội", mt: "Thừa T. Huế, Phú Yên", mn: "TP.HCM, Đồng Tháp, Cà Mau" },
    { day: "Thứ Ba", mb: "Quảng Ninh", mt: "Đắk Lắk, Quảng Nam", mn: "Bến Tre, Vũng Tàu, Bạc Liêu" },
    { day: "Thứ Tư", mb: "Bắc Ninh", mt: "Đà Nẵng, Khánh Hòa", mn: "Đồng Nai, Cần Thơ, Sóc Trăng" },
    { day: "Thứ Năm", mb: "Hà Nội", mt: "Bình Định, Quảng Trị, Quảng Bình", mn: "Tây Ninh, An Giang, Bình Thuận" },
    { day: "Thứ Sáu", mb: "Hải Phòng", mt: "Gia Lai, Ninh Thuận", mn: "Vĩnh Long, Bình Dương, Trà Vinh" },
    { day: "Thứ Bảy", mb: "Nam Định", mt: "Đà Nẵng, Quảng Ngãi, Đắk Nông", mn: "TP.HCM, Long An, Bình Phước, Hậu Giang" },
    { day: "Chủ Nhật", mb: "Thái Bình", mt: "Khánh Hòa, Kon Tum", mn: "Tiền Giang, Kiên Giang, Đà Lạt" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold font-serif mb-4">Lịch Quay Thưởng</h1>
            <p className="text-muted-foreground">Thời gian mở thưởng định kỳ của các đài xổ số kiến thiết</p>
          </div>

          <div className="bg-card rounded-2xl shadow-xl border overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="w-32 font-bold">Thứ</TableHead>
                  <TableHead className="font-bold">Miền Bắc (18:15)</TableHead>
                  <TableHead className="font-bold">Miền Trung (17:15)</TableHead>
                  <TableHead className="font-bold">Miền Nam (16:15)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedule.map((item) => (
                  <TableRow key={item.day}>
                    <TableCell className="font-semibold text-primary">{item.day}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="border-red-200 text-red-700 bg-red-50">{item.mb}</Badge>
                    </TableCell>
                    <TableCell className="text-sm">{item.mt}</TableCell>
                    <TableCell className="text-sm">{item.mn}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-100 dark:border-blue-900">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Lưu ý:</h4>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              Kết quả xổ số được mở thưởng trực tiếp vào khung giờ cố định hàng ngày. Quý khách vui lòng theo dõi đúng khung giờ để cập nhật kết quả nhanh nhất.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
