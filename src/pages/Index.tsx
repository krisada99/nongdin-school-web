import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Personnel from "@/components/Personnel";
import News from "@/components/News";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Personnel />
      <News />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
