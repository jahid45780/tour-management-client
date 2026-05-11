const Footer = () => {
  return (
     <footer className=" text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Tour<span className="text-cyan-400">Wave</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Explore the world with comfort and confidence. Discover amazing
              destinations, book unforgettable tours, and create lifelong
              memories with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/tours"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Tours
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Support
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/faq"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/terms"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="/help"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get latest tour offers and travel updates.
            </p>

            <form className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none focus:border-cyan-400"
              />

              <button
                type="submit"
                className="px-5 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} TourNest. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-500 transition duration-300"
            >
              FB
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-500 transition duration-300"
            >
              IG
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-500 transition duration-300"
            >
              TW
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;