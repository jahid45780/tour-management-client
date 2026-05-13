import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "../modeTheam/mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Tours", link: "/tours" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/30">
              T
            </div>

            <h1 className="text-2xl font-extrabold tracking-wide text-foreground">
              Tour<span className="text-cyan-500">Wave</span>
            </h1>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
             <Link
            key={item.name}
            to={item.link}
            className="relative text-muted-foreground font-medium transition-all duration-300 hover:text-cyan-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
    >
           {item.name}
           </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />

           <Link to="/login" >
             <button className="w-full p-1.5 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition duration-300 shadow-md">
              Login
            </button>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />

            <button
              onClick={() => setOpen(!open)}
              className="text-foreground"
            >
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <div className="mt-4 rounded-2xl border border-border bg-background/95 backdrop-blur-lg shadow-xl p-5 flex flex-col gap-5">
            {navItems.map((item) => (
               <Link
            key={item.name}
            to={item.link}
            className="relative text-muted-foreground font-medium transition-all duration-300 hover:text-cyan-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
    >
           {item.name}
           </Link>
            ))}

           <Link to="/login" >
             <button className="w-full py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition duration-300 shadow-md">
              Login
            </button>
           </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;