import React from 'react';
import profile from '../../../assets/profile.jpg'
import { MdAddPhotoAlternate, MdOutlineVideoLibrary } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import apple from '../../../assets/Apple-Logo.png';
import canva from '../../../assets/canva.png';
import facebook from '../../../assets/facebook.png';
import github from '../../../assets/github.png';
import instagram from '../../../assets/instagram.png';
import linkedin from '../../../assets/linkedin.png';
import pintrest from '../../../assets/pintrest.jpg';
import samsung from '../../../assets/samsung.png';
import snapchat from '../../../assets/Snapchat.jpg';


const Post = () => {
    return (
      <div className="md:flex gap-5 mt-5 md:mx-10">
        <div className="rounded-md md:w-[25%] bg-white shadow-xl">
          <div className="px-3 py-5">
            <img
              className="w-[25%] mx-auto rounded-full"
              src={profile}
              alt=""
            />
            <div className="text-center">
              <h2 className="text-xl">Name</h2>
              <p>Mern Stack Developer || Front-end Developer</p>
            </div>
          </div>
        </div>

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
        <input type="checkbox" id="post-modal" className="modal-toggle" />
        <div className="modal sm:modal-middle ">
          <div className="modal-box">
            <label
              htmlFor="post-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
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


        <div className="md:w-[25%] bg-white shadow-xl rounded-md">
          <h3 className="text-2xl  text-center">Our Sponsors</h3>
          <div className="flex items-center justify-evenly py-3">
            <img className="w-[20%]" src={apple} alt="" />
            <img className="w-[20%]" src={canva} alt="" />
            <img className="w-[17%]" src={github} alt="" />
          </div>
          <div className="flex items-center justify-evenly py-3">
            <img className="w-[17%]" src={facebook} alt="" />
            <img className="w-[16%]" src={instagram} alt="" />
            <img className="w-[17%]" src={linkedin} alt="" />
          </div>
          <div className="flex items-center justify-evenly py-3">
            <img className="w-[20%]" src={pintrest} alt="" />
            <img className="w-[20%]" src={samsung} alt="" />
            <img className="w-[20%]" src={snapchat} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Post;