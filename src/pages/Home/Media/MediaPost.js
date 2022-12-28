import React, { useState } from 'react';
import profile from "../../../assets/profile.jpg";
import linkedin from "../../../assets/linkedin.png";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";

const MediaPost = ({post}) => {

    const { reactions, postText, photoURL, displayName, postImage, email} = post;

    const [toggleClass, setToggleClass] = useState(false);
    const toggle = () => {
      setToggleClass(!toggleClass);
    };
    return (
      <div className="mb-5  bg-white shadow-xl py-4 px-3 rounded-md">
        <div className="flex">
          <img className="w-[7%] rounded-full" src={photoURL} alt="" />
          <div className="ml-2">
            <h2 className="text-stone-700">{displayName}</h2>
            <p className="w-[5px] text-stone-700 text-xs leading-3">{email}</p>
          </div>
        </div>
        <p className="pt-2 pb-1">{postText}</p>
        <img className="w-[50%] mx-auto pt-2" src={postImage} alt="" />

        <div className="flex justify-evenly mt-4">
          <div className="flex flex-col justify-center items-center">
            <span onClick={toggle}>
              <AiFillHeart
                className={
                  "text-2xl" +
                  " text-red-700" +
                  (toggleClass ? "text-red-700" : "")
                }
              />
            </span>
            <span>Love</span>
          </div>
          <div className="flex flex-col  items-center justify-center ">
            <button>
              <BiCommentDetail className="text-2xl" />
            </button>
            <span>Comment</span>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <TbListDetails className="text-2xl" />
            <span>Details</span>
          </div>
        </div>
      </div>
    );
};

export default MediaPost;