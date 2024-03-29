import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [atTopPage, setAtTopPage] = useState("bg-trans");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      // user is scrolled
      if (atTopPage) setAtTopPage(false);
    } else {
      // user is at top of page
      if (atTopPage) setAtTopPage(true);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className={atTopPage ? "bg-transparent" : "bg-gray-900"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0">
                <h1 className="text-white font-bold text-lg">
                  Nashir <span className="text-orange-500">Jamali</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 items-baseline justify-end flex space-x-10">
                  <a
                    href="#aboutme"
                    className="text-gray-500 text-sm hover:text-white"
                  >
                    About
                  </a>
                  <a
                    href="#portfolio"
                    className="text-gray-500 text-sm hover:text-white"
                  >
                    Portfolio
                  </a>
                  <a
                    href="#services"
                    className="text-gray-500 text-sm hover:text-white"
                  >
                    Services
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-500 text-sm hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-light"
                >
                  Dashboard
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  );
};

export default Nav;
