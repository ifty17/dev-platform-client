import React from 'react';
import profile from '../../../assets/profile.jpg';
import { MdAddPhotoAlternate, MdOutlineVideoLibrary } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';


const Post = () => {

  const handlePost = (event) =>{
    event.preventDefault();
    const form = event.target;
    const postText = form.postText.value;
    const image = form.image.files[0];
    console.log(postText, image);

    const formData = new FormData();
    formData.append("image", image);

    const url =
      "https://api.imgbb.com/1/upload?key=81c077d88a2ff4a629a342194065431e";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.display_url);
      });



  }

    return (
      <div className="md:flex gap-5 mt-5 md:mx-10">
        <LeftSide></LeftSide>

        <div className="my-5 md:my-0 w-full md:w-[50%] md:h-[42%]  bg-white py-4 px-3 rounded-md shadow-xl">
          <div className="flex gap-2 justify-center items-center">
            <img className="w-[8%] rounded-full" src={profile} alt="" />
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
                <button type="submit" className="modal-action  w-full">
                  <label htmlFor="post-modal" className="btn">
                    Post!
                  </label>
                </button>
              </form>
            </div>
          </div>
        </div>

        <RightSide></RightSide>
      </div>
    );
};

export default Post;