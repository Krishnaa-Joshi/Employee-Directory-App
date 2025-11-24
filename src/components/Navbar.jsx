import logo from "../assets/logos/logo.png";

/*
  Navbar component -
  - displays the application logo and title
*/

function Navbar() {
  return (
    <div
      className="flex items-center px-4 h-12 gap-3 border-b border-gray-300 mx-2.5 sm:gap-4 sm:h-16 flex-wrap">
      {/* Application Logo */}
      <img
        src={logo}
        alt="Employee Directory Logo"
        className="h-10 w-12 sm:h-12 sm:w-16 rounded-full object-cover"
      />

      {/* Application Title */}
      <h1 className="text-xl sm:text-2xl font-bold noto-sans-medium text-[#878787]">
        Employee Directory
      </h1>
    </div>
  );
}

export default Navbar;
