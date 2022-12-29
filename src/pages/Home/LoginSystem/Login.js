import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import SmallLoader from '../../Components/SmallLoader';

const Login = () => {

  const { loginUser, googleSignIn, setLoading, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  console.log(error);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/home";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        toast.success("User logged in successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
        // toast.error({error});
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        isUserAvailable(user);
        console.log(user.displayName, user.email);
        navigate(from, { replace: true });
        // isUserAvailable(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const isUserAvailable = (user) => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length) {
          toast.success("User loggedIn successfully");
          return navigate("/home");
        }
        googleUser(user);
      });
  };

  const googleUser = (user) =>{
    const userInfo = {
      displayName: user.displayName,
      title: 'Set Your Title',
      institution: 'Set Your Institution name',
      photoURL: user.photoURL,
      email: user.email,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

  }

    return (
      <div className="flex justify-center items-center py-8">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-stone-700">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Login</h1>
            <p className="text-sm text-stone-700 ">
              Login here with your account
            </p>
          </div>
          <form
            onSubmit={handleLogin}
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
                >
                  {loading ? <SmallLoader></SmallLoader> : "Login"}
                </button>
              </div>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm text-stone-700">
              Signup with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleLogin}
              aria-label="Log in with Google"
              className="p-3 flex justify-center rounded-sm"
            >
              <FcGoogle className="text-5xl hover:scale-110 duration-300"></FcGoogle>
            </button>
          </div>
          <p className="px-6 text-sm text-center text-stone-700">
            Don't have an account yet?{" "}
            <Link to="/signup" className="hover:underline text-stone-7000">
              Sign In
            </Link>
            .
          </p>
          <p className="py-3 text-red-600">{error}</p>
        </div>
      </div>
    );
};

export default Login;