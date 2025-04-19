import { Button } from "../components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-[#1a1b1d] h-[500px] sm:h-[600px] md:h-[680px]">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline>
          <source
            src="http://res.cloudinary.com/depqvqscd/video/upload/v1736618451/btbl1pwnmbsxgd24buc1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="relative container mx-auto px-4 pt-16 sm:pt-24 md:pt-32">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Find the right freelance service, right away
          </h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
            <span className="text-sm sm:text-base">Popular:</span>
            {[
              { name: "Website Design", href: "/webdesign" },
              { name: "Social Media Marketing", href: "/socialmediamarketing" },
              { name: "Logo Design", href: "/logodesign" },
              { name: "AI Services", href: "/aiservices" }
            ].map((item, index) => (
              <Link href={item.href} key={index}>
                <Button
                  variant="outline"
                  className="text-white bg-transparent border-white hover:bg-white/10 text-xs sm:text-sm py-1 sm:py-2">
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
