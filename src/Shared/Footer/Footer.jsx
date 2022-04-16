import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    { id: 1, path: '/home', name: 'Home' },
    { id: 2, path: '/shop', name: 'Shop' },
    { id: 3, path: '/review', name: 'Review' },
    { id: 4, path: '/about', name: 'About' },
    { id: 5, path: '/contact', name: 'Contact' },
  ];
  return (
    <footer className="bg-gray-900">
      <div className="grid container grid-cols-1 mx-auto lg:grid-cols-2">
        <div className="px-4 py-16 border-b border-gray-800 md:border-b-0 md:border-l lg:pl-12 lg:order-last">
          <div className="block lg:hidden">
            <span className="inline-block w-32 h-10 bg-gray-700 rounded-lg"></span>
          </div>

          <div className="mt-12 space-y-4 lg:mt-0">
            <span className="block w-10 h-1 bg-indigo-500 rounded"></span>

            <div>
              <h5 className="text-2xl font-medium text-white">
                Request a Demo
              </h5>

              <p className="max-w-xs mt-1 text-xs text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                voluptatum debitis quia pariatur iusto in nisi expedita placeat
                vero magni.
              </p>
            </div>

            <form>
              <div className="relative max-w-lg">
                <label className="sr-only"> Email </label>

                <input
                  className="w-full py-4 pl-3 pr-16 text-sm bg-gray-800 border-none rounded-lg"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />

                <button
                  className="absolute p-3 text-white -translate-y-1/2 bg-blue-600 rounded-md top-1/2 right-1.5"
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="px-4 py-16 lg:pr-12">
          <div className="hidden lg:block tex-2xl">
            <span className="w-32 h-10 bg-gray-700 rounded-lg text-white inline-flex justify-center items-center tex-2xl">
              Wallet
            </span>
          </div>

          <div className="grid grid-cols-3 gap-8 lg:mt-12">
            <div>
              <p className="font-bold text-white">Helpful</p>

              <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    className="hover:opacity-75"
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="font-bold text-white">Solutions</p>

              <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    className="hover:opacity-75"
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="font-bold text-white">About</p>

              <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    className="hover:opacity-75"
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="md:flex mt-12 mx-auto text-xs text-white items-center text-center">
            <p className="inline-flex items-center justify-between">
              {' '}
              &copy; {new Date().getFullYear()}
              <a
                className="text-orange-500 text-base pl-1 sm:pl-2"
                href="https://github.com/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
              >
                iinaamasum
              </a>
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                className="pl-2 md:pl-6 hover:opacity-75"
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
