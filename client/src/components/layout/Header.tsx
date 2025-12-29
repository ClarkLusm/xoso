import { Link } from "wouter";
import { Ticket, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/">
          <a className="flex items-center space-x-2" title="Trang chủ Xổ Số Đại Phát">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <Ticket className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="text-xl font-bold tracking-tight text-foreground font-serif">
              Xổ Số <span className="text-primary">Đại Phát</span>
            </p>
          </a>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/"><a className="transition-colors hover:text-primary">Trang Chủ</a></Link>
          <Link href="/search"><a className="transition-colors hover:text-primary">Tra Cứu</a></Link>
          <Link href="/schedule"><a className="transition-colors hover:text-primary">Lịch Quay</a></Link>
          <Link href="/so-mo"><a className="transition-colors hover:text-primary">Sổ Mơ</a></Link>
        </nav>

        <div className="flex items-center space-x-2">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Tra cứu vé..."
              className="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button className="hidden sm:inline-flex bg-lottery-red hover:bg-red-600 text-white shadow-lg shadow-red-500/20">
            Đăng Nhập
          </Button>
        </div>
      </div>
    </header>
  );
}
