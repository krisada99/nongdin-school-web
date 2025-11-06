import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "หน้าแรก", href: "#home" },
    { name: "เกี่ยวกับโรงเรียน", href: "#about" },
    { name: "บุคลากร", href: "#personnel" },
    { name: "ข่าวสารและกิจกรรม", href: "#news" },
    { name: "แกลเลอรี่", href: "#gallery" },
    { name: "ติดต่อเรา", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-medium">
              <span className="text-primary-foreground text-xl font-bold">ร.ร.</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-primary">โรงเรียนบ้านหนองดินดำ</h1>
              <p className="text-xs text-muted-foreground">(คุรุราษฎร์ผดุงวิทย์)</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
