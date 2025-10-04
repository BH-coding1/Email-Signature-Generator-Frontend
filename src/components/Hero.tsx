import { Link } from "@tanstack/react-router";

const Hero = () => {
  return (
    <div className="hero bg-white py-20 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="\public\Screenshot 2025-09-10 202203.png"
          className="w-xl  rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Professional email signature generator for you and your team</h1>
          <p className="py-6">
            Easiest way for you and your team to create proffessional Email Signatures, that will make your emails more presentable and impress your clients   
          </p>
          <Link to="/register" className="btn h-13 w-50 rounded-4xl bg-blue-600 text-lg ">Get Started</Link>
          <Link to='/sign-in' className="btn h-13  w-50  bg-white border-blue-600 text-blue-600 rounded-4xl text-lg ml-4 transition duration:300 hover:bg-blue-100">
          Sign In
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
