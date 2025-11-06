import { Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">โรงเรียนบ้านหนองดินดำ</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              (คุรุราษฎร์ผดุงวิทย์)<br />
              มุ่งมั่นพัฒนาการศึกษาและสร้างอนาคตที่ดีให้กับเยาวชน
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">เมนูลัด</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  เกี่ยวกับโรงเรียน
                </a>
              </li>
              <li>
                <a href="#personnel" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  บุคลากร
                </a>
              </li>
              <li>
                <a href="#news" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  ข่าวสาร
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  แกลเลอรี่
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="text-primary-foreground/80">044-123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span className="text-primary-foreground/80">info@nongdindam.ac.th</span>
              </li>
              <li className="flex items-center space-x-2">
                <Facebook className="h-5 w-5" />
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2567 โรงเรียนบ้านหนองดินดำ(คุรุราษฎร์ผดุงวิทย์). สงวนลิขสิทธิ์.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
