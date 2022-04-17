import React from 'react';
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';

const SignUp = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);

  return (
    <>
      <section className="my-5">
        <div className="w-11/12 sm:w-4/5 md:w-4/6 lg:w-2/5 mx-auto px-5 xl:px-10 border-gray-700 shadow rounded-lg bg-gray-800 py-5">
          <div className="pt-3 pb-10">
            <h3 className="tracking-wide text-center text-md text-gray-300 py-4">
              Register with
            </h3>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => signInWithGithub()}
                className="tracking-wide uppercase text-center bg-slate-200 hover:bg-slate-400 text-black font-semibold text-xl px-3 py-2 rounded flex items-center justify-between"
              >
                <BsGithub />
                <span className="pl-2">Github</span>
              </button>
              <button
                onClick={() => signInWithGoogle()}
                className="tracking-wide uppercase text-center bg-slate-100 hover:bg-slate-300 text-black font-semibold text-xl px-3 py-2 rounded flex items-center justify-between"
              >
                <FcGoogle />
                <span className="pl-2">Google</span>
              </button>
            </div>
          </div>
          <hr className="opacity-50" />
          <div className="py-10">
            <h3 className="tracking-wide text-center text-md text-gray-300 pt-3 pb-2">
              Or register with credentials
            </h3>
            <form className="w-3/4 mx-auto">
              <div>
                <label
                  className="text-xl text-slate-200 tracking-wide"
                  htmlFor="Name"
                >
                  Your Name
                </label>
                <br />
                <input
                  className="w-full rounded outline-none px-4 py-3 bg-slate-300 focus:bg-slate-100 text-black font-sans font-medium text-md"
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="pt-4">
                <label
                  className="text-xl text-slate-200 tracking-wide"
                  htmlFor="email"
                >
                  Email
                </label>
                <br />
                <input
                  className="w-full rounded outline-none px-4 py-3 bg-slate-300 focus:bg-slate-100 text-black font-sans font-medium text-md"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="pt-4">
                <label
                  className="text-xl text-slate-200 tracking-wide"
                  htmlFor="password"
                >
                  Password
                </label>
                <br />
                <input
                  className="w-full rounded outline-none px-4 py-3 bg-slate-300 focus:bg-slate-100 text-black font-sans font-medium text-md"
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="pt-4">
                <label
                  className="text-xl text-slate-200 tracking-wide"
                  htmlFor="confirm-password"
                >
                  Confirm Password
                </label>
                <br />
                <input
                  className="w-full rounded outline-none px-4 py-3 bg-slate-300 focus:bg-slate-100 text-black font-sans font-medium text-md"
                  type="password"
                  name="confirm-password"
                  placeholder="Enter The Same Password"
                />
              </div>

              <div className="pt-8">
                <input
                  className="rounded tracking-wide text-slate-100 border-black bg-black hover:text-slate-400 w-full p-2 transition-all duration-300 ease-in-out text-xl cursor-pointer"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
