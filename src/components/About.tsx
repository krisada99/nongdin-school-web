import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "พันธกิจ",
      description: "จัดการศึกษาที่มีคุณภาพ พัฒนาผู้เรียนให้เป็นคนดี มีความรู้ และมีความสามารถในการแข่งขัน",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "วิสัยทัศน์",
      description: "มุ่งมั่นให้ผู้เรียนมีคุณภาพตามมาตรฐานการศึกษา มีคุณธรรม จริยธรรม และเป็นพลเมืองที่ดีของสังคม",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "ค่านิยมหลัก",
      description: "ส่งเสริมความรัก ความสามัคคี การมีจิตสาธารณะ และการใส่ใจในผู้อื่นและสิ่งแวดล้อม",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "เป้าหมาย",
      description: "พัฒนาคุณภาพการศึกษาอย่างต่อเนื่อง สร้างนวัตกรรมการเรียนรู้ และส่งเสริมการเรียนรู้ตลอดชีวิต",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">เกี่ยวกับโรงเรียน</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            โรงเรียนบ้านหนองดินดำ(คุรุราษฎร์ผดุงวิทย์) ก่อตั้งขึ้นด้วยปณิธานในการพัฒนาการศึกษาให้กับเยาวชนในท้องถิ่น 
            มุ่งเน้นการสร้างคนดี คนเก่ง และมีความสุข
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-smooth bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center text-primary-foreground shadow-soft">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border-none shadow-medium bg-gradient-accent">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">ประวัติโรงเรียน</h3>
              <p className="text-secondary-foreground/90 leading-relaxed">
                โรงเรียนบ้านหนองดินดำ(คุรุราษฎร์ผดุงวิทย์) ก่อตั้งขึ้นเมื่อปี พ.ศ. 2520 
                โดยมีวัตถุประสงค์เพื่อให้บริการการศึกษาแก่เด็กและเยาวชนในชุมชน 
                ปัจจุบันโรงเรียนมีนักเรียนกว่า 500 คน มีครูและบุคลากรทางการศึกษากว่า 50 ท่าน 
                พร้อมสิ่งอำนวยความสะดวกที่ทันสมัย เพื่อสนับสนุนการเรียนรู้ของนักเรียนอย่างเต็มศักยภาพ
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
