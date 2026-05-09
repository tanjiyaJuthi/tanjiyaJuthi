import Navbar from "@/components/Navbar";
import NavigationSidebar from "@/components/NavigationSidebar";
import SocialSidebar from "@/components/SocialSidebar";
import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Background from "@/components/Background";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary selection:text-on-primary">
      {/* Left Navigation Sidebar (Desktop) */}
      <NavigationSidebar />
      
      {/* Right Social Sidebar (Desktop) */}
      <SocialSidebar />
      
      {/* Bottom Navigation Dock (Mobile) */}
      <BottomNav />
      
      {/* Top Header */}
      <Navbar />

      {/* Main Content with Left Padding on Desktop */}
      <main className="md:pl-20">
        <Hero />
        <About />
        <Skills />
        <Background />
        <Portfolio />
        <Contact />
      </main>

      <div className="md:pl-20">
        <Footer />
      </div>
    </div>
  );
}
