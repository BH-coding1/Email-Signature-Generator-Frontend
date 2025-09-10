const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm border-b border-gray-200 px-10 py-3 sticky top-0 z-50 flex justify-between">
      <div className="">
        <a className="text-xl font-semibold text-blue-600">MailGen</a>
      </div>
      <div className=" justify-center ">
        <ul className="menu menu-horizontal px-4 space-x-4 font-medium text-gray-600">
          <li>
            <a className="hover:text-blue-600">Link</a>
          </li>
          <li>
            <a className="hover:text-blue-600">Home</a>
          </li>
          <li>
            <a className="hover:text-blue-600">Pricing</a>
          </li>
        </ul>
      </div>
      <div className=" space-x-3">
        <button className="btn btn-sm bg-white border border-blue-500 text-blue-500 hover:bg-blue-50">
          Get Started
        </button>
        <button className="btn btn-sm bg-blue-500 border-blue-500 text-white hover:bg-blue-600">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
