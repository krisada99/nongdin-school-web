import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "ที่อยู่",
      detail: "123 หมู่ 5 ตำบลหนองดินดำ อำเภอเมือง จังหวัดนครราชสีมา 30000",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "โทรศัพท์",
      detail: "044-123-4567",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "อีเมล",
      detail: "info@nongdindam.ac.th",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "เวลาทำการ",
      detail: "จันทร์ - ศุกร์: 08:00 - 16:00 น.",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">ติดต่อเรา</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            สอบถามข้อมูลเพิ่มเติมหรือนัดหมายเยี่ยมชมโรงเรียน
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border-none shadow-medium hover:shadow-strong transition-smooth bg-gradient-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-primary-foreground shadow-soft">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-none shadow-medium">
            <CardContent className="p-0">
              <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.8487453841856!2d102.08196431485804!3d14.980838089674837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDU4JzUxLjAiTiAxMDLCsDA1JzA3LjEiRQ!5e0!3m2!1sth!2sth!4v1234567890123!5m2!1sth!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="แผนที่โรงเรียนบ้านหนองดินดำ"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
