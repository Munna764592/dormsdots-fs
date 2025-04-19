"use client";
import { useState, useEffect } from "react";
import { TrendingUp, Globe, Star, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      value: "50M+",
      label: "Transactions",
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      description: "Processed globally",
      image: "/stats/transactions.jpg"
    },
    {
      value: "160+",
      label: "Countries",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      description: "Worldwide presence",
      image: "/stats/globe.jpg"
    },
    {
      value: "5.0/5",
      label: "Avg. Rating",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      description: "Customer satisfaction",
      image: "/stats/rating.jpg"
    },
    {
      value: "95%",
      label: "Success Rate",
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      description: "Project completion",
      image: "/stats/success.jpg"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/stats/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Premium Performance
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our platform delivers exceptional results with industry-leading
            metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative opacity-0 translate-y-4 animate-fade-in-up transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}>
              <div className="relative h-full overflow-hidden rounded-lg group">
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
                </div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:border-purple-500/50 transition-colors">
                    {stat.icon}
                  </div>

                  <div className="text-4xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-[#5c3ea0] group-hover:via-[#7857c3] group-hover:to-[#d1c4f6] transition-all text-white">
                    {stat.value}
                  </div>

                  <div className="text-xl font-medium text-white/90 mb-2">
                    {stat.label}
                  </div>

                  <div className="text-sm text-white/70">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
