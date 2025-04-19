"use client";

import Footer from "@/components/Footer";
import Fsnavbar from "@/components/fsnavbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Heart,
  Star,
  Video,
  Search,
  Filter,
  ArrowRight,
  CheckCircle,
  Award,
  Clock,
  Users,
  Code,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Laptop,
  Palette,
  BarChart
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Service {
  id: number;
  title: string;
  provider: {
    name: string;
    image: string;
    level: string;
    badge?: string;
  };
  rating: number;
  reviews: number;
  price: number;
  image: string;
  hasVideoConsultation: boolean;
  tags: string[];
}

const services: Service[] = [
  {
    id: 1,
    title:
      "I will design responsive wordpress website development for your business",
    provider: {
      name: "Sawera D",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      level: "Level 2",
      badge: "dormsdots's Choice"
    },
    rating: 5.0,
    reviews: 48,
    price: 7221,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&h=300",
    hasVideoConsultation: false,
    tags: ["WordPress", "Responsive", "Business"]
  },
  {
    id: 2,
    title:
      "I will develop, design and kickstart your ecommerce shopify website",
    provider: {
      name: "Noor Ahmed",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100",
      level: "Top Rated",
      badge: "Top Rated"
    },
    rating: 4.9,
    reviews: 1000,
    price: 7221,
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=500&h=300",
    hasVideoConsultation: true,
    tags: ["Shopify", "E-commerce", "Design"]
  },
  {
    id: 3,
    title: "I will create a modern, responsive website with React and Next.js",
    provider: {
      name: "Alex Johnson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100",
      level: "Level 3",
      badge: "dormsdots's Choice"
    },
    rating: 5.0,
    reviews: 127,
    price: 8999,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&h=300",
    hasVideoConsultation: true,
    tags: ["React", "Next.js", "Modern"]
  },
  {
    id: 4,
    title: "I will design a premium landing page for your startup or business",
    provider: {
      name: "Sarah Chen",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100",
      level: "Top Rated",
      badge: "Top Rated"
    },
    rating: 4.8,
    reviews: 342,
    price: 6543,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=500&h=300",
    hasVideoConsultation: false,
    tags: ["Landing Page", "Startup", "Premium"]
  },
  {
    id: 5,
    title:
      "I will create a custom website with advanced animations and interactions",
    provider: {
      name: "Michael Rodriguez",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100",
      level: "Level 2",
      badge: "dormsdots's Choice"
    },
    rating: 4.9,
    reviews: 89,
    price: 10500,
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=500&h=300",
    hasVideoConsultation: true,
    tags: ["Animation", "Interactive", "Custom"]
  },
  {
    id: 6,
    title:
      "I will design a professional portfolio website for creative professionals",
    provider: {
      name: "Emma Wilson",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100",
      level: "Top Rated",
      badge: "Top Rated"
    },
    rating: 5.0,
    reviews: 215,
    price: 7899,
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=500&h=300",
    hasVideoConsultation: false,
    tags: ["Portfolio", "Creative", "Professional"]
  },
  {
    id: 7,
    title:
      "I will develop a full-stack web application with Node.js and MongoDB",
    provider: {
      name: "David Kim",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&h=100",
      level: "Level 3",
      badge: "dormsdots's Choice"
    },
    rating: 4.8,
    reviews: 156,
    price: 12500,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&h=300",
    hasVideoConsultation: true,
    tags: ["Full-Stack", "Node.js", "MongoDB"]
  },
  {
    id: 8,
    title: "I will create a responsive website with SEO optimization",
    provider: {
      name: "Lisa Thompson",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=100&h=100",
      level: "Level 2",
      badge: "Top Rated"
    },
    rating: 4.9,
    reviews: 98,
    price: 6789,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&h=300",
    hasVideoConsultation: false,
    tags: ["SEO", "Responsive", "Optimization"]
  },
  {
    id: 9,
    title: "I will design a modern e-commerce website with WooCommerce",
    provider: {
      name: "James Wilson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100",
      level: "Top Rated",
      badge: "dormsdots's Choice"
    },
    rating: 5.0,
    reviews: 312,
    price: 8999,
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=500&h=300",
    hasVideoConsultation: true,
    tags: ["WooCommerce", "E-commerce", "WordPress"]
  },
  {
    id: 10,
    title:
      "I will create a custom website with advanced animations and interactions",
    provider: {
      name: "Sophia Martinez",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      level: "Level 3",
      badge: "Top Rated"
    },
    rating: 4.8,
    reviews: 178,
    price: 11200,
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=500&h=300",
    hasVideoConsultation: true,
    tags: ["Animation", "Interactive", "Custom"]
  },
  {
    id: 11,
    title: "I will design a professional business website with contact forms",
    provider: {
      name: "Robert Taylor",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100",
      level: "Level 2",
      badge: "dormsdots's Choice"
    },
    rating: 4.9,
    reviews: 245,
    price: 7654,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=500&h=300",
    hasVideoConsultation: false,
    tags: ["Business", "Contact Forms", "Professional"]
  },
  {
    id: 12,
    title: "I will develop a responsive website with custom CMS integration",
    provider: {
      name: "Olivia Brown",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100",
      level: "Top Rated",
      badge: "Top Rated"
    },
    rating: 5.0,
    reviews: 189,
    price: 9876,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&h=300",
    hasVideoConsultation: true,
    tags: ["CMS", "Responsive", "Custom"]
  }
];

