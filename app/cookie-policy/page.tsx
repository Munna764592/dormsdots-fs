"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookiePolicy() {
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
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-colors duration-[1.5s]"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.15), transparent 80%)`
        }}
      />
      <div className="text-black">
        <nav className="w-full flex justify-center items-center text-4xl flex-col py-4 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] text-white sm:py-4 lg:py-8">
          <Link href="/">
            <div className="w-full flex justify-center">
              <Image
                src="/logos/logoghg.png"
                alt="Logo"
                className="max-w-[70%] sm:max-w-[80%] md:max-w-[90%] lg:max-w-[100%] h-auto"
                width={200}
                height={200}
                unoptimized
              />
            </div>
          </Link>
          <h2 className="text-white my-4 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left">
            Put Your Talent To Work
          </h2>
          <h2 className="text-xs text-white sm:text-xs md:text-sm lg:text-xl text-center sm:text-left">
            Grow Your Passion Into Profit.
          </h2>
        </nav>

        <div className="flex justify-center py-2 font-light md:py-6 lg:py-8">
          <div className="w-11/12 my-4 md:w-5/6 lg:w-2/3">
            <h1 className="text-3xl font-medium mb-4 md:text-3xl lg:text-4xl">
              Cookie Policy
            </h1>
            <hr className="my-2 md:my-4" />
            <section className="text-sm md:text-lg space-y-4 md:space-y-6 text-justify">
              <p>
                This Cookie Policy explains how dormsdots uses cookies and
                similar technologies to recognize you when you visit our
                website. It explains what these technologies are and why we use
                them, as well as your rights to control their use.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                What Are Cookies?
              </h4>
              <p>
                Cookies are small data files that are placed on your computer or
                mobile device when you visit a website. Cookies are widely used
                by website owners to make their websites work, or to work more
                efficiently, as well as to provide reporting information.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Why We Use Cookies
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  To ensure website functionality and improve performance.
                </li>
                <li>
                  To remember user preferences and settings during and between
                  visits.
                </li>
                <li>To analyze website traffic and usage patterns.</li>
                <li>To personalize content and ads based on your interests.</li>
              </ul>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Types of Cookies We Use
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for basic site
                  functionality.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Help us understand how
                  visitors interact with our website.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> Remember choices you
                  make to enhance your experience.
                </li>
                <li>
                  <strong>Targeting Cookies:</strong> Used to deliver relevant
                  ads and track ad campaign effectiveness.
                </li>
              </ul>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Managing Cookies
              </h4>
              <p>
                You can manage or delete cookies through your browser settings.
                Please note that disabling cookies may affect your experience on
                our website. You can also opt out of certain third-party cookies
                through online tools such as the Digital Advertising Alliance.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Third-Party Cookies
              </h4>
              <p>
                In some cases, we may use third-party cookies provided by
                trusted partners. These cookies may track things such as how
                long you spend on the site or the pages you visit, helping us to
                understand how we can improve your experience.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Updates to This Policy
              </h4>
              <p>
                We may update this Cookie Policy from time to time in order to
                reflect changes to our practices or for other operational,
                legal, or regulatory reasons. Please review this page regularly
                to stay informed.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Contact Us
              </h4>
              <p>
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us at:
              </p>
              <a
                className="text-blue-600 underline"
                href="mailto:dormsdots@gmail.com">
                dormsdots@gmail.com
              </a>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Consent
              </h4>
              <p>
                By continuing to use our site, you consent to our use of cookies
                as described in this Cookie Policy.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
