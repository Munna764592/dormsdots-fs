"use client";

import {
  ChevronLeft,
  ChevronRight,
  Paintbrush,
  Pencil,
  Laptop,
  Home,
  Bot,
  Album,
  Presentation,
  ChevronsLeftRightEllipsis,
  Gamepad2,
  TrendingUp,
  Container,
  Palette
} from "lucide-react";
import { useRef } from "react";

interface Category {
  icon: JSX.Element;
  title: string;
  highlight?: boolean;
}

const categories: Category[] = [
  {
    icon: <Paintbrush className="w-6 h-6 text-gray-600" />,
    title: "Logo Design"
  },
  {
    icon: <Album className="w-6 h-6 text-gray-600" />,
    title: "Business Cards & Stationery"
  },
  {
    icon: <Palette className="w-6 h-6 text-gray-600" />,
    title: "Illustration",
    highlight: true
  },
  {
    icon: <Paintbrush className="w-6 h-6 text-gray-600" />,
    title: "Brochure Design"
  },
  {
    icon: <Paintbrush className="w-6 h-6 text-gray-600" />,
    title: "Flyer Design"
  },
  {
    icon: <Presentation className="w-6 h-6 text-gray-600" />,
    title: "Presentation Design"
  },
  {
    icon: <ChevronsLeftRightEllipsis className="w-6 h-6 text-gray-600" />,
    title: "Web Development"
  },
  {
    icon: <Laptop className="w-6 h-6 text-gray-600" />,
    title: "WordPress"
  },
  {
    icon: <Laptop className="w-6 h-6 text-gray-600" />,
    title: "Mobile App Development"
  },
  {
    icon: <Gamepad2 className="w-6 h-6 text-gray-600" />,
    title: "Game Development"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-gray-600" />,
    title: "Data Analysis"
  },
  {
    icon: <Laptop className="w-6 h-6 text-gray-600" />,
    title: "Database Design"
  },
  {
    icon: <Container className="w-6 h-6 text-gray-600" />,
    title: "DevOps"
  },
  {
    icon: <Home className="w-6 h-6 text-gray-600" />,
    title: "Architecture & Interior Design"
  },
  {
    icon: <Bot className="w-6 h-6 text-gray-600" />,
    title: "AI Artists"
  }
];

export default function PopularCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-[#404145]">
            Graphics & Development
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border text-black hover:bg-gray-100">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border text-black hover:bg-gray-100">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-none items-center w-[300px] p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex h-[40px] items-center gap-4">
                <span>{category.icon}</span>
                <div className="flex-1 justify-between">
                  <h3
                    className={` font-medium ${
                      category.highlight ? "text-purple-600" : "text-[#404145]"
                    }`}>
                    {category.title}
                  </h3>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
