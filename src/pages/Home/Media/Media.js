import React, { useState } from 'react';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';

import { useQuery } from '@tanstack/react-query';
import MediaPost from './MediaPost';


const Media = () => {

    

    const { data: posts = [], refetch } = useQuery({
      queryKey: ["posts"],
      queryFn: async () => {
        const res = await fetch("https://devplatform-server.vercel.app/posts");
        const data = await res.json();
        return data;
      },
    });



    return (
      <div className="md:flex gap-5 mt-5 md:mx-10">
        <LeftSide></LeftSide>

        <div className="my-5 md:mt-0 w-full md:w-[50%] md:h-[42%]">
          {
            posts?.map(post =><MediaPost
            key={post._id}
            post={post}
            refetch={refetch}
            >

            </MediaPost>)
          }
        </div>

        <RightSide></RightSide>
      </div>
    );
};

export default Media;