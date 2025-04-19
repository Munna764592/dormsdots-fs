import { ArrowRight, Star, Clock, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import Image from "next/image";

export default function SellingProposition() {
  const features = [
    {
      icon: Star,
      title: "Proof of quality",
      description:
        "Check any pro's work samples, client reviews, and identity verification."
    },
    {
      icon: Clock,
      title: "Fast delivery",
      description:
        "Find the right freelancer to begin working on your project within minutes."
    },
    {
      icon: Shield,
      title: "Safe and secure",
      description: "Your payment is held secure until you approve the work."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-green-50" />

      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-black">
              A whole world of freelance talent at your fingertips
            </h2>
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl text-black font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button className="mt-8 text-black hover:text-white">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-green-200 rounded-lg blur-2xl opacity-30 animate-pulse" />
            <Image
              height={500}
              width={500}
              src="/logos/rb_3824.png"
              alt="Freelance Talent"
              className="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