export default function WebDesignPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredServices = services.filter((service) => {
    if (selectedCategory === "all") return true;
    return service.tags.includes(selectedCategory);
  });

  return (
    <>
      <Fsnavbar />
      <main className="min-h-screen text-black">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6]">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 z-10"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
            <div
              className={`max-w-3xl transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mt-10 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Premium Web Design Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Find the perfect web designer to bring your vision to life with
                stunning, responsive websites.
              </p>

              <div className="relative max-w-2xl">
                <input
                  type="text"
                  placeholder="Search for web design services..."
                  className="w-full py-4 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="absolute right-2 top-2.5 rounded-full bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white px-6">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "all",
                  "WordPress",
                  "React",
                  "Landing Page",
                  "E-commerce"
                ].map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    className={`${
                      selectedCategory === category
                        ? "bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white"
                        : "border-white/30 text-white hover:bg-white/10"
                    } rounded-full`}
                    onClick={() => setSelectedCategory(category)}>
                    {category === "all" ? "All Categories" : category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-black">
              {filteredServices.length} Premium Services
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-black">Sort by:</span>
              <Select defaultValue="best-selling">
                <SelectTrigger className="w-[180px] bg-white/10 border-black text-black">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="best-selling">Best Selling</SelectItem>
                  <SelectItem value="newest">Newest Arrivals</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <Card className="group overflow-hidden bg-white/5 backdrop-blur-md border-gray-200 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={300}
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white">
                      <Heart className="w-5 h-5" />
                    </Button>
                    {service.provider.badge && (
                      <div className="absolute top-2 left-2 px-2 py-1 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white text-xs rounded-full">
                        {service.provider.badge}
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src={service.provider.image}
                        alt={service.provider.name}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-white/20"
                      />
                      <div>
                        <h3 className="font-medium text-sm text-black">
                          {service.provider.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-600">
                            {service.provider.level}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-sm line-clamp-2 mb-3 text-black transition-colors">
                      {service.title}
                    </h2>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 bg-white/10 text-gray-700 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-black">
                        {service.rating}
                      </span>
                      <span className="text-gray-600">({service.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        {service.hasVideoConsultation && (
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Video className="w-3 h-3" />
                            <span>Video consultation</span>
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-600">From</span>
                        <p className="font-medium text-black">
                          ₹{service.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Web Design Process Section */}
        <div className="bg-gradient-to-b from-transparent to-[#5c3ea0]/20 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Our Web Design Process
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We follow a proven process to deliver exceptional web design
                services that meet your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Discovery
                </h3>
                <p className="text-gray-700">
                  We start by understanding your business goals, target
                  audience, and design preferences.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Planning
                </h3>
                <p className="text-gray-700">
                  We create a detailed project plan, including site structure,
                  features, and design direction.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Design
                </h3>
                <p className="text-gray-700">
                  We design your website with a focus on aesthetics, usability,
                  and brand consistency.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Development
                </h3>
                <p className="text-gray-700">
                  We build your website using the latest technologies to ensure
                  performance and responsiveness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Web Design Features Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Web Design Features
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our web design services include a comprehensive set of features
                to create powerful, effective websites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Responsive Design
                </h3>
                <p className="text-gray-700">
                  Websites that look and function perfectly on all devices, from
                  mobile phones to desktop computers.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Custom Design
                </h3>
                <p className="text-gray-700">
                  Unique designs tailored to your brand identity and business
                  objectives.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Fast Performance
                </h3>
                <p className="text-gray-700">
                  Optimized websites that load quickly and provide a smooth user
                  experience.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Security
                </h3>
                <p className="text-gray-700">
                  Secure websites with SSL certificates, regular updates, and
                  protection against threats.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Web Design Technologies Section */}
        <div className="bg-gradient-to-b from-[#5c3ea0]/20 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Technologies We Use
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We leverage the latest web technologies to build modern,
                powerful websites.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-black">
                  HTML5 & CSS3
                </h3>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-black">
                  Responsive Frameworks
                </h3>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <Laptop className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-black">JavaScript</h3>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-black">
                  Analytics Integration
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Find answers to common questions about our web design services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-4">
                <h3 className="text-xl font-semibold text-black mb-2">
                  How long does it take to complete a website?
                </h3>
                <p className="text-gray-700">
                  The timeline varies depending on the complexity of your
                  project. A simple website might take 2-4 weeks, while a more
                  complex e-commerce site could take 6-8 weeks or more.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-4">
                <h3 className="text-xl font-semibold text-black mb-2">
                  Do you offer website maintenance services?
                </h3>
                <p className="text-gray-700">
                  Yes, we offer ongoing maintenance packages to keep your
                  website secure, updated, and performing optimally after
                  launch.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-4">
                <h3 className="text-xl font-semibold text-black mb-2">
                  Will my website be mobile-friendly?
                </h3>
                <p className="text-gray-700">
                  Absolutely. All our websites are designed with a mobile-first
                  approach to ensure they look and function perfectly on all
                  devices.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-black mb-2">
                  Do you provide hosting services?
                </h3>
                <p className="text-gray-700">
                  Yes, we can recommend and set up hosting services for your
                  website. We work with reliable hosting providers to ensure
                  your site is always accessible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Online Presence?
              </h2>
              <p className="text-gray-100 mb-8">
                Connect with our expert web designers today and take the first
                step towards a stunning, responsive website that drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-purple-900 hover:bg-gray-100 px-6 py-3 rounded-full">
                  Browse All Services
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-6 py-3 rounded-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
