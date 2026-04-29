import Topbar from "./components/Topbar";
import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardsSection from "./components/CardsSection";
import AboutSection from "./components/AboutSection";
import CounterSection from "./components/CounterSection";
import AcademicSection from "./components/AcademicSection";
import CTASection from "./components/CTASection";
import Gallery from "./components/Gallery";
import BlogSection from "./components/BlogSection";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
   
      <div className="hero-wrapper">
      <Topbar />
      <CustomNavbar />
      <Hero />
         <CardsSection />
          <AboutSection />
      <CounterSection />
      <AcademicSection />
      <CTASection />
      <Gallery />
      <BlogSection />
      <Testimonials />
      <Contact />
      <Footer />
      </div>
   
  );
}