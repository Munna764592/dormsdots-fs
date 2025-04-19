"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
// import SpinnerLoader from "./SpinnerLoader";
import { Linkedin, Instagram, Facebook } from "lucide-react";
// import { useAuth } from "../context/AuthContext";

// Define types for auth context
interface AuthContextType {
  setLoading: (loading: boolean) => void;
  loading: boolean;
  LoginModalOpen: (open: boolean) => void;
  isLoggedIn: boolean;
}

// Define the useAuth hook type
const useAuth = (): AuthContextType => {
  // This is a placeholder for the actual implementation
  // Replace with your actual auth context implementation
  return {
    setLoading: () => {},
    loading: false,
    LoginModalOpen: () => {},
    isLoggedIn: false,
  };
};

const Footer: React.FC = () => {
  // const { setLoading, loading, LoginModalOpen, isLoggedIn } = useAuth();
  const currentYear: number = new Date().getFullYear();

  const handleLinkClick = async (): Promise<void> => {
    // if (!loading) {
    //   setLoading(true);
    //   await new Promise((resolve) => setTimeout(resolve, 2000));
    // }
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    // handleLinkClick();
    // if (!isLoggedIn) {
    //   event.preventDefault();
    //   LoginModalOpen(true);
    // }
  };

  return (
    <footer className=" bg-gradient-to-b from-[#2c106a] to-[#1a0842] text-gray-300 pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <Link href="/">
            <Image
              src="/logos/logoghg.png"
              alt="Logo"
              width={130}
              height={130}
              className="max-w-[30%] sm:max-w-[50%] md:max-w-[90%] lg:max-w-[100%] h-auto"
              unoptimized
            />
          </Link>
          {/* About Section */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aboutus" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/dormsdots"
                  target="_blank"
                  className="hover:text-white">
                  Community Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/community-guidelines" className="hover:text-white">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white">
                  Creator Network
                </Link>
              </li>
              <li>
                <Link
                  href="/working-location-policy"
                  className="hover:text-white">
                  Press & News
                </Link>
              </li>
              <li>
                <Link href="/helpcenter" className="hover:text-white">
                  Add a Friends
                </Link>
              </li>
              <li>
                <Link href="/helpcenter?id=safety" className="hover:text-white">
                  Invertor contact
                </Link>
              </li>
              <li>
                <Link href="/community-guidelines" className="hover:text-white">
                  Trust & Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Consumer Policy */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">POLICY</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/community-guidelines" className="hover:text-white">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/working-location-policy"
                  className="hover:text-white">
                  Working Location Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-white">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy & Security
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-white">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-gray-400 font-medium mb-2">Mail Us:</h3>
              <p className="text-sm">
                dormsdots,
                <br />
                Delhi, 110042,
                <br />
                New Delhi, India
              </p>
              <Link
                href="mailto:dormsdots@gmail.com"
                title="Send us an email"
                className="text-blue-500 hover:text-blue-700 underline text-sm transition duration-300">
                dormsdots@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-700 pt-6 pb-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-400">Follow us:</span>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/dormsdots"
              className="hover:text-white">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">Linkedin</span>
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/dormsdots"
              className="hover:text-white">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61569711423612"
              className="hover:text-white">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              target="_blank"
              href="https://x.com/here_Munna_07"
              className="hover:text-white">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-white transition"
              />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="/sell"
                className="text-sm hover:text-white"
                onClick={handleClick}>
                Become a Seller
              </Link>
              <Link
                href="/blogs"
                className="text-sm hover:text-white"
                onClick={handleLinkClick}>
                Stories
              </Link>
              <Link
                href="/wishlist"
                className="text-sm hover:text-white"
                onClick={handleLinkClick}>
                Contact Us
              </Link>
              <Link href="/helpcenter" className="text-sm hover:text-white">
                Help Center
              </Link>
            </div>
            <Link className="cursor-default" href="/blogcreatexyz">
              <div className="text-sm">
                © {currentYear} dormsdots.com, All rights reserved
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
