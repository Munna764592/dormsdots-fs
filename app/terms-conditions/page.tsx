"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TermsAndConditions() {

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
              Terms and Conditions
            </h1>
            <hr className="my-2 md:my-4" />
            <section className="text-sm md:text-lg space-y-4 md:space-y-6 text-justify">
              <p>
                Welcome to dormsdots! These Terms and Conditions outline the
                rules and regulations for the use of our platform. By accessing
                and using dormsdots, you agree to comply with these terms. If
                you disagree with any part of these terms, please discontinue
                use of the platform.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                User Responsibilities
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Users must be registered college students to access the
                  platform.
                </li>
                <li>
                  Ensure all posted items and descriptions are accurate,
                  truthful, and lawful.
                </li>
                <li>
                  Respect other users and avoid any form of harassment or
                  misconduct.
                </li>
              </ul>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Transactions and Payments
              </h4>
              <p>
                dormsdots acts as a facilitator and is not responsible for the
                actual transactions between buyers and sellers. Ensure all
                transactions are conducted in a safe and secure manner. Users
                are solely responsible for resolving disputes arising from their
                transactions.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Prohibited Activities
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Engaging in fraudulent or deceptive practices.</li>
                <li>Uploading harmful or malicious content.</li>
                <li>
                  Using the platform for any illegal or unauthorized purpose.
                </li>
                <li>Violating intellectual property rights.</li>
              </ul>
              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Privacy and Data Security
              </h4>
              <p>
                We value your privacy and strive to protect your personal
                information. By using dormsdots, you consent to our Privacy
                Policy, which outlines how we collect, use, and store your data.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Changes to Terms
              </h4>
              <p>
                dormsdots reserves the right to modify these Terms and
                Conditions at any time. Changes will be effective immediately
                upon posting. Continued use of the platform constitutes
                acceptance of the updated terms.
              </p>

              <h4 className="text-xl md:text-2xl font-semibold mt-4">
                Contact Us
              </h4>
              <p>
                If you have any questions or concerns about these Terms and
                Conditions, feel free to contact us at
              </p>
              <a className="text-blue-600 underline" href="mailto:dormsdots@gmail.com">dormsdots@gmail.com</a>

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
