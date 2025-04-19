"use client";

import Footer from "@/components/Footer";
import Fsnavbar from "@/components/fsnavbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  DollarSign,
  Globe,
  Shield,
  Star,
  Wallet
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BecomeSeller() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
  return (
    <>
      <Fsnavbar />
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-colors duration-[1.5s]"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.15), transparent 80%)`
        }}
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
            alt="Freelancers working"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">
              Turn Your Skills Into Success
            </h1>
            <p className="text-xl mb-8">
              Join millions of professionals offering their services globally
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-[#404145]">
              Why Become a Seller?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center transition-shadow">
                <DollarSign className="w-12 h-12 p-2 mx-auto mb-4 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white rounded-lg" />
                <h3 className="text-xl text-[#404145] font-semibold mb-3">
                  Earn On Your Terms
                </h3>
                <p className="text-muted-foreground">
                  Set your own rates and work when you want, where you want.
                </p>
              </Card>
              <Card className="p-6 text-center transition-shadow">
                <Globe className="w-12 h-12 p-2 mx-auto mb-4 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white rounded-lg" />
                <h3 className="text-xl text-[#404145] font-semibold mb-3">
                  Global Reach
                </h3>
                <p className="text-muted-foreground">
                  Access clients from around the world and expand your business
                  globally.
                </p>
              </Card>
              <Card className="p-6 text-center transition-shadow">
                <Shield className="w-12 h-12 p-2 mx-auto mb-4 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white rounded-lg" />
                <h3 className="text-xl text-[#404145] font-semibold mb-3">
                  Secure Payments
                </h3>
                <p className="text-muted-foreground">
                  Get paid safely and on time, every time with our secure
                  payment system.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-[#404145]">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  number: "1",
                  title: "Create Your Profile",
                  description:
                    "Set up your professional profile showcasing your skills and experience"
                },
                {
                  number: "2",
                  title: "Create Your Gigs",
                  description:
                    "List your services with competitive pricing and compelling descriptions"
                },
                {
                  number: "3",
                  title: "Deliver Great Work",
                  description:
                    "Provide exceptional service to build your reputation and ratings"
                },
                {
                  number: "4",
                  title: "Get Paid",
                  description:
                    "Receive secure payments and grow your freelance business"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-400 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        {/* <section className="py-20 bg-muted">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-8">
                Start Your Journey Today
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Professional Skills
                  </label>
                  <Textarea placeholder="What services can you offer? (e.g., Graphic Design, Web Development)" />
                </div>
                <Button className="w-full" size="lg">
                  Create Seller Account
                </Button>
              </form>
            </div>
          </div>
        </section> */}

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#404145] mb-16">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Graphic Designer",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
                  quote:
                    "Joining as a seller transformed my freelance career. I now work with clients worldwide."
                },
                {
                  name: "Michael Chen",
                  role: "Web Developer",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
                  quote:
                    "The platform made it easy to showcase my skills and find quality clients."
                },
                {
                  name: "Emma Davis",
                  role: "Content Writer",
                  image:
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
                  quote:
                    "I've built a successful business doing what I love, all thanks to this platform."
                }
              ].map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold text-[#404145]">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.quote}</p>
                  <div className="flex mt-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
