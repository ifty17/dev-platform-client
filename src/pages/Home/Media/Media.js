import React from 'react';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';

const Media = () => {
    return (
      <div className="md:flex gap-5 mt-5 md:mx-10">
        <LeftSide></LeftSide>

        <div className="my-5 md:my-0 w-full md:w-[50%] md:h-[42%]  bg-white py-4 px-3 rounded-md shadow-xl">
          
          
        </div>

        <RightSide></RightSide>
      </div>
    );
};

export default Media;