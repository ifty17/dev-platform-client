import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Login</h1>
            <p className="text-sm text-gray-400">
              Login here with your account
            </p>
          </div>
          <form
            // onSubmit={handleLogin}
            noValidate=""
            action=""
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md input input-bordered "
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md input input-bordered "
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="bg-stone-600 text-white text-xl rounded-md py-2  w-full hover:scale-105 duration-300"
                > Login
                  {/* {loading ? <LoadingSpinner></LoadingSpinner> : "Login"} */}
                </button>
              </div>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Signup with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
            //   onClick={handleGoogleLogin}
              aria-label="Log in with Google"
              className="p-3 flex justify-center rounded-sm"
            >
              <FcGoogle className='text-5xl hover:scale-110 duration-300'></FcGoogle>
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?{" "}
            <Link to="/signup" className="hover:underline text-gray-600">
              Sign In
            </Link>
            .
          </p>
          {/* <p className="py-3 text-red-600">{error}</p> */}
        </div>
      </div>
    );
};

export default Login;