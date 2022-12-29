import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import SmallLoader from "../../Components/SmallLoader";

const Signup = () => {
  const { createUser, setLoading, updateUserProfile, loading } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const from = location.state?.from?.pathname || "/home";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const institution = form.institution.value;
    const image = form.image.files[0];
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, image, email, password);


    const formData = new FormData();
    formData.append("image", image);

    const url =
      "https://api.imgbb.com/1/upload?key=81c077d88a2ff4a629a342194065431e";

    fetch(url, {
      method: "POST",
      body: formData,
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data.data.display_url);
      createUser(email, password)
      .then((result) =>{
        const user = result.user;
        console.log(user);
        updateUserProfile(name, data.data.display_url)
        .then(result =>{
          navigate(from, { replace: true });
          form.reset();
          setError("");
          

          const user = {
            displayName: name,
            title,
            institution,
            photoURL: data.data.display_url,
            email,
          };

          fetch("https://devplatform-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            toast.success("User created successfully");
          });

        })
      })
      .catch((error) =>{
        console.error(error);
        setLoading(false);
        setError(error.message);
      })
    })

  };

  return (
    <div className="flex justify-center items-center py-4">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-stone-700">
        <div className="text-center">
          <h1 className="my-3 text-4xl font-bold">Signup</h1>
          <p className="text-sm text-stone-700">Create a new account</p>
        </div>
        <form
          onSubmit={handleSignUp}
          noValidate=""
          action=""
          className="space-y-4 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-2">
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
                className="w-full px-3 py-2 border rounded-md input input-bordered"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Title
              </label>
              <input
                required
                type="text"
                name="title"
                id="title"
                placeholder="Enter your title"
                className="w-full px-3 py-2 border rounded-md input input-bordered"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                The last institution you have read in?
              </label>
              <input
                required
                type="text"
                name="institution"
                id="institution"
                placeholder="Your last institution"
                className="w-full px-3 py-2 border rounded-md input input-bordered"
                data-temp-mail-org="0"
              />
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
                className="file-input file-input-bordered w-full max-w-xs"
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
                className="w-full px-3 py-2 border rounded-md input input-bordered"
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
                className="w-full   border rounded-md input input-bordered"
              />
            </div>
          </div>
          <div className="">
            <div>
              <button
                type="submit"
                className="bg-stone-600 text-white text-xl rounded-md py-2  w-full hover:scale-105 duration-300"
              >
                {loading ? <SmallLoader></SmallLoader> : "Sign Up"}
              </button>
            </div>
          </div>
        </form>
        <p className="pt-3 text-md text-center text-stone-700">
          Already have an account yet?{" "}
          <Link to="/login" className="hover:underline text-stone-700 ">
            {" "}
            Login now
          </Link>
          .
        </p>
        <p className="py-3 text-red-600">{error}</p>
      </div>
    </div>
  );
};

export default Signup;
