import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import RightSide from '../RightSide/RightSide';
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { AuthContext } from '../../../Context/AuthProvider';
import profile from '../../../assets/profile.jpg';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import CommentsById from './CommentsById';

const PostDetails = () => {


    const {user} = useContext(AuthContext);
    const {reactions, postText, photoURL, displayName, postImage, email, _id} = useLoaderData();
    console.log(photoURL);


 const [like, setLike] = useState(reactions);

  const increaseLike = (id) => {
    setLike(like + 1);
    // console.log(like);
    // console.log(id);

    const newLike = {
      like,
    };

    fetch(`https://devplatform-server.vercel.app/feeds/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newLike),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
        }
      });
    }
















    
    const url = `https://devplatform-server.vercel.app/commentsbyid?commentId=${_id}`;

    const { data: comments = [], refetch } = useQuery({
      queryKey: ["comments", _id],
      queryFn: async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      },
    });

    const handleComment = event =>{
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;

        let today = new Date().toLocaleString();
        console.log(today);


        const userComment = {
          commentId: _id,
          dateField: today,
          photoURL: user?.photoURL,
          displayName: user?.displayName,
          email: user?.email,
          comment
        };

        fetch("https://devplatform-server.vercel.app/comments", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userComment),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Comment posted successful");
            form.reset();
            refetch();
          });


    }


    return (
      <div className="md:flex gap-5 mt-5 md:mx-10">
        <div className="my-5 md:mt-0 md:mb-52 w-full md:w-[75%] md:h-[42%]  bg-white py-4 px-3 rounded-md shadow-xl ">
          <div className="mb-5 py-4 px-3 rounded-md">
            <div className="flex">
              <img className="w-[7%] rounded-full" src={photoURL} alt="" />
              <div className="ml-2">
                <h2 className="text-stone-700">{displayName}</h2>
                <p className="w-[5px] text-stone-700 text-xs leading-3">
                  {email}
                </p>
              </div>
            </div>
            <p className="pt-2 pb-1">{postText}</p>
            <img className="w-[30%] mx-auto pt-2" src={postImage} alt="" />

            <div className="border-b-2 mt-2">
              <p>{reactions} reactions</p>
            </div>

            <div className="flex justify-evenly mt-4">
              <div className="flex flex-col justify-center items-center">
                <button onClick={() => increaseLike(_id)}>
                  <AiFillHeart
                    className={"text-2xl hover:scale-110 duration-200"}
                  />
                </button>
                <span>Love</span>
              </div>
              <Link className="flex flex-col  items-center justify-center ">
                <button>
                  <BiCommentDetail className="text-2xl" />
                </button>
                <span>Comment</span>
              </Link>
              <Link className="flex flex-col items-center justify-center ">
                <TbListDetails className="text-2xl" />
                <span>Details</span>
              </Link>
            </div>
            <form onSubmit={handleComment} className="pb-4">
              <div className="mt-3">
                <textarea
                required
                  name="comment"
                  className="textarea textarea-bordered w-full"
                  placeholder="Write your comment"
                ></textarea>
              </div>
              <div className="ml-[830px]">
                <button type="submit" className="btn">
                  Post!
                </button>
              </div>
            </form>
            <div>
              {
                comments.map(cmt => <CommentsById
                key={cmt._id}
                cmt={cmt}
                ></CommentsById>)
              }
            </div>
          </div>
        </div>
        <RightSide></RightSide>
      </div>
    );
};

export default PostDetails;