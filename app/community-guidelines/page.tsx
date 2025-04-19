"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CommunityGuidelines() {
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
              Community Guidelines
            </h1>
            <hr className="my-2 md:my-4" />
            <section className="text-sm md:text-lg space-y-4 md:space-y-6 text-justify">
              <p>
                Welcome to dormsdots! These Community Guidelines are designed to
                foster a safe, respectful, and inspiring environment for all
                users. By participating on our platform, you agree to uphold
                these principles and contribute positively to our community.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Respect and Inclusion
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Treat all users with kindness, dignity, and respect.</li>
                <li>
                  Discrimination, hate speech, or harassment of any kind is
                  strictly prohibited.
                </li>
                <li>Celebrate diversity and create inclusive interactions.</li>
              </ul>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Authenticity and Integrity
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Only share truthful, honest, and original content.</li>
                <li>
                  Avoid impersonation or misrepresentation of your identity.
                </li>
                <li>Give proper credit where it's due. Do not plagiarize.</li>
              </ul>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Safety and Responsibility
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Refrain from uploading harmful, threatening, or illegal
                  content.
                </li>
                <li>
                  Report any suspicious behavior or unsafe content to our
                  support team.
                </li>
                <li>Always prioritize the well-being of the community.</li>
              </ul>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Constructive Collaboration
              </h4>
              <p>
                Engage in meaningful discussions and share feedback
                respectfully. Whether you're giving or receiving critique, aim
                to uplift and support each other's growth.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Enforcement
              </h4>
              <p>
                dormsdots reserves the right to review, remove, or restrict
                access to any content or user that violates these guidelines.
                Continued breaches may result in account suspension or removal.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Updates to Guidelines
              </h4>
              <p>
                These guidelines may be updated over time to reflect evolving
                community standards. We encourage users to review them regularly
                and stay aligned with our shared values.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Contact Us
              </h4>
              <p>
                If you have questions, concerns, or wish to report a violation,
                please contact us at:
              </p>
              <a
                className="text-blue-600 underline"
                href="mailto:dormsdots@gmail.com">
                dormsdots@gmail.com
              </a>
              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Acknowledgment
              </h4>
              <p>
                By using dormsdots, you acknowledge that you have read and
                understood these Terms and Conditions and agree to be bound by
                them.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}