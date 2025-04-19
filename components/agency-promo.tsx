import { Button } from "../components/ui/button";
import Image from "next/image";

export default function AgencyPromo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl text-black font-serif mb-6">
              Seeking a <span className="italic">full suite of services?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Find a comprehensive graphic and design agency to handle it all.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-red-50 text-red-800 rounded-full">
                Visual Identity & Branding
              </span>
              <span className="px-4 py-2 bg-red-50 text-red-800 rounded-full">
                Web & App Design
              </span>
              <span className="px-4 py-2 bg-red-50 text-red-800 rounded-full">
                Marketing & Advertising
              </span>
              <span className="px-4 py-2 bg-red-50 text-red-800 rounded-full">
                & more
              </span>
            </div>
            <Button className="bg-black text-white">Browse agencies</Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 rounded-lg blur-2xl opacity-30" />
            <Image
              src="/logos/fs.png"
              alt="Agency Preview"
              width={600}
              height={400}
              className="relative rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
