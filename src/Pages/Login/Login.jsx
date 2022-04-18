import React, { useEffect, useState } from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    otherError: '',
  });

  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);

  const [user, loading, error] = useAuthState(auth);

  const handleEmailLogIn = (e) => {
    const passRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (passRegex.test(e.target.value)) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, emailError: '' });
    } else {
      setUserInfo({ ...userInfo, email: '' });
      setErrors({
        ...errors,
        emailError: 'Invalid Email. Please enter a valid email address.',
      });
    }
  };

  const handlePasswordLogIn = (e) => {
    const passwordRegex = /(?=.*[!#$%&?^* "])/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, passwordError: '' });
    } else {
      setErrors({
        ...errors,
        passwordError: 'Minimum 6 characters with special char!',
      });
      setUserInfo({ ...userInfo, password: '' });
    }
  };

  console.log(userInfo);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <>
      <section className="my-5">
        <div className="w-11/12 sm:w-4/5 md:w-4/6 lg:w-2/5 mx-auto px-5 xl:px-7 border-gray-700 shadow rounded-lg bg-gray-800 py-5 sm:py-10">
          <div className="pt-3 pb-10">
            <h3 className="tracking-wide text-center text-md text-gray-300 py-4">
              Sign In with
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
              Or sign in with credentials
            </h3>

            <form onSubmit={handleSignIn} className="w-3/4 mx-auto">
              <div className="">
                <label
                  className="text-xl text-slate-200 tracking-wide"
                  htmlFor="email"
                >
                  Email
                </label>
                <br />
                <input
                  onChange={handleEmailLogIn}
                  className="w-full rounded outline-none px-4 py-3 bg-slate-300 focus:bg-slate-100 text-black font-sans font-medium text-md"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
                {errors?.emailError && (
                  <p className="error-message">{errors.emailError}</p>
                )}
              </div>
              <div className="pt-4">
                <label
                  className="text-xl text-slate-200 tracking-wide"
                  htmlFor="email"
                >
                  Password
                </label>
                <br />
                <input
                  onChange={handlePasswordLogIn}
                  className="w-full rounded outline-none px-4 py-3 bg-slate-300 focus:bg-slate-100 text-black font-sans font-medium text-md"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                />
                {errors?.passwordError && (
                  <p className="error-message">{errors.passwordError}</p>
                )}
              </div>
              <div className="pt-4 flex items-center justify-left">
                <input className="w-4 text-cyan-500" type="checkbox" name="" />

                <small className="pl-2 text-cyan-500 text-semibold tracking-wide">
                  Remember Me
                </small>
              </div>
              <p className="text-lg text-white pt-4">
                Don't have an account?{' '}
                <Link className="text-blue-500 underline" to="/signup">
                  Sign up first
                </Link>{' '}
              </p>
              <div className="pt-5">
                <input
                  className="rounded tracking-wide text-slate-100 border-black bg-black hover:text-slate-400 w-full p-2 transition-all duration-300 ease-in-out text-xl cursor-pointer"
                  type="submit"
                  value="Sign In"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
