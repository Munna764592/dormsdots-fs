"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code, Palette, MessageSquare, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuthDialog } from "@/components/auth-dialog";
import PopularCategories from "@/components/popular-categories";
import AgencyPromo from "@/components/agency-promo";
import ProgrammingTechSolutions from "@/components/business-solutions";
import RelatedTags from "@/components/related-tags";
import Hero from "@/components/hero";
import SellingPromotion from "@/components/selling-promotion";
import StatsSection from "@/components/stats-section";
import TrustedBy from "@/components/trusted-by";
import Footer from "@/components/Footer";
import Testimonials from "@/components/testtimonals";
import Fsnavbar from "@/components/fsnavbar";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8 mb-4 text-primary" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies."
    },
    {
      icon: <Palette className="w-8 h-8 mb-4 text-primary" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience."
    },
    {
      icon: <MessageSquare className="w-8 h-8 mb-4 text-primary" />,
      title: "Consultation",
      description: "Expert advice on digital strategy and technical solutions."
    },
    {
      icon: <Rocket className="w-8 h-8 mb-4 text-primary" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-colors duration-[1.5s]"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.15), transparent 80%)`
        }}
      />

      {/* Navbar */}
      <Fsnavbar/>

      {/* Auth Dialog */}
      {/* <AuthDialog
        isOpen={authMode !== null}
        onClose={() => setAuthMode(null)}
        mode={authMode || "login"}
      /> */}

      {/* Hero Section */}
      {/* <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Transforming Ideas into
            <span className="text-primary"> Digital Reality</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            We craft exceptional digital experiences that help businesses thrive
            in the modern world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="relative overflow-hidden bg-primary text-primary-foreground px-8 py-3 rounded-md group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform" />
            </a>
            <a
              href="#services"
              className="relative overflow-hidden bg-secondary text-secondary-foreground px-8 py-3 rounded-md group">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-secondary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your
              business succeed online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Hero />
      <TrustedBy />
      <PopularCategories />
      <AgencyPromo />
      <SellingPromotion />
      <ProgrammingTechSolutions />
      <Testimonials />
      <StatsSection />
      <RelatedTags />
      <Footer />
    </div>
  );
}
