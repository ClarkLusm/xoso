import { useState } from "react";
import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RegionSelector } from "@/components/lottery/RegionSelector";
import { LotteryTable } from "@/components/lottery/LotteryTable";
import { generateMockResult } from "@/lib/mockData";
import { Calendar as CalendarIcon, Trophy, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@assets/generated_images/modern_abstract_3d_lottery_balls_lucky_concept.png";

export default function Home() {
  const [region, setRegion] = useState<'MB' | 'MT' | 'MN'>('MB');
  const [date] = useState(new Date().toISOString().split('T')[0]);

  // Generate result based on state (simulating API fetch)
  const result = generateMockResult(region, region === 'MB' ? 'Hà Nội' : (region === 'MT' ? 'Đà Nẵng' : 'TP.HCM'), date);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-red-50 to-background dark:from-red-950/20 dark:to-background pb-12 pt-8 sm:pb-20 sm:pt-16">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-background shadow-sm text-lottery-red border-red-100">
                  <span className="flex h-2 w-2 rounded-full bg-lottery-red mr-2 animate-pulse"></span>
                  Trực tiếp KQXS hôm nay
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-serif leading-[1.1]">
                  Thử Vận May <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lottery-red to-orange-500">
                    Rinh Ngay Tài Lộc
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Tra cứu kết quả xổ số nhanh chóng, chính xác. Thống kê, soi cầu, và sổ mơ toàn diện nhất Việt Nam.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/search">
                    <Button size="lg" className="bg-lottery-red hover:bg-red-600 h-12 px-8 text-base shadow-lg shadow-red-500/25 w-full sm:w-auto">
                      Tra Cứu Ngay
                    </Button>
                  </Link>
                  <Link href="/schedule">
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-background/50 backdrop-blur w-full sm:w-auto">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Xem Lịch Quay
                    </Button>
                  </Link>
                </div>
                
                <div className="pt-8 flex justify-center lg:justify-start gap-8 text-sm font-medium text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary/60" />
                    <span>10k+ Truy cập</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500/80" />
                    <span>Cập nhật 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500/80" />
                    <span>Uy tín số 1</span>
                  </div>
                </div>
              </div>
              
              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="relative aspect-square rounded-full bg-gradient-to-tr from-red-100 to-amber-100 opacity-60 blur-3xl absolute inset-0 transform scale-90"></div>
                <img 
                  src={heroImage} 
                  alt="Lottery Balls" 
                  className="relative w-full h-auto drop-shadow-2xl animate-in zoom-in duration-1000 slide-in-from-right-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 sm:py-20 container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-serif mb-4">Kết Quả Mới Nhất</h2>
            <p className="text-muted-foreground">Cập nhật lúc 18:30 - {new Date().toLocaleDateString('vi-VN')}</p>
          </div>

          <RegionSelector currentRegion={region} onRegionChange={setRegion} />
          
          <LotteryTable result={result} />
        </section>

        {/* Features/Banners */}
        <section className="py-12 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/article/thong-ke-vip">
                <Card className="p-6 hover:shadow-lg transition-shadow border-none bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-card h-full cursor-pointer">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">Thống Kê VIP</h3>
                  <p className="text-muted-foreground mb-4">Phân tích tần suất lô tô, gan cực đại, đầu đuôi.</p>
                  <Button variant="link" className="px-0 text-blue-600">Xem ngay &rarr;</Button>
                </Card>
              </Link>
              <Link href="/article/so-mo">
                <Card className="p-6 hover:shadow-lg transition-shadow border-none bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-card h-full cursor-pointer">
                  <h3 className="text-xl font-bold mb-2 text-purple-700">Sổ Mơ</h3>
                  <p className="text-muted-foreground mb-4">Giải mã giấc mơ, tìm ra con số may mắn của bạn.</p>
                  <Button variant="link" className="px-0 text-purple-600">Tra cứu &rarr;</Button>
                </Card>
              </Link>
              <Link href="/article/quay-thu">
                <Card className="p-6 hover:shadow-lg transition-shadow border-none bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-card h-full cursor-pointer">
                  <h3 className="text-xl font-bold mb-2 text-amber-700">Quay Thử</h3>
                  <p className="text-muted-foreground mb-4">Thử vận may với hệ thống quay số ngẫu nhiên chuẩn xác.</p>
                  <Button variant="link" className="px-0 text-amber-600">Quay ngay &rarr;</Button>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
