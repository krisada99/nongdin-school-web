import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import heroImage from "@/assets/school-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="โรงเรียนบ้านหนองดินดำ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary-foreground/20 mb-6">
            <span className="text-secondary-foreground font-medium">ยินดีต้อนรับสู่</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
            โรงเรียนบ้านหนองดินดำ
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground/90 mb-6">
            (คุรุราษฎร์ผดุงวิทย์)
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            มุ่งมั่นพัฒนาคุณภาพการศึกษา สร้างเยาวชนให้เป็นคนดี มีความรู้ และมีคุณภาพชีวิตที่ดี
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary-light shadow-medium group">
              เกี่ยวกับโรงเรียน
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-background/20">
              ติดต่อเรา
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                <BookOpen className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-1">500+</div>
              <div className="text-sm text-primary-foreground/80">นักเรียน</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-1">50+</div>
              <div className="text-sm text-primary-foreground/80">คณาจารย์</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-1">30+</div>
              <div className="text-sm text-primary-foreground/80">ปีแห่งความเป็นเลิศ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
