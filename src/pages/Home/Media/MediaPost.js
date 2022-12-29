import React, { useState } from 'react';
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { Link } from 'react-router-dom';

const MediaPost = ({post}) => {

    const {
      reactions,
      postText,
      photoURL,
      displayName,
      postImage,
      email,
      _id,
      dateField,
    } = post;

    const [like, setLike] = useState(0)
    console.log(like);
    
    

    const increaseLike = () =>{
      setLike(like + 1);
      fetch(`http://localhost:5000/feeds/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(like),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("user updated");
            console.log(data);
          }
        });
    }
    
    return (
      <div className="mb-5  bg-white shadow-xl py-4 px-3 rounded-md">
        <div className="flex">
          <img className="w-[7%] rounded-full" src={photoURL} alt="" />
          <div className="ml-2 w-full">
            <div className='flex items-center justify-between'>
              <h2 className="text-stone-700">{displayName}</h2>
              <p className='text-xs'>{dateField}</p>
            </div>
            <p className="w-[5px] text-stone-700 text-xs leading-3">{email}</p>
          </div>
        </div>
        <p className="pt-2 pb-1">
          {postText.slice(0, 150) + "......."}{" "}
          <Link to={`/post/${_id}`}>more</Link>{" "}
        </p>
        <img className="w-[50%] mx-auto pt-2" src={postImage} alt="" />

        <div className="border-b-2 mt-2">
          <p>{reactions} reactions</p>
        </div>

        <div className="flex justify-evenly mt-4">
          <div className="flex flex-col justify-center items-center">
            <button onClick={increaseLike}>
              <AiFillHeart
                className={"text-2xl hover:scale-110 duration-200"}
              />
            </button>
            <span>Love</span>
          </div>
          <Link
            to={`/post/${_id}`}
            className="flex flex-col  items-center justify-center "
          >
            <button>
              <BiCommentDetail className="text-2xl" />
            </button>
            <span>Comment</span>
          </Link>
          <Link
            to={`/post/${_id}`}
            className="flex flex-col items-center justify-center "
          >
            <TbListDetails className="text-2xl" />
            <span>Details</span>
          </Link>
        </div>
        <div className="w-full mt-2 h-[2%]  bg-zinc-200 px-2 rounded-lg text-stone-700 border border-stone-400">
          <Link to={`/post/${_id}`}>
            <p>Write your comment here</p>
          </Link>
        </div>
      </div>
    );
};

export default MediaPost;