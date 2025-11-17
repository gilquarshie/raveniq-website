"use client";

export function Navbar() {
  return (
    <div className="bg-white shadow w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">

          {/* LEFT — LOGO */}
          <div className="flex items-center gap-1.5">
            <img
              src="logo-icon.svg"
              alt="RavenIQ Icon"
              className="h-10 w-auto"
            />
            <span className="font-semibold text-xl text-gray-900">
              Raven<span className="font-semibold text-xl text-blue-600">IQ</span>
            </span>

            <span className="font-semibold text-xl text-gray-900">Labs</span>
          </div>

          {/* CENTER — NAV LINKS */}
          <div className="hidden sm:flex sm:items-center justify-center gap-8">
            <a href="#" className="text-gray-800 text-sm font-semibold hover:text-blue-600 transition-colors duration-200">
              Home
            </a>
            <a href="#services" className="text-gray-800 text-sm font-semibold hover:text-blue-600 transition-colors duration-200">
              Services
            </a>
            <a href="#success-stories" className="text-gray-800 text-sm font-semibold hover:text-blue-600 transition-colors duration-200">
              Success Stories
            </a>
            <a href="#pricing" className="text-gray-800 text-sm font-semibold hover:text-blue-600 transition-colors duration-200">
              Pricing
            </a>
            <a href="#about" className="text-gray-800 text-sm font-semibold hover:text-blue-600 transition-colors duration-200">
              About
            </a>
          </div>

          {/* RIGHT — CTA BUTTONS */}
          <div className="hidden sm:flex sm:items-center">
            <a href="#contact" className="text-gray-800 text-sm font-semibold hover:text-blue-600 transition-colors duration-200 mr-4">
              Call Us
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Get Quote
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="sm:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-purple-600"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 
                C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 
                C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 
                3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 
                10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 
                L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 
                20.7761424,17 20.5,17 L12.9499909,17 Z"
              />
            </svg>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className="block sm:hidden bg-white border-t-2 py-2">
          <div className="flex flex-col">
            <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">
              Products
            </a>
            <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">
              Marketplace
            </a>
            <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">
              Partners
            </a>
            <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">
              Pricing
            </a>

            <div className="flex justify-between items-center border-t-2 pt-2">
              <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                Sign in
              </a>
              <a
                href="#"
                className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
