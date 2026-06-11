
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "../modeTheam/mode-toggle";
import { Link } from "react-router-dom";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hooks";
import { role } from "@/constants/role";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
 console.log(data?.data?.email);
  const navItems = [
    { name: "Home", link: "/", role:"PUBLIC" },
    { name: "About", link: "/about", role:"PUBLIC" },
    { name: "Tours", link: "/tours", role:"PUBLIC" },
    { name: "Contact", link: "/contact", role:"PUBLIC" },
    { name: "Dashboard", link: "/admin", role:role.ADMIN},
    { name: "Dashboard", link: "/user", role:role.USER},
  ];

  // ✅ login check
  const isLoggedIn = Boolean(data?.data?.email);

  // ✅ logout handler
  const handleLogout = async () => {
    try {
      await logout(undefined);
      dispatch(authApi.util.resetApiState()); 
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to={"/"} className="flex items-center gap-3" >
            <div className="w-11 h-11 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-xl">
              T
            </div>

            <h1 className="text-2xl font-extrabold">
              Tour<span className="text-cyan-500">Wave</span>
            </h1>
          </Link>

         {/* Desktop Menu */}
<nav className="hidden md:flex items-center gap-8">
  {navItems.map((item) => {
    const canShow =
      item.role === "PUBLIC" ||
      (item.role === role.ADMIN &&
        data?.data?.role === role.ADMIN) ||
      (item.role === role.USER &&
        data?.data?.role === role.USER);

    if (!canShow) return null;

    return (
      <Link
        key={`${item.name}-${item.link}`}
        to={item.link}
        className="relative text-muted-foreground font-medium transition-all duration-300 hover:text-cyan-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
      >
        {item.name}
      </Link>
    );
  })}
</nav>

          {/* Right Side (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-red-500 text-white"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="px-4 py-2 rounded-full bg-cyan-500 text-white">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />

            <button onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
       
    {/* Mobile Menu */}
<div
  className={`md:hidden overflow-hidden transition-all duration-300 ${
    open ? "max-h-[500px] pb-6" : "max-h-0"
  }`}
>
  <div className="mt-4 flex flex-col gap-5">
    {navItems.map((item) => {
      const canShow =
        item.role === "PUBLIC" ||
        (item.role === role.ADMIN &&
          data?.data?.role === role.ADMIN) ||
        (item.role === role.USER &&
          data?.data?.role === role.USER);

      if (!canShow) return null;

      return (
        <Link
          key={`${item.name}-${item.link}`}
          to={item.link}
          onClick={() => setOpen(false)}
        >
          {item.name}
        </Link>
      );
    })}

    {isLoggedIn ? (
      <button
        onClick={handleLogout}
        className="w-full py-3 rounded-full bg-red-500 text-white"
      >
        Logout
      </button>
    ) : (
      <Link to="/login">
        <button className="w-full py-3 rounded-full bg-cyan-500 text-white">
          Login
        </button>
      </Link>
    )}
  </div>
</div>
    
       </div>
    </header>
  );
};

export default Navbar;
