import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function DreamPage() {
  const dreams = [
    { title: "Mơ thấy vàng", number: "37 - 82" },
    { title: "Mơ thấy nước lụt", number: "67 - 68" },
    { title: "Mơ thấy người thân", number: "45 - 54" },
    { title: "Mơ thấy rắn", number: "32 - 42 - 72" },
    { title: "Mơ thấy cá", number: "79 - 81" },
    { title: "Mơ thấy tiền", number: "02 - 52 - 82" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold font-serif mb-4">Giải Mã Giấc Mơ</h1>
          <p className="text-muted-foreground">Tìm kiếm ý nghĩa giấc mơ và con số may mắn tương ứng</p>
          
          <div className="mt-8 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input className="pl-10 h-12 text-lg rounded-xl shadow-sm" placeholder="Bạn mơ thấy gì? (Ví dụ: rắn, nước, tiền...)" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dreams.map((dream, i) => (
            <Card key={i} className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3">{dream.title}</h3>
              <div className="flex gap-2">
                {dream.number.split(' - ').map(n => (
                  <span key={n} className="bg-primary/10 text-primary font-mono font-bold px-3 py-1 rounded-lg border border-primary/20">
                    {n}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
