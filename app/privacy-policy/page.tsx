"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Page() {


  return (
    <>
      <nav className="w-full navabout flex justify-center items-center text-4xl flex-col py-4 bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] to-[#d1c4f6] sm:py-4 lg:py-8">
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

        <h3 className="text-xs text-white sm:text-xs md:text-sm lg:text-xl text-center sm:text-left">
          Grow Your Passion Into Profit.
        </h3>
      </nav>
      <div className="flex justify-center">
        <div className="text-sm md:text-lg py-2 md:py-6 lg:py-8 w-11/12 md:w-5/6 lg:w-2/3 text-black text-justify mb-10 font-light leading-relaxed">
          <h1 className="text-3xl font-medium mb-4 md:text-3xl lg:text-4xl">
            Privacy Policy
          </h1>
          <hr className="my-4" />

          <h3 className="font-semibold text-lg underline">Privacy statement</h3>
          <div>
            Welcome to dormsdots! We care about your privacy and are committed
            to protecting your personal data. This privacy statement will inform
            you how we handle your personal data, your privacy rights, and how
            the law protects you. Please read this privacy statement carefully
            before using our Services.
          </div>

          <h3 className="text-xl md:text-2xl font-semibold py-4">
            1. Information We Collect
          </h3>

          <h4 className="font-semibold underline mb-2">
            a. Personal Information You Provide
          </h4>
          <ul>
            <li>
              {" "}
              Account Registration: When you create an account, we collect your
              name, email address, phone number, and password.
            </li>
            <li>
              {" "}
              Profile and Listings: If you create a listing, we collect details
              about the item you're listing, such as item photos, description,
              price, and location.
            </li>
            <li>
              {" "}
              Communication: When you contact us or communicate with other users
              through dormsdots, we collect the information you provide, such as
              messages or support requests.
            </li>
          </ul>

          <h4 className="font-semibold underline my-2">
            b. Automatically Collected Information
          </h4>
          <ul>
            <li>
              {" "}
              Device and Usage Information: We collect information about your
              device, including your IP address, browser type, operating system,
              and usage data (such as pages visited, links clicked, etc.).
            </li>
            <li>
              {" "}
              Cookies and Tracking Technologies: We use cookies, web beacons,
              and similar technologies to gather information about your
              interactions with our website and improve user experience. For
              more details, see our Cookie Policy.
            </li>
          </ul>

          <h4 className="font-semibold underline my-2">
            c. Information from Third Parties
          </h4>
          <ul>
            <li>
              {" "}
              Social Media Integration: If you sign in through Google or
              Facebook, we may collect your social profile data (such as name
              and profile picture), based on your consent and privacy settings
              with the social media provider.
            </li>
            <li>
              {" "}
              Payment Information: If you make a transaction through dormsdots,
              payment information will be handled by our third-party payment
              processors and is subject to their privacy policies. We do not
              store sensitive payment data.
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold py-4">
            2. How We Use Your Information
          </h3>
          <ul>
            <li>
              {" "}
              Provide and Improve Our Services: To manage your account, enable
              you to create listings, facilitate transactions, and improve our
              platform.
            </li>
            <li>
              {" "}
              Personalize User Experience: To show relevant listings, recommend
              products, and display advertisements.
            </li>
            <li>
              {" "}
              Communicate with You: To send notifications, updates, and
              promotional messages (you may opt out of marketing communications
              at any time).
            </li>
            <li>
              {" "}
              Ensure Safety and Security: To protect users against fraud,
              enforce our Terms of Service, and respond to legal requests.
            </li>
            <li>
              {" "}
              Analytics and Research: To understand user behavior and improve
              our platform’s functionality and user experience.
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold py-4">
            3. Sharing of Your Information
          </h3>
          <ul>
            <li>
              {" "}
              With Other Users: Basic profile information (e.g., name, location)
              is visible to other users in the context of listings and
              transactions.
            </li>
            <li>
              {" "}
              Third-Party Service Providers: We share information with service
              providers who help us operate dormsdots, such as email, hosting
              services, and analytics providers.
            </li>
            <li>
              {" "}
              For Legal Purposes: We may disclose information as required by
              law, such as in response to a court order or law enforcement
              request, or to protect our rights, safety, or property.
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold py-4 text-start">
            4. Cookies and Tracking Technologies
          </h3>
          <div>
            We use cookies and similar tracking technologies to improve user
            experience, analyze site usage, and show relevant ads. You can
            control or disable cookies through your browser settings; however,
            this may impact some features of dormsdots.
          </div>

          <h3 className="text-xl md:text-2xl font-semibold py-4">
            5. Data Security
          </h3>
          <div>
            We take data security seriously and implement industry-standard
            security measures to protect your information. However, no method of
            transmission or storage is completely secure, so we cannot guarantee
            absolute security.
          </div>

          <h3 className="text-xl md:text-2xl font-semibold py-4">
            6. Data Retention
          </h3>
          <div>
            We retain your information as long as your account is active or as
            necessary to provide our services. If you delete your account, we
            will delete your data, except where we are required to retain it for
            legal purposes.
          </div>

          <h3 className="text-xl md:text-2xl font-semibold py-4">
            7. Your Rights and Choices
          </h3>
          <ul>
            <li>
              {" "}
              Access and Correction: You may access or correct your personal
              information by updating your profile or contacting us.
            </li>
            <li>
              {" "}
              Deletion: You may delete your account, and we will delete your
              information, except where retention is required by law.
            </li>
            <li>
              {" "}
              Opt-Out of Marketing: You may unsubscribe from promotional emails
              by following the unsubscribe link in the email or contacting us.
            </li>
            <li>
              {" "}
              Data Portability (if applicable): You may request a copy of your
              personal data in a portable format.
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold py-4">
            8. Children's Privacy
          </h3>
          <div>
            dormsdots is not intended for use by children under the age of 13.
            We do not knowingly collect information from children. If we become
            aware of any data collected from children, we will take steps to
            delete it.
          </div>

          <h3 className="text-xl md:text-2xl font-semibold py-4">
            9. International Users
          </h3>
          <div>
            If you are accessing dormsdots from outside India, please be aware
            that your information may be transferred to, stored, and processed
            in a country that may not offer the same level of data protection as
            your home country. By using our site, you consent to this transfer
            and processing of data.
          </div>

          <h3 className="text-xl md:text-2xl font-semibold py-4">
            10. Changes to This Privacy Policy
          </h3>
          <div>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the updated policy on this page and
            updating the “Last Updated” date. Your continued use of dormsdots
            after any changes constitutes your acceptance of the updated policy.
          </div>

          <h3 className="text-xl md:text-2xl font-semibold py-4">
            11. Contact Us
          </h3>
          <div>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </div>
          <ul>
            <h3 className="mt-2">
              {" "}
              <span className="font-semibold">dormsdots Support Team</span>
            </h3>
            <a
              className="text-blue-500 underline"
              href="mailto:dormsdots@gmail.com">
              dormsdots@gmail.com
            </a>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
