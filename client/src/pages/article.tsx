import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useParams } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, BookOpen, RotateCcw, ChevronRight, Share2, Printer } from "lucide-react";

export default function ArticlePage() {
  const { slug } = useParams();

  const articles: Record<string, any> = {
    "thong-ke-vip": {
      title: "Thống Kê VIP - Phân Tích Chuyên Sâu",
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
      color: "from-blue-50 to-white",
      content: `
        <p className="text-lg leading-relaxed mb-6">Chào mừng bạn đến với hệ thống Thống Kê VIP của Xổ Số Đại Phát. Đây là nơi cung cấp các dữ liệu phân tích chuyên sâu nhất về các con số.</p>
        <h2 className="text-2xl font-bold mb-4">Phân tích tần suất lô tô</h2>
        <p className="mb-4">Hệ thống của chúng tôi sử dụng thuật toán AI để phân tích dữ liệu trong 1000 ngày gần nhất, giúp bạn xác định các con số có tần suất xuất hiện cao nhất.</p>
        <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100">
          <ul className="list-disc pl-5 space-y-2">
            <li>Lô gan cực đại: Phân tích các con số lâu chưa về.</li>
            <li>Đầu đuôi câm: Thống kê các đầu số và đuôi số không xuất hiện.</li>
            <li>Cặp số hay đi cùng nhau: Dựa trên dữ liệu lịch sử.</li>
          </ul>
        </div>
      `
    },
    "so-mo": {
      title: "Sổ Mơ - Giải Mã Điềm Báo",
      icon: <BookOpen className="h-10 w-10 text-purple-600" />,
      color: "from-purple-50 to-white",
      content: `
        <p className="text-lg leading-relaxed mb-6">Giấc mơ không chỉ là những hình ảnh ngẫu nhiên, chúng thường mang theo những điềm báo về tương lai và những con số may mắn.</p>
        <h2 className="text-2xl font-bold mb-4">Cách tra cứu hiệu quả</h2>
        <p className="mb-4">Bạn chỉ cần nhớ lại chi tiết chính trong giấc mơ của mình và tìm kiếm trong kho dữ liệu hơn 10.000 giấc mơ của chúng tôi.</p>
        <div className="bg-purple-50 p-4 rounded-lg mb-6 border border-purple-100">
          <p className="italic">Ví dụ: Mơ thấy rắn thường liên quan đến các bộ số 32 - 42 - 72.</p>
        </div>
      `
    },
    "quay-thu": {
      title: "Quay Thử - Thử Vận May Hôm Nay",
      icon: <RotateCcw className="h-10 w-10 text-amber-600" />,
      color: "from-amber-50 to-white",
      content: `
        <p className="text-lg leading-relaxed mb-6">Tính năng quay thử mô phỏng chính xác quy trình quay số thực tế của các nhà đài, giúp bạn tìm ra bộ số may mắn cho riêng mình.</p>
        <h2 className="text-2xl font-bold mb-4">Thuật toán ngẫu nhiên chuẩn xác</h2>
        <p className="mb-4">Hệ thống quay thử được thiết kế dựa trên các thuật toán ngẫu nhiên tiên tiến, mang lại cảm giác hồi hộp như đang xem quay số trực tiếp.</p>
        <div className="flex justify-center my-8">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-xl rounded-full shadow-xl shadow-amber-500/30">
            <RotateCcw className="mr-3 h-6 w-6" /> Bắt Đầu Quay Thử
          </Button>
        </div>
      `
    }
  };

  const article = articles[slug || ""] || articles["thong-ke-vip"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-primary">Trang chủ</a>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground font-medium">{article.title}</span>
          </nav>

          <Card className={`overflow-hidden border-none shadow-2xl bg-gradient-to-br ${article.color}`}>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-white rounded-2xl shadow-sm">
                  {article.icon}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold font-serif mb-2">{article.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Ngày đăng: 29/12/2025</span>
                    <span>•</span>
                    <span>Lượt xem: 1,250</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: article.content }}>
              </div>

              <div className="mt-12 pt-8 border-t flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" /> Chia sẻ
                  </Button>
                  <Button variant="outline" size="sm">
                    <Printer className="mr-2 h-4 w-4" /> In trang
                  </Button>
                </div>
                <div className="text-sm font-medium">
                  Hashtag: <span className="text-primary">#xosodaiphat #kếtquảxổsố</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold font-serif mb-8">Tính Năng Liên Quan</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(articles)
                .filter(([s]) => s !== slug)
                .slice(0, 2)
                .map(([s, a]) => (
                  <a href={`/article/${s}`} key={s}>
                    <Card className="p-6 hover:shadow-lg transition-all border-muted hover:border-primary/20">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-muted rounded-lg">{a.icon}</div>
                        <h4 className="font-bold">{a.title}</h4>
                      </div>
                    </Card>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
