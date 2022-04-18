import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/images.png';

const Footer = () => {
  const navLinks = [
    { id: 1, path: '/home', name: 'Home' },
    { id: 2, path: '/membership', name: 'Membership' },
    { id: 3, path: '/blog', name: 'Blog' },
    { id: 4, path: '/about', name: 'About' },
    { id: 5, path: '/contact', name: 'Contact' },
  ];
  return (
    <footer className="bg-gray-900">
      <div className="grid container grid-cols-1 mx-auto lg:grid-cols-2">
        <div className="px-4 py-16 border-b border-gray-800 md:border-b-0 md:border-l lg:pl-12 lg:order-last">
          <div className="block lg:hidden">
            <span className="bg-gray-700 rounded-lg text-white inline-flex justify-center items-center tex-2xl">
              <img className="rounded-lg" src={logo} alt="" />
            </span>
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
          <div className="tex-2xl py-6 hidden lg:block">
            <span className="bg-gray-700 rounded-lg text-white inline-flex justify-center items-center tex-2xl">
              <img className="rounded-lg" src={logo} alt="" />
            </span>
          </div>

          <div className="flex  justify-between gap-4 lg:mt-12 w-full">
            <div className="w-1/3">
              <p className="font-bold text-white text-xl">Important Links</p>

              <nav className="flex flex-col mt-2 space-y-1 text-md text-gray-400">
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

            <div className="text-gray-400 w-2/3 text-justify">
              - 👋 Hi, I’m Md. Masum Mia <br /> - 👀 I’m interested in Mechine
              Learning, Data Mining and AI. Currently I am doing development
              work based on Web. Also I have interest in problem solving in
              various online judge. I want to be a Data Scientist or Data
              Analytics. Please pray for my bright future. <br /> - 🌱 I’m
              currently studying in department of CSE at Rajshahi University of
              Engineering and Technology ... <br /> - 💞️ I’m looking for a job
              to sharp my development skill. <br /> - 📫 You can email or send
              message in LinkedIn <br /> Email: iinaamasum@gmail.com
            </div>
          </div>

          <div className="md:flex mt-12 mx-auto text-lg text-white items-center text-center">
            <p className="inline-flex items-center text-lg  justify-between">
              {' '}
              &copy; {new Date().getFullYear()}
              <a
                className="text-orange-500  pl-1 sm:pl-2 pr-2"
                href="https://github.com/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
              >
                iinaamasum
              </a>{' '}
            </p>
            <p>
              All rights reserved. Want to hire me?{' '}
              <a
                className="text-blue-500 pl-3 underline"
                href="https://github.com/iinaamasum"
                target="_blank"
                rel="noreferrer"
              >
                Click Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
