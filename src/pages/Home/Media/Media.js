import React from 'react';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import profile from '../../../assets/profile.jpg';
import linkedin from '../../../assets/linkedin.png'


const Media = () => {
    return (
      <div className="md:flex gap-5 mt-5 md:mx-10">
        <LeftSide></LeftSide>

        <div className="my-5 md:my-0 w-full md:w-[50%] md:h-[42%]  bg-white py-4 px-3 rounded-md shadow-xl">
          <div className='flex'>
            <img className="w-[7%] rounded-full" src={profile} alt="" />
            <div className='ml-2'>
              <h2 className="text-stone-700">Rahat Kabir Ifty</h2>
              <p className="w-[5px] text-stone-700 text-xs leading-3">
                iftyrahatkabir@gmail.com
              </p>
            </div>
          </div>
          <p className='pt-2 pb-1'>Linkedin is a such a nice platform for professionals. Here you can find jobs and many information about various kinds of technology</p>
            <img className='w-[50%] mx-auto pt-2' src={linkedin} alt="" />
        </div>

        <RightSide></RightSide>
      </div>
    );
};

export default Media;