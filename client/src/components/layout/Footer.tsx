export function Footer() {
  return (
    <footer className="border-t bg-muted/40 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif">Xổ Số Đại Phát</h3>
            <p className="text-sm text-muted-foreground">
              Trang web tra cứu kết quả xổ số kiến thiết 3 miền nhanh nhất, chính xác nhất. Cập nhật liên tục hàng ngày.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kết Quả</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Xổ số Miền Bắc</a></li>
              <li><a href="#" className="hover:text-primary">Xổ số Miền Trung</a></li>
              <li><a href="#" className="hover:text-primary">Xổ số Miền Nam</a></li>
              <li><a href="#" className="hover:text-primary">Vietlott</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tiện Ích</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Sổ Mơ</a></li>
              <li><a href="#" className="hover:text-primary">Thống Kê</a></li>
              <li><a href="#" className="hover:text-primary">Quay Thử</a></li>
              <li><a href="#" className="hover:text-primary">Lịch Quay</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liên Hệ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: contact@xosodaiphat.com</li>
              <li>Hotline: 1900 xxxx</li>
              <li>Địa chỉ: Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 Xổ Số Đại Phát. All rights reserved. Mockup Version.
        </div>
      </div>
    </footer>
  );
}
