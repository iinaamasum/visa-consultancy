import React, { useEffect, useState } from 'react';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);

  const [user1] = useAuthState(auth);

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    otherError: '',
  });

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmail = (e) => {
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

  const handlePassword = (e) => {
    const passRegex = /(?=.*[!#$%&? "])/;
    if (passRegex.test(e.target.value)) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, passwordError: '' });
    } else {
      setErrors({
        ...errors,
        passwordError:
          'Provide a pass of greater than 6 char with a special char',
      });
      setUserInfo({ ...userInfo, password: '' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userInfo.password !== userInfo.confirmPassword) {
      setErrors({ ...errors, confirmPasswordError: 'Password Mismatched' });
      setUserInfo({ ...userInfo, confirmPassword: '' });
    } else {
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (user1) {
      navigate('/');
    }
  }, [user1]);

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
            <div className="text-white text-xl text-center"></div>
            <form onSubmit={handleFormSubmit} className="w-3/4 mx-auto">
              <div className="pt-4">
                <label
                  className="text-xl text-slate-200 tracking-wide"
                  htmlFor="email"
                >
                  Email
                </label>
                <br />
                <input
                  onChange={handleEmail}
                  className="w-full rounded outline-none px-4 py-3 bg-slate-300 focus:bg-slate-100 text-black font-sans font-medium text-md"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
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
                  onChange={handlePassword}
                  className="w-full rounded outline-none px-4 py-3 bg-slate-300 focus:bg-slate-100 text-black font-sans font-medium text-md"
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter Your Password"
                  required
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
                  onChange={(e) =>
                    setUserInfo({
                      ...userInfo,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full rounded outline-none px-4 py-3 bg-slate-300 focus:bg-slate-100 text-black font-sans font-medium text-md"
                  type="password"
                  name="confirm-password"
                  placeholder="Enter The Same Password"
                  required
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
