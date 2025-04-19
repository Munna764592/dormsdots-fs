"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      company: "Luxe Ventures",
      image: "/logos/users_391194.png",
      content:
        "The premium features have transformed how we manage our business. The ROI has been exceptional, and the support team is always responsive to our needs.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateTech Solutions",
      image: "/logos/hr.png",
      content:
        "As a tech company, we need reliable and scalable solutions. The premium platform delivers exactly what we need with advanced features that keep us ahead of the competition.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director",
      company: "Global Brands Inc.",
      image: "/logos/group_2043173.png",
      content:
        "The analytics and reporting capabilities have given us insights we never had before. It's like having an entire analytics team at your fingertips.",
      rating: 5
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Premium background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 opacity-10 bg-[url('/patterns/dots.svg')] bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-transparent to-blue-100/30"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] bg-clip-text">
            Premium Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have upgraded to our
            premium service
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

            <div className="relative bg-white p-8 md:p-12 border border-gray-100">
              {/* Premium accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white"></div>

              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src={testimonials[activeSlide].image}
                      alt={testimonials[activeSlide].name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[activeSlide].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  <Quote className="w-8 h-8 text-purple-200 mb-4" />

                  <blockquote className="text-xl md:text-xl text-gray-700 mb-6 leading-relaxed">
                    "{testimonials[activeSlide].content}"
                  </blockquote>

                  <div className="border-t border-gray-400 pt-4">
                    <p className="font-bold text-lg text-black">
                      {testimonials[activeSlide].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[activeSlide].role},{" "}
                      <span className="text-purple-700 font-medium">
                        {testimonials[activeSlide].company}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (isAnimating) return;
                      setIsAnimating(true);
                      setActiveSlide(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeSlide
                        ? "bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                <button
                  onClick={handlePrevSlide}
                  className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:shadow-xl border border-gray-100">
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:shadow-xl border border-gray-100">
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
