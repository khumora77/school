import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Mobile from "./mobile";
import { useTranslation } from "react-i18next";
import { navLink } from "@/constants";
import { Link, useParams, useLocation } from "react-router-dom";
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button";
import LanguageDropdown from "./language-menu";

const Navbar = () => {
  const { t } = useTranslation();
  const { lng } = useParams();
  const location = useLocation();

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto max-w-7xl h-full flex justify-between items-center px-4">
        {/* Logo */}
        <Link
          to={`/${lng || "en"}`}
          className="flex items-center gap-2 hover:scale-105 transition-transform"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#1b4571] to-[#2a5a94] dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            Zarbdor IM
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLink.map((item, index) => (
            <div key={index} className="relative group">
              {item.dropdown?.length ? (
                <>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-200 hover:text-[#1b4571] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {t(item.name)}
                  </button>
                  <div
                    className={`${
                      openDropdown === index ? "block" : "hidden"
                    } group-hover:block absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg rounded-md mt-1 w-48 z-50 border border-gray-200 dark:border-gray-700`}
                  >
                    {item.dropdown.map((ddItem, ddIndex) => (
                      <Link
                        key={ddIndex}
                        to={`/${lng || "en"}${ddItem.route}`}
                        className={`block px-4 py-2 text-sm hover:bg-[#1b4571] hover:text-white dark:hover:bg-blue-600 transition-colors ${
                          location.pathname === `/${lng || "en"}${ddItem.route}`
                            ? "bg-[#1b4571] text-white dark:bg-blue-600"
                            : "text-gray-700 dark:text-gray-200"
                        } first:rounded-t-md last:rounded-b-md`}
                        onClick={handleLinkClick}
                      >
                        {t(ddItem.name)}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={`/${lng || "en"}${item.route}`}
                  className={`px-3 py-2 rounded-md font-medium transition-colors ${
                    location.pathname === `/${lng || "en"}${item.route}`
                      ? "bg-[#1b4571] text-white dark:bg-blue-600"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#1b4571] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={handleLinkClick}
                >
                  {t(item.name)}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {/* Language and Theme (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageDropdown />
            <ModeToggle />
          </div>

          {/* Auth buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-2">
            <SignedIn>
              <UserButton appearance={{
                elements: {
                  avatarBox: "w-8 h-8"
                }
              }} />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full border-[#1b4571] text-[#1b4571] hover:bg-[#1b4571] hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
                >
                  {t("logIn")}
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button 
                  size="sm" 
                  className="rounded-full bg-[#1b4571] hover:bg-[#2a5a94] text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  {t("signUp")}
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {/* Language and Theme (Mobile) */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <LanguageDropdown />
              <ModeToggle />
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-2">
              {navLink.map((item, index) => (
                <div key={index}>
                  {item.dropdown?.length ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="w-full px-4 py-3 text-left rounded-md font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-between"
                      >
                        {t(item.name)}
                        <span className={`transform transition-transform ${openDropdown === index ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      <div
                        className={`${
                          openDropdown === index ? "block" : "hidden"
                        } pl-6 mt-1 space-y-1`}
                      >
                        {item.dropdown.map((ddItem, ddIndex) => (
                          <Link
                            key={ddIndex}
                            to={`/${lng || "en"}${ddItem.route}`}
                            className={`block px-4 py-2 rounded-md text-sm ${
                              location.pathname === `/${lng || "en"}${ddItem.route}`
                                ? "bg-[#1b4571] text-white dark:bg-blue-600"
                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                            onClick={handleLinkClick}
                          >
                            {t(ddItem.name)}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={`/${lng || "en"}${item.route}`}
                      className={`block px-4 py-3 rounded-md font-medium ${
                        location.pathname === `/${lng || "en"}${item.route}`
                          ? "bg-[#1b4571] text-white dark:bg-blue-600"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      onClick={handleLinkClick}
                    >
                      {t(item.name)}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Auth buttons (Mobile) */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <SignedIn>
                <div className="flex justify-center">
                  <UserButton appearance={{
                    elements: {
                      avatarBox: "w-10 h-10"
                    }
                  }} />
                </div>
              </SignedIn>
              <SignedOut>
                <div className="flex flex-col gap-2">
                  <SignInButton mode="modal">
                    <Button 
                      variant="outline" 
                      className="w-full border-[#1b4571] text-[#1b4571] hover:bg-[#1b4571] hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
                      onClick={handleLinkClick}
                    >
                      {t("logIn")}
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button 
                      className="w-full bg-[#1b4571] hover:bg-[#2a5a94] text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                      onClick={handleLinkClick}
                    >
                      {t("signUp")}
                    </Button>
                  </SignUpButton>
                </div>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;