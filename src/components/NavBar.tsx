import { Link } from "@tanstack/react-router";
import { Link as ScrollLink } from "react-scroll";
const NavBar = () => {
  return (
    <div className="navbar bg-white shadow-sm border-b border-gray-100 px-10 py-3 sticky top-0 z-50 flex justify-between">
      <div className="">
        <Link to="/" className="text-xl font-semibold text-blue-600">
          MailGen
        </Link>
      </div>
      <div className=" justify-center p-3 ">
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
             smooth={true} duration={500} 
              to="features"
              className="hover:text-blue-600 cursor-pointer">
          
              
              Features
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
             smooth={true} duration={500} 
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
      <div className=" space-x-3">
        <Link to='/register' className="btn btn-sm bg-white border border-blue-500 text-blue-500 hover:bg-blue-50">
          Get Started
        </Link>
        <Link to='/sign-in' className="btn btn-sm bg-blue-600 border-none text-white hover:bg-blue-600">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
