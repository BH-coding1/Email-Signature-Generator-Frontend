import { Link } from "@tanstack/react-router";

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
            <Link
              to="/features"
              className="hover:text-blue-600"
              activeProps={{
                className: "text-blue-600 font-semibold",
              }}
            >
              Features
            </Link>
          </li>

          <li>
            <Link
              to="/pricing"
              className="hover:text-blue-600"
              activeProps={{
                className: "text-blue-600 font-semibold",
              }}
            >
              Pricing
            </Link>
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
        <button className="btn btn-sm bg-white border border-blue-500 text-blue-500 hover:bg-blue-50">
          Get Started
        </button>
        <button className="btn btn-sm bg-blue-500 border-blue-500 text-white hover:bg-blue-600">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default NavBar;
