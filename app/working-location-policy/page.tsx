"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WorkingLocationPolicy() {


  return (
    <>
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
              Working Location Policy
            </h1>
            <hr className="my-2 md:my-4" />
            <section className="text-sm md:text-lg space-y-4 md:space-y-6 text-justify">
              <p>
                This Working Location Policy outlines the guidelines and
                expectations for employees regarding their place of work. The
                goal of this policy is to ensure a balance between operational
                efficiency and employee flexibility.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Scope of the Policy
              </h4>
              <p>
                This policy applies to all full-time, part-time, contract, and
                freelance employees who work with or for dormsdots. It covers
                remote work, hybrid arrangements, and office-based roles.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Types of Work Arrangements
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Remote Work:</strong> Employees may work from home or
                  another approved location full-time.
                </li>
                <li>
                  <strong>Hybrid Work:</strong> A combination of on-site and
                  remote work as per department or manager approval.
                </li>
                <li>
                  <strong>On-Site Work:</strong> Employees work from the
                  designated office location on all working days.
                </li>
              </ul>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Expectations and Responsibilities
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Ensure a stable internet connection and a quiet working
                  environment for remote or hybrid setups.
                </li>
                <li>
                  Be available during core working hours and attend meetings as
                  required.
                </li>
                <li>
                  Comply with data security, confidentiality, and IT usage
                  guidelines.
                </li>
              </ul>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Changing Work Location
              </h4>
              <p>
                Any change in work location must be communicated and approved in
                advance by the reporting manager. Sudden or unauthorized changes
                may affect work continuity and performance assessments.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Equipment and Support
              </h4>
              <p>
                dormsdots may provide necessary equipment for remote work, such
                as laptops or accessories. Employees are responsible for
                maintaining the equipment in good condition and reporting issues
                promptly.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Review and Updates
              </h4>
              <p>
                This policy is reviewed periodically and may be updated based on
                business needs, technology changes, or legal requirements.
                Employees will be informed of any significant changes.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Contact for Clarifications
              </h4>
              <p>
                For any questions or clarifications regarding this Working
                Location Policy, please contact the HR department or your
                manager.
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
                By continuing your employment with dormsdots, you acknowledge
                that you have read, understood, and agreed to comply with the
                guidelines stated in this Working Location Policy.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
