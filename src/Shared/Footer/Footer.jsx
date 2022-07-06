import logo from '../../images/images.png';

const Footer = () => {
  return (
    <section className="bg-gray-900">
      <footer className="max-w-[1350px] mx-auto container px-3 ">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro voluptatum debitis quia pariatur iusto in nisi expedita
                  placeat vero magni.
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
    </section>
  );
};

export default Footer;
