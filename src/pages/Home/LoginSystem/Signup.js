import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Signup</h1>
            <p className="text-sm text-gray-400">Create a new account</p>
          </div>
          <form
            // onSubmit={handleSignUp}
            noValidate=""
            action=""
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md input input-bordered input-primary"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="select" className="block mb-2 text-sm">
                  Select account type
                </label>
                <select
                  name="role"
                  required
                  className="select select-primary w-full max-w-xs"
                >
                  <option>buyer</option>
                  <option>seller</option>
                </select>
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
              </div>
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
                  className="w-full px-3 py-2 border rounded-md input input-bordered input-primary"
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
                  className="w-full   border rounded-md input input-bordered input-primary"
                />
              </div>
            </div>
            <div className="">
              <div>
                <button
                  type="submit"
                  className="btn btn-primary w-full btn-outline"
                >
                  {/* {loading ? <LoadingSpinner></LoadingSpinner> : "Sign Up"} */}
                </button>
              </div>
            </div>
          </form>
          <p className="pt-3 text-md text-center text-gray-400">
            Already have an account yet?{" "}
            <Link to="/login" className="hover:underline text-gray-600 ">
              {" "}
              Login now
            </Link>
            .
          </p>
          {/* <p className="py-3 text-red-600">{error}</p> */}
        </div>
      </div>
    );
};

export default Signup;