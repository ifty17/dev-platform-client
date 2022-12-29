import React, { useContext } from "react";
import profile from "../../../assets/profile.jpg";
import { MdAddPhotoAlternate, MdOutlineVideoLibrary } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import samsung from "../../../assets/samsung.png";

const Post = () => {
  const { user } = useContext(AuthContext);


  

  const handlePost = (event) => {
    event.preventDefault();
    const form = event.target;
    const postText = form.postText.value;
    const image = form.image.files[0];
    // console.log(postText, image);

    const formData = new FormData();
    formData.append("image", image);

    let today = new Date().toLocaleString();
    console.log(today);

    const url =
      "https://api.imgbb.com/1/upload?key=81c077d88a2ff4a629a342194065431e";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.display_url);

        const post = {
          dateField: today,
          reactions: 0,
          postText: postText,
          photoURL: user?.photoURL,
          displayName: user?.displayName,
          postImage: data.data.display_url,
          email: user.email,
        };
        fetch("http://localhost:5000/post", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(post),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Your post has been Successful");
            form.reset();
          });
      });
  };

  return (
    <div>
      <div className="md:flex gap-5 mt-5 md:mx-10">
        <LeftSide></LeftSide>

        <div className="my-5 md:my-0 w-full md:w-[50%] md:h-[42%] ">
          <div className=" bg-white py-4 px-3 rounded-md shadow-xl mb-4">
            <div className="flex gap-2 justify-center items-center">
              <img
                className="w-[8%] rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <label
                htmlFor="post-modal"
                className="w-full h-[10%] py-2 bg-zinc-200 px-2 rounded-lg text-stone-700 border border-stone-400"
              >
                <p>Write a post</p>
              </label>
            </div>
            <label
              htmlFor="post-modal"
              className="flex justify-between md:mx-6 mt-3"
            >
              <p className="flex gap-2 hover:bg-zinc-200 p-2 rounded-md">
                <MdAddPhotoAlternate className="text-2xl text-sky-600"></MdAddPhotoAlternate>{" "}
                <span className="text-stone-700">Photo</span>
              </p>
              <p className="flex gap-2 hover:bg-zinc-200 p-2 rounded-md">
                <MdOutlineVideoLibrary className="text-2xl text-green-600"></MdOutlineVideoLibrary>{" "}
                <span className="text-stone-700">Video</span>
              </p>
              <p className="flex gap-2 hover:bg-zinc-200 p-2 rounded-md">
                <BsFillCalendarDateFill className="text-2xl text-yellow-600"></BsFillCalendarDateFill>{" "}
                <span className="text-stone-700">Event</span>
              </p>
              <p className="flex gap-2 hover:bg-zinc-200 p-2 rounded-md">
                <RiArticleLine className="text-2xl text-orange-700"></RiArticleLine>{" "}
                <span className="text-stone-700">Write article</span>
              </p>
            </label>
            <input type="checkbox" id="post-modal" className="modal-toggle" />
            <div className="modal sm:modal-middle ">
              <div className="modal-box">
                <label
                  htmlFor="post-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <form onSubmit={handlePost}>
                  <div>
                    <h3 className="text-xl pb-2 pt-3">Create A Post</h3>
                    <textarea
                      required
                      name="postText"
                      className="textarea textarea-bordered w-full"
                      placeholder="Start a post"
                    ></textarea>
                    <h3 className="text-xl pb-2 pt-3">Upload an Image</h3>
                    <input
                      required
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      className="file-input file-input-bordered file-input-sm  max-w-xs"
                    />
                  </div>
                  <button type="submit" className="modal-action btn ">
                    Post!
                  </button>
                </form>
              </div>
            </div>
          </div>

              <div className="mb-5  bg-white shadow-xl py-4 px-3 rounded-md">
                <div className="flex">
                  <img className="w-[7%] rounded-full" src={profile} alt="" />
                  <div className="ml-2 w-full">
                    <div className="flex items-center justify-between">
                      <h2 className="text-stone-700">
                        {/* {displayName} */}
                        Rahat Kabir Ifty
                      </h2>
                      <p className="text-xs">
                        {/* {dateField} */}
                        12:00AM
                      </p>
                    </div>
                    <p className="w-[5px] text-stone-700 text-xs leading-3">
                      {/* {email} */}
                      iftyrahatkabir@gmail.com
                    </p>
                  </div>
                </div>
                <p className="pt-2 pb-1">
                  {/* {postText.slice(0, 150) + "......."}{" "}
                                  <Link to={`/post/${_id}`}>more</Link>{" "} */}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium perspiciatis accusamus, dicta numquam nulla ea, alias
                  eaque commodi expedita distinctio facere ut, necessitatibus quis.
                  Quo minus numquam tenetur non corrupti unde consequuntur eaque
                  error.
                </p>
                <img className="w-[50%] mx-auto pt-2" src={samsung} alt="" />

                <div className="border-b-2 mt-2">
                  <p>0 reactions</p>
                </div>

                <div className="flex justify-evenly mt-4">
                  <div className="flex flex-col justify-center items-center">
                    <button>
                      <AiFillHeart
                        className={"text-2xl hover:scale-110 duration-200"}
                      />
                    </button>
                    <span>Love</span>
                  </div>
                  <Link
                    // to={`/post/${_id}`}
                    className="flex flex-col  items-center justify-center "
                  >
                    <button>
                      <BiCommentDetail className="text-2xl" />
                    </button>
                    <span>Comment</span>
                  </Link>
                  <Link
                    // to={`/post/${_id}`}
                    className="flex flex-col items-center justify-center "
                  >
                    <TbListDetails className="text-2xl" />
                    <span>Details</span>
                  </Link>
                </div>
                <div className="w-full mt-2 h-[2%]  bg-zinc-200 px-2 rounded-lg text-stone-700 border border-stone-400">
                  {/* <Link to={`/post/${_id}`}> */}
                  <p>Write your comment here</p>
                  {/* </Link> */}
                </div>
              </div>
        </div>
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default Post;
