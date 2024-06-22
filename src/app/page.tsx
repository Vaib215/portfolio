import Navbar from "@/components/layout/navbar";
import Hero from "@/components/layout/hero";
import About from "@/components/layout/about";
import Experience from "@/components/layout/experience";
import Skills from "@/components/layout/skills";
import Projects from "@/components/layout/projects";
import Contact from "@/components/layout/contact";
import Footer from "@/components/layout/footer";

const PortfolioWebsite = () => {
  return (
    <div
      id="home"
      className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioWebsite;
