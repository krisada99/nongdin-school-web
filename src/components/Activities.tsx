import { Card, CardContent } from "@/components/ui/card";
import activities1 from "@/assets/activities-1.jpg";
import activities2 from "@/assets/activities-2.jpg";
import activities3 from "@/assets/activities-3.jpg";

const Activities = () => {
  const activities = [
    {
      image: activities1,
      title: "กิจกรรมวิทยาศาสตร์",
      description: "ส่งเสริมการเรียนรู้วิทยาศาสตร์ผ่านการทดลองและการปฏิบัติจริง",
      date: "15 มกราคม 2567",
    },
    {
      image: activities2,
      title: "กีฬาสีประจำปี",
      description: "พัฒนาทักษะกีฬา ส่งเสริมความสามัคคี และน้ำใจนักกีฬา",
      date: "10 กุมภาพันธ์ 2567",
    },
    {
      image: activities3,
      title: "วันสำคัญทางวัฒนธรรม",
      description: "อนุรักษ์และส่งเสริมศิลปวัฒนธรรมไทยให้แก่เยาวชน",
      date: "5 มีนาคม 2567",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">กิจกรรมและแกลเลอรี่</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ชมภาพบรรยากาศกิจกรรมต่างๆ ของโรงเรียน ที่ส่งเสริมการเรียนรู้และพัฒนานักเรียนอย่างรอบด้าน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card 
              key={index} 
              className="border-none shadow-medium hover:shadow-strong transition-smooth overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{activity.date}</div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary-light transition-smooth">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
