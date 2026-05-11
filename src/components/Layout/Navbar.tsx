import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Tours", link: "/tours" },
    { name: "Contact", link: "/contact" },
  ];
  return (
     <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-xl">
              T
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
              Tour<span className="text-cyan-500">Wave</span>
            </h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-gray-700 font-medium hover:text-cyan-500 transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Signup Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-medium transition duration-300 shadow-md">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-800"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[400px] pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-5 pt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-gray-700 font-medium hover:text-cyan-500 transition duration-300"
              >
                {item.name}
              </a>
            ))}

            <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-medium transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
