"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const timelineOptions = [
  { id: "now", label: "Now" },
  { id: "soon", label: "In 1-2 weeks" },
  { id: "no-rush", label: "No rush" },
];

const companies = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
  },
  {
    name: "Glassdoor",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Glassdoor_logo.svg",
  },
];

export function HiringTimeline() {
  const [selectedOption, setSelectedOption] = useState<string>("soon");
  const [activeTab, setActiveTab] = useState<"talent" | "jobs">("talent");

  return (
    <div className="w-full max-w-3xl mx-auto p-8 rounded-2xl bg-black/80 backdrop-blur-sm text-white">
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Button
          variant={activeTab === "talent" ? "secondary" : "ghost"}
          className="w-full text-lg py-6 rounded-full hover:bg-white/20"
          onClick={() => setActiveTab("talent")}
        >
          Find talent
        </Button>
        <Button
          variant={activeTab === "jobs" ? "secondary" : "ghost"}
          className="w-full text-lg py-6 rounded-full hover:bg-white/20"
          onClick={() => setActiveTab("jobs")}
        >
          Browse jobs
        </Button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl text-center mb-6">How soon are you hiring?</h2>
        <div className="grid grid-cols-3 gap-4">
          {timelineOptions.map((option) => (
            <Button
              key={option.id}
              variant={selectedOption === option.id ? "secondary" : "outline"}
              className={`w-full py-6 rounded-full text-lg ${
                selectedOption === option.id
                  ? "bg-white/20 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
        {companies.map((company) => (
          <div
            key={company.name}
            className="relative w-32 h-12 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}