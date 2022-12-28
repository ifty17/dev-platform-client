import React from 'react';
import apple from "../../../assets/Apple-Logo.png";
import canva from "../../../assets/canva.png";
import facebook from "../../../assets/facebook.png";
import github from "../../../assets/github.png";
import instagram from "../../../assets/instagram.png";
import linkedin from "../../../assets/linkedin.png";
import pintrest from "../../../assets/pintrest.jpg";
import samsung from "../../../assets/samsung.png";
import snapchat from "../../../assets/Snapchat.jpg";

const RightSide = () => {
    return (
      <div className="md:w-[25%] bg-white shadow-xl rounded-md">
        <h3 className="text-2xl  text-center text-stone-700">Our Sponsors</h3>
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
    );
};

export default RightSide;