import { LotteryResult, MOCK_PRIZES_MB, MOCK_PRIZES_MN } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface LotteryTableProps {
  result: LotteryResult;
}

export function LotteryTable({ result }: LotteryTableProps) {
  const { toast } = useToast();
  const isMB = result.region === 'MB';
  const prizeStructure = isMB ? MOCK_PRIZES_MB : MOCK_PRIZES_MN;

  const handleCopy = () => {
    toast({
      description: "Đã sao chép kết quả vào clipboard!",
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-card rounded-xl shadow-lg border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-lottery-red to-red-600 p-4 sm:p-6 text-white flex justify-between items-center">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-1">
            Kết quả xổ số {result.region === 'MB' ? 'Miền Bắc' : result.province}
          </h2>
          <time dateTime={result.date} className="text-red-100 text-sm sm:text-base font-medium opacity-90">
            {new Date(result.date).toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </div>
        <div className="flex gap-2">
           <Button size="icon" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0" onClick={handleCopy}>
            <Copy className="h-4 w-4" />
           </Button>
           <Button size="icon" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0">
            <Share2 className="h-4 w-4" />
           </Button>
        </div>
      </div>

      {/* Table */}
      <div className="divide-y divide-border">
        {prizeStructure.map((prize, index) => {
          const numbers = result.prizes[prize.code] || [];
          const isSpecial = prize.code === 'DB';
          
          return (
            <div 
              key={prize.code} 
              className={cn(
                "flex flex-col sm:flex-row",
                index % 2 === 0 ? "bg-muted/30" : "bg-card"
              )}
            >
              <div className="w-full sm:w-32 sm:shrink-0 p-3 sm:p-4 flex items-center justify-between sm:justify-start sm:border-r border-border/50">
                <span className={cn("font-medium", isSpecial ? "text-lottery-red font-bold" : "text-muted-foreground")}>
                  {prize.name}
                </span>
              </div>
              
              <div className="flex-1 p-3 sm:p-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                {numbers.map((num, idx) => (
                  <span 
                    key={idx}
                    className={cn(
                      "font-mono tracking-wider",
                      isSpecial 
                        ? "text-3xl sm:text-4xl font-bold text-lottery-red animate-in zoom-in duration-500" 
                        : "text-xl sm:text-2xl font-semibold text-foreground",
                      // Add highlight for last 2 digits logic if needed here
                    )}
                  >
                    {num}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="bg-muted/50 p-3 text-center text-xs text-muted-foreground border-t">
        Mã xác thực: {result.id} • Cập nhật lúc: 18:30
      </div>
    </div>
  );
}
