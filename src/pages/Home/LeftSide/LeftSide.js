import React from 'react';
import profile from "../../../assets/profile.jpg";

const LeftSide = () => {
    return (
      <div className="rounded-md md:w-[25%] bg-white shadow-xl">
        <div className="px-3 py-5">
          <img className="w-[25%] mx-auto rounded-full" src={profile} alt="" />
          <div className="text-center">
            <h2 className="text-xl text-stone-700">Name</h2>
            <p className="text-stone-700">
              Mern Stack Developer || Front-end Developer
            </p>
          </div>
        </div>
      </div>
    );
};

export default LeftSide;