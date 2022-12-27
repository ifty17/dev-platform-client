import React from 'react';
import profile from '../../../assets/profile.jpg'
import { MdAddPhotoAlternate, MdOutlineVideoLibrary } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";

const Post = () => {
    return (
      <div className="flex gap-5 mt-5">
        <div className="rounded-md w-[25%] bg-white shadow-xl">
          <div className="px-3 py-5">
            <img
              className="w-[30%] mx-auto rounded-full"
              src={profile}
              alt=""
            />
            <div className="text-center">
              <h2 className="text-xl">Name</h2>
              <p>Mern Stack Developer || Front-end Developer</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[42%]  bg-white py-4 px-3 rounded-md">
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
            className="flex justify-between mx-6 mt-3"
          >
            <p className="flex gap-2 hover:bg-zinc-200 p-2 rounded-md">
              <MdAddPhotoAlternate className="text-2xl text-sky-600"></MdAddPhotoAlternate>{" "}
              <span>Photo</span>
            </p>
            <p className="flex gap-2 hover:bg-zinc-200 p-2 rounded-md">
              <MdOutlineVideoLibrary className="text-2xl text-green-600"></MdOutlineVideoLibrary>{" "}
              <span>Video</span>
            </p>
            <p className="flex gap-2 hover:bg-zinc-200 p-2 rounded-md">
              <BsFillCalendarDateFill className="text-2xl text-yellow-600"></BsFillCalendarDateFill>{" "}
              <span>Event</span>
            </p>
            <p className="flex gap-2 hover:bg-zinc-200 p-2 rounded-md">
              <RiArticleLine className="text-2xl text-orange-700"></RiArticleLine>{" "}
              <span>Write article</span>
            </p>
          </label>
        </div>
        <input type="checkbox" id="post-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="post-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Post;