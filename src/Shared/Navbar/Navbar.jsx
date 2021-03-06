import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BiFoodMenu } from 'react-icons/bi';
import { BsFillCartFill } from 'react-icons/bs';
import { MdRestaurantMenu } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/images.png';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [user] = useAuthState(auth);

  const navLinks = [
    { id: 1, path: '/home', name: 'Home' },
    { id: 2, path: '/membership', name: 'Membership' },
    { id: 3, path: '/checkout', name: 'Checkout' },
    { id: 4, path: '/about', name: 'About' },
    { id: 5, path: '/contact', name: 'Contact' },
  ];
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 bg-white shadow sticky top-0 z-50">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between max-w-[1350px]">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/home"
              className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              <img className="h-12 w-full" src={logo} alt="" />
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? (
                <BiFoodMenu className="text-3xl text-red-600" />
              ) : (
                <MdRestaurantMenu className="text-3xl text-red-600" />
              )}
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-between justify-end' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <div className="lg:flex lg:items-center lg:justify-center w-full lg:w-auto">
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-left">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="nav-item text-xl text-white md:ml-4"
                  >
                    <Link
                      className="text-base text-slate-400 hover:text-red-800 active:text-red-700 font-semibold mr-0 md:mr-4 transition-all duration-500 ease-in-out"
                      to={link.path}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {user ? (
                <div className="text-base text-red-600 font-bold">
                  {user?.displayName ? (
                    <span className="bg-slate-200 mr-4 rounded-lg px-6 py-2 ">
                      {user.displayName}
                    </span>
                  ) : (
                    <span className="bg-slate-200 mr-4 rounded-lg px-6 py-2 ">
                      Name Not Set
                    </span>
                  )}
                  <button
                    onClick={() => signOut(auth)}
                    className="bg-red-500 text-white active:bg-red-600
              hover:bg-red-600 font-bold  text-base px-5 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-1/2 lg:w-auto"
                    type="button"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="flex items-center w-full lg:w-auto pt-3 md:pt-0">
                  <BsFillCartFill
                    onClick={() => navigate('/checkout')}
                    className="text-2xl inline-flex items-center mr-6 text-red-600 cursor-pointer hover:text-red-700"
                  />
                  <button
                    onClick={() => navigate('/login')}
                    className="text-black font-sans tracking-wide font-semibold text-base mr-3 hover:bg-gray-700 px-5 py-2 rounded-full hover:text-white shadow hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150 w-1/2 lg:w-auto"
                    type="button"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => navigate('/signup')}
                    className="bg-red-500 text-white active:bg-red-600
                  hover:bg-red-600 font-bold text-base px-5 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-1/2 lg:w-auto"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
