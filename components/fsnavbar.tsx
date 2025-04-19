"use client";

import Link from "next/link";
import { Button } from "../components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
// import { Tooltip } from "@nextui-org/tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faWandMagicSparkles,
  faMagnifyingGlass,
  faEgg,
  faMessage,
  faBowlingBall,
  faCircle,
  faLocation,
  faLocationDot,
  faRightFromBracket,
  faHandHoldingHeart
} from "@fortawesome/free-solid-svg-icons";

// Define types for user data
interface UserData {
  uid?: string;
  displayName?: string;
  photoURL?: string;
}

// Define types for auth context
interface AuthContextType {
  isLoggedIn: boolean;
  LoginModalOpen: (open: boolean) => void;
  userData: UserData | null;
  newmsg: number;
  logout: () => void;
}

// Define props for UserProfile component
interface UserProfileProps {
  toggleMenu: () => void;
  hamOpen: boolean;
  handleLinkClick: () => void;
  userData?: UserData | null;
  logout?: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({
  toggleMenu,
  hamOpen,
  handleLinkClick,
  userData,
  logout
}) => {
  //   const { logout, userData } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };
  const clickEvent = (): void => {
    handleLinkClick();
    toggleMenu();
  };

  const eventClickt = (): void => {
    toggleDropdown();
    handleLinkClick();
  };

  return (
    <div className="relative inline-block text-left mr-6">
      {/* <Tooltip
        classNames={{
          base: "bg-gray-800 text-white text-sm px-2 rounded shadow-lg"
        }}
        content="Profile"> */}
      <div className="lg:block hidden">
        <button
          type="button"
          className="flex items-center focus:outline-none border border-gray-700 rounded-full"
          onClick={toggleDropdown}>
          {imageError || !userData?.photoURL ? (
            <div
              style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
              className="h-10 w-10 text-xl flex justify-center items-center bg-gray-800 text-gray-500 rounded-full">
              <FontAwesomeIcon icon={faUser} />
            </div>
          ) : (
            <Image
              width={200}
              height={200}
              src={userData?.photoURL}
              alt="User Profile"
              className="w-10 exclude-styles h-10 rounded-full"
              onError={() => setImageError(true)}
            />
          )}
        </button>
      </div>
      {/* </Tooltip> */}
      <div
        className={`py-1 block lg:hidden transition duration-300 ${
          hamOpen ? "opacity-100" : "opacity-0 hidden"
        }`}
        role="menu">
        <div className="flex items-center px-0 lg:px-4 py-2 text-gray-700 text-sm">
          {imageError || !userData?.photoURL ? (
            <div
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              }}
              className="h-10 w-10 text-xl flex justify-center items-center bg-gray-800 text-gray-500 rounded-full mr-2">
              <FontAwesomeIcon icon={faUser} />
            </div>
          ) : (
            <Image
              width={200}
              height={200}
              src={userData?.photoURL}
              alt="User Profile"
              className="w-10 h-10 exclude-styles rounded-full mr-2"
              onError={() => setImageError(true)}
            />
          )}
          <h3 className="lg:w-20 lg:truncate">{userData?.displayName}</h3>
        </div>
        <Link
          onClick={() => clickEvent()}
          href="/profile"
          className="flex items-center px-0 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <div className="wishlist mr-2 lg:mr-5 h-10 w-10 rounded-full flex items-center justify-center text-gray-50">
            <FontAwesomeIcon className="text-xl" icon={faUser} />
          </div>{" "}
          View Profile
        </Link>
        <button
          onClick={() => {
            if (logout) logout();
          }}
          className="flex px-0 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left items-center">
          <div className="wishlist mr-2 lg:mr-5 h-10 w-10 rounded-full flex items-center justify-center text-gray-50">
            <FontAwesomeIcon className="text-xl" icon={faRightFromBracket} />
          </div>
          <div>Logout</div>
        </button>
      </div>
      {isOpen && (
        <div
          style={{ right: "-10px" }}
          className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
          <div className="py-1" role="menu">
            {/* <div className="flex items-center px-4 py-2 text-gray-700 text-sm">
              {imageError || !userData?.photoURL ? (
                <div
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                  }}
                  className="h-10 w-10 text-xl flex justify-center items-center bg-gray-800 text-gray-500 rounded-full mr-2">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              ) : (
                <Image
                  width={200}
                  height={200}
                  src={userData?.photoURL}
                  alt="User Profile"
                  className="w-10 exclude-styles h-10 rounded-full mr-2"
                  onError={() => setImageError(true)}
                />
              )}
              <h3 className="w-20 truncate">{userData?.displayName}</h3>
            </div> */}
            <div className="px-4">
              <hr />
            </div>
            <Link
              onClick={eventClickt}
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              View Profile
            </Link>
            {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Settings
                        </a> */}
            <button
              //   onClick={logout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Define the useAuth hook type
const useAuth = (): AuthContextType => {
  // This is a placeholder for the actual implementation
  // Replace with your actual auth context implementation
  return {
    isLoggedIn: false,
    LoginModalOpen: () => {},
    userData: null,
    newmsg: 0,
    logout: () => {}
  };
};

const Fsnavbar: React.FC = () => {
  const { isLoggedIn, LoginModalOpen, userData, newmsg, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleMenu = (): void => {
    const width = window.innerWidth;
    if (width < 1024) {
      setIsOpen(!isOpen);
    }
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = (): void => {
    setIsSearchOpen(!isSearchOpen);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Handle search submission here
    console.log("Searching for:", searchQuery);
    // You can add your search logic here
  };

  const handleLinkClick = async (): Promise<void> => {
    // if (!loading) {
    // //   setLoading(true);
    //   await new Promise((resolve) => setTimeout(resolve, 2000));
    // }
  };

  //   useEffect(() => {
  //       setLoading(false)
  //       const hideNavbarRoutes = ['/sell', '/aboutus', '/pp', '/tc', '/fs'];
  //       const isNotFound = pathname === undefined;
  //       const shouldHideNavbar = hideNavbarRoutes.includes(pathname) || isNotFound;
  //       setShouldHideNavbar(shouldHideNavbar);
  //   }, [pathname]);

  const handleClick = (event: React.MouseEvent): void => {
    // if (!isLoggedIn) {
    //   event.preventDefault();
    //   LoginModalOpen(true);
    // }
    // handleLinkClick();
    toggleMenu();
  };

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/30 backdrop-blur-md" : "bg-transparent"
      }`}>
      {/* Top Bar - Logo and Search */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              className="exclude-styles max-w-[60%] sm:max-w-[70%] md:max-w-[80%] lg:max-w-[100%] h-auto"
              src={isScrolled ? "/logos/logo.png" : "/logos/logo.png"}
              alt="Logo"
              width={100}
              height={100}
              unoptimized
              title="dormsdots"
            />
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-xl mx-4">
            {isScrolled ? (
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="What service are you looking for today?"
                  className="w-full py-2 px-4 pr-10 rounded-md border border-gray-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-300 focus:bg-white/90 transition-all duration-300 shadow-sm"
                />
                <Search
                  className="absolute right-3 top-2.5 text-gray-500"
                  size={20}
                />
              </div>
            ) : (
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="What service are you looking for today?"
                  className="w-full py-2 px-4 pr-10 rounded-md border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30 transition-all duration-300 shadow-sm"
                />
                <Search
                  className="absolute right-3 top-2.5 text-white/70"
                  size={20}
                />
              </div>
            )}
          </div>

          {/* Mobile Search Icon */}
          <div className="md:hidden flex items-center">
            <button
              className={`${isScrolled ? "text-black" : "text-white"} p-2`}
              aria-label="Search"
              onClick={toggleSearch}>
              <Search size={20} />
            </button>
          </div>

          {/* User Actions */}
          <div className="flex items-center">
            {isLoggedIn ? (
              <div className="flex items-center">
                <Link
                  href={`/chats/yourmessage/${userData?.uid}`}
                  className="hidden md:flex items-center mr-4">
                  <div className="wishlist h-10 w-10 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="text-xl cursor-pointer text-gray-50"
                    />
                  </div>
                </Link>

                <UserProfile
                  handleLinkClick={handleLinkClick}
                  toggleMenu={toggleMenu}
                  hamOpen={isOpen}
                  userData={userData}
                  logout={logout}
                />
              </div>
            ) : (
              <button
                className="hidden md:block login-btn rounded mr-2"
                // onClick={() => LoginModalOpen(true)}
              >
                Login
              </button>
            )}

            {/* Hamburger Menu Button */}
            <button
              className="md:hidden p-2 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu">
              {isMobileMenuOpen ? (
                <X
                  className={`h-6 w-6 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Bottom Bar - Navigation Links */}
        <div className="hidden md:flex items-center justify-between h-12 border-t border-gray-200/20">
          <nav className="flex items-center space-x-6">
            <Link
              href="/business"
              className={`text-sm font-medium ${
                isScrolled ? "text-black" : "text-[#ffffff]"
              }`}>
              Business
            </Link>
            <Link
              href="/explore"
              className={`text-sm font-medium ${
                isScrolled ? "text-black" : "text-[#ffffff]"
              }`}>
              Explore
            </Link>
            <Link
              href="/language"
              className={`text-sm font-medium ${
                isScrolled ? "text-black" : "text-[#ffffff]"
              }`}>
              English
            </Link>
            <Link
              href="/become-seller"
              className={`text-sm font-medium ${
                isScrolled ? "text-black" : "text-[#ffffff]"
              }`}>
              Become a Seller
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/help"
              className={`text-sm font-medium ${
                isScrolled ? "text-black" : "text-[#ffffff]"
              }`}>
              Help
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium ${
                isScrolled ? "text-black" : "text-[#ffffff]"
              }`}>
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div
        className={`md:hidden fixed inset-x-0 z-40 transition-all duration-300 ${
          isSearchOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{
          top: "64px",
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.3)"
            : "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)"
        }}>
        <div className="container mx-auto px-4 py-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="What service are you looking for today?"
              className="w-full py-3 px-4 pr-12 rounded-md border border-gray-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-transparent transition-all duration-300 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-3 top-3 text-gray-500"
              aria-label="Search">
              <Search size={20} />
            </button>
          </form>

          <div className="mt-4">
            <p className="text-sm font-medium mb-2 text-gray-800">
              Popular searches:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Website Design", href: "/webdesign" },
                { name: "WordPress", href: "/wordpress" },
                { name: "Logo Design", href: "/logodesign" },
                { name: "AI Services", href: "/aiservices" }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm py-1 px-3 rounded-full bg-white/60 backdrop-blur-sm text-gray-800 hover:bg-white/80 transition-colors shadow-sm"
                  onClick={() => {
                    setSearchQuery(item.name);
                    setIsSearchOpen(false);
                  }}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
        style={{
          top: "64px",
          backdropFilter: "blur(10px)"
        }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/business"
              className={`text-lg font-medium py-2 ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={toggleMobileMenu}>
              Business
            </Link>
            <Link
              href="/explore"
              className={`text-lg font-medium py-2 ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={toggleMobileMenu}>
              Explore
            </Link>
            <Link
              href="/language"
              className={`text-lg font-medium py-2 ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={toggleMobileMenu}>
              English
            </Link>
            <Link
              href="/become-seller"
              className={`text-lg font-medium py-2 ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={toggleMobileMenu}>
              Become a Seller
            </Link>
            <Link
              href="/help"
              className={`text-lg font-medium py-2 ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={toggleMobileMenu}>
              Help
            </Link>
            <Link
              href="/contact"
              className={`text-lg font-medium py-2 ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={toggleMobileMenu}>
              Contact
            </Link>

            {!isLoggedIn && (
              <button
                className="login-btn rounded w-full py-3 mt-4"
                onClick={() => {
                  toggleMobileMenu();
                  // LoginModalOpen(true);
                }}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Add this at the end of the file, before the export statement
const style = document.createElement("style");
style.textContent = `
  @keyframes slideDown {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

export default Fsnavbar;
