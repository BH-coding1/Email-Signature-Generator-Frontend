"use client";
import { Link } from "@tanstack/react-router";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar backdrop-blur-sm bg-white/70 border-b fixed border-slate-200 border-gray-100 px-4 sm:px-6 md:px-10 py-3 sticky top-0 z-50 flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link to="/" className="text-xl font-semibold text-blue-600">
          Mailgen
        </Link>
      </div>

      {/* Hamburger Button for Mobile */}
      <button
        className="md:hidden text-gray-600 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Links  */}
      <div className="hidden md:flex justify-center p-3">
        <ul className="flex space-x-6 font-medium text-gray-600">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600"
              activeProps={{
                className: "text-blue-600 font-semibold",
              }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>
          </li>
          <li>
            <ScrollLink
              smooth={true}
              duration={500}
              to="features"
              className="hover:text-blue-600 cursor-pointer"
            >
              Features
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              smooth={true}
              duration={500}
              to="pricing"
              className="hover:text-blue-600 cursor-pointer"
            >
              Pricing
            </ScrollLink>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600"
              activeProps={{
                className: "text-blue-600 font-semibold",
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Buttons*/}
      <div className="hidden md:flex space-x-3">
        <Link
          to="/register"
          className="btn btn-sm bg-white border border-blue-500 text-blue-500 hover:bg-blue-50"
        >
          Get Started
        </Link>
        <Link
          to="/sign-in"
          className="btn btn-sm bg-blue-600 border-none text-white hover:bg-blue-600"
        >
          Sign In
        </Link>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/100 shadow-md p-4 z-40">
          <ul className="flex flex-col space-y-4 font-medium text-gray-600">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600"
                activeProps={{
                  className: "text-blue-600 font-semibold",
                }}
                activeOptions={{ exact: true }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <ScrollLink
                smooth={true}
                duration={500}
                to="features"
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                smooth={true}
                duration={500}
                to="pricing"
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </ScrollLink>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600"
                activeProps={{
                  className: "text-blue-600 font-semibold",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex flex-col space-y-4 mt-4">
            <Link
              to="/register"
              className="btn btn-sm bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
            <Link
              to="/sign-in"
              className="btn btn-sm bg-blue-600 border-none text-white hover:bg-blue-600 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;