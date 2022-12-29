import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import RightSide from '../RightSide/RightSide';
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { AuthContext } from '../../../Context/AuthProvider';
import profile from '../../../assets/profile.jpg';
import { toast } from 'react-hot-toast';

const PostDetails = () => {


    const {user} = useContext(AuthContext);
    const {reactions, postText, photoURL, displayName, postImage, email, _id} = useLoaderData();
    console.log(photoURL);

    const handleComment = event =>{
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;

        let today = new Date().toLocaleString();
        console.log(today);


        const userComment = {
          dateField: today,
          photoURL: user?.photoURL,
          displayName: user?.displayName,
          email: user?.email,
          comment
        };

        fetch("http://localhost:5000/comments", {
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
                <button>
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
            <div className='flex mt-3'>
                <img className="w-[6%] h-[10%] rounded-full mr-3" src={profile} alt="" />
              <div className='bg-stone-300 p-2 rounded-md'>
                <div className='pb-2'>
                  <p>Rahat Kabir Ifty</p>
                  <p className="text-xs">iftyrahatkabir@gmail.com</p>
                </div>
                <p className='text-sm'>
                  Database-as-a-Service (DBaaS) is a service that allows you to
                  set up, deploy, and scale a database without worrying about
                  on-premise physical hardware, software updates, and the
                  details of configuring for performance. With DBaaS, a cloud
                  provider does all that for you—and gets you up and running
                  right away.
                </p>
              </div>
            </div>
          </div>
        </div>
        <RightSide></RightSide>
      </div>
    );
};

export default PostDetails;