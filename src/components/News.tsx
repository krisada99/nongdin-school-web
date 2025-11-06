import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Bell, FileText } from "lucide-react";

const News = () => {
  const news = [
    {
      title: "ประกาศรับสมัครนักเรียนใหม่ ปีการศึกษา 2568",
      date: "1 มีนาคม 2567",
      category: "ประกาศ",
      description: "เปิดรับสมัครนักเรียนใหม่ระดับชั้นอนุบาล 1 - ประถมศึกษาปีที่ 6 ตั้งแต่วันนี้ - 31 มีนาคม 2567",
      icon: <Bell className="h-5 w-5" />,
      color: "bg-accent",
    },
    {
      title: "กำหนดการสอบปลายภาคเรียนที่ 2",
      date: "20 กุมภาพันธ์ 2567",
      category: "ข่าวสาร",
      description: "กำหนดการสอบปลายภาคเรียนที่ 2 ปีการศึกษา 2567 ระหว่างวันที่ 10-15 มีนาคม 2567",
      icon: <Calendar className="h-5 w-5" />,
      color: "bg-primary",
    },
    {
      title: "ผลการแข่งขันทักษะวิชาการระดับเขต",
      date: "15 กุมภาพันธ์ 2567",
      category: "ข่าวกิจกรรม",
      description: "นักเรียนของโรงเรียนคว้ารางวัลชนะเลิศในการแข่งขันทักษะวิชาการหลายรายการ",
      icon: <FileText className="h-5 w-5" />,
      color: "bg-secondary",
    },
  ];

  return (
    <section id="news" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">ข่าวสารและประกาศ</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ติดตามข่าวสาร กิจกรรม และประกาศต่างๆ ของโรงเรียน
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {news.map((item, index) => (
            <Card 
              key={index} 
              className="border-none shadow-medium hover:shadow-strong transition-smooth cursor-pointer group"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-white shadow-soft`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge variant="secondary" className="font-medium">
                        {item.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary-light transition-smooth">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
