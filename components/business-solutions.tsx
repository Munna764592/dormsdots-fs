import { Button } from "../components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function ProgrammingTechSolutions() {
  return (
    <section className="bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="font-normal">Programming & Tech</span>
            </h2>
            <h3 className="text-3xl font-bold mb-6">
              Advanced solutions for developers and tech teams
            </h3>
            <ul className="space-y-6 mb-8">
              {[
                "Collaborate with experienced developers and engineers",
                "Find the perfect match for your coding and technical needs",
                "Streamline development with powerful tools and integrations"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-white mt-1" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-black text-lg px-8 py-6 text-white">
              Explore dormsdots tech solutions
            </Button>
          </div>
          <div>
            <Image
              height={500}
              width={500}
              src="/logos/rb_2785.png"
              alt="Programming and Tech Solutions"
              className="rounded-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
