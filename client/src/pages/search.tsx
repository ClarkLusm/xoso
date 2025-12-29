import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Calendar, History } from "lucide-react";

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold font-serif mb-4">Tra Cứu Kết Quả</h1>
          <p className="text-muted-foreground">Nhập ngày hoặc tỉnh thành để xem lại kết quả xổ số đã quay</p>
        </div>

        <div className="max-w-xl mx-auto bg-card p-6 rounded-2xl shadow-xl border mb-12">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Chọn Tỉnh/Thành Phố</label>
              <select className="w-full h-11 rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-primary/20">
                <option>Miền Bắc (Hà Nội)</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
                <option>Cần Thơ</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Chọn Ngày Quay</label>
              <input type="date" className="w-full h-11 rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-primary/20" defaultValue={new Date().toISOString().split('T')[0]} />
            </div>
            <Button className="w-full h-12 bg-lottery-red hover:bg-red-600 text-lg shadow-lg shadow-red-500/20">
              <Search className="mr-2 h-5 w-5" /> Tìm Kiếm Kết Quả
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 border-none bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
            <History className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">Kết quả hôm qua</h3>
            <p className="text-sm text-muted-foreground">Xem nhanh KQXS 3 miền ngày 28/12/2025</p>
          </Card>
          <Card className="p-6 border-none bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
            <Calendar className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">Tra cứu theo tháng</h3>
            <p className="text-sm text-muted-foreground">Lịch sử quay số chi tiết trong tháng 12</p>
          </Card>
          <Card className="p-6 border-none bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
            <Trophy className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">Giải độc đắc gần đây</h3>
            <p className="text-sm text-muted-foreground">Danh sách các tỉnh vừa nổ hũ Jackpot</p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Trophy(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
  )
}
