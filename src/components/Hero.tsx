"use client";
import { Link } from "@tanstack/react-router";

const Hero = () => {
  return (
    <div className="hero bg-white md:px-6 py-8 sm:py-12 lg:py-20">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src="/Screenshot_2025-09-10 202203.png"
          className="w-full max-w-xs sm:max-w-lg lg:max-w-l rounded-lg shadow-2xl mb-6 lg:mb-0 h-80"
          alt="Email signature generator preview"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Professional email signature generator 
          </h1>
          <p className="py-4 sm:py-6 text-sm sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
            Easiest way for you and your team to create professional Email Signatures, that will make your emails more presentable and impress your clients
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              to="/register"
              className="btn h-12 sm:h-13 w-full sm:w-40 lg:w-50 rounded-4xl bg-blue-600 text-white text-base sm:text-lg hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              to="/sign-in"
              className="btn h-12 sm:h-13 w-full sm:w-40 lg:w-50 bg-white border border-blue-600 text-blue-600 rounded-4xl text-base sm:text-lg hover:bg-blue-100 transition duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;