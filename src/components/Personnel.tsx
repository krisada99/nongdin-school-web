import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, Award } from "lucide-react";

const Personnel = () => {
  const staff = [
    {
      name: "นายสมชาย ใจดี",
      position: "ผู้อำนวยการโรงเรียน",
      description: "ผู้นำโรงเรียนสู่ความเป็นเลิศทางการศึกษา",
      icon: <Award className="h-8 w-8" />,
    },
    {
      name: "นางสาวสุดา มีสุข",
      position: "รองผู้อำนวยการฝ่ายวิชาการ",
      description: "รับผิดชอบด้านหลักสูตรและการเรียนการสอน",
      icon: <GraduationCap className="h-8 w-8" />,
    },
    {
      name: "นายประสิทธิ์ รักเรียน",
      position: "รองผู้อำนวยการฝ่ายบริหาร",
      description: "ดูแลด้านการบริหารและธุรการทั่วไป",
      icon: <Users className="h-8 w-8" />,
    },
  ];

  return (
    <section id="personnel" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">บุคลากร</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ทีมงานผู้บริหารและคณาจารย์ที่มีความมุ่งมั่นในการพัฒนาการศึกษา
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {staff.map((person, index) => (
            <Card 
              key={index} 
              className="border-none shadow-medium hover:shadow-strong transition-smooth bg-gradient-card text-center"
            >
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground shadow-medium mx-auto mb-4">
                  {person.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">{person.name}</h3>
                <p className="text-secondary font-medium mb-3">{person.position}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{person.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-none shadow-medium max-w-4xl mx-auto bg-gradient-accent">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-4 text-center">
              คณะครูและบุคลากร
            </h3>
            <p className="text-secondary-foreground/90 text-center leading-relaxed mb-6">
              โรงเรียนของเรามีคณาจารย์ที่มีคุณภาพและมีประสบการณ์กว่า 50 ท่าน 
              พร้อมให้การศึกษาและดูแลนักเรียนด้วยความเอาใจใส่
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-foreground mb-1">50+</div>
                <div className="text-sm text-secondary-foreground/80">คณาจารย์</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-foreground mb-1">20+</div>
                <div className="text-sm text-secondary-foreground/80">วุฒิปริญญาโท</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-foreground mb-1">15+</div>
                <div className="text-sm text-secondary-foreground/80">ปีประสบการณ์เฉลี่ย</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Personnel;
