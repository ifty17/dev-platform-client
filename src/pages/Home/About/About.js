import React from 'react';
import RightSide from '../RightSide/RightSide';
import profile from "../../../assets/profile.jpg";
import { MdOutlineModeEditOutline } from "react-icons/md";


const About = () => {
    return (
      <div className="md:flex gap-5 mt-5 md:mx-10">
        <div className="my-5 md:my-0 w-full md:w-[75%] md:h-[42%]  bg-white py-4 px-3 rounded-md shadow-xl">
          <div className="mx-4">
            <img className="w-[25%] rounded-full" src={profile} alt="" />
            <div className="flex justify-between">
              <p className="text-3xl pt-3 pb-2">Rahat Kabir Ifty</p>
              <label htmlFor="edit-modal">
                <MdOutlineModeEditOutline className="text-4xl rounded-full hover:scale-110 duration-300"></MdOutlineModeEditOutline>
              </label>
            </div>
            <p>Web Developer</p>
            <p>Ideal College </p>

            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal sm:modal-middle ">
              <div className="modal-box">
                <label
                  htmlFor="edit-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <form>
                  <div>
                    <div className="pb-2">
                      <p>Name</p>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="pb-2">
                      <p>Email</p>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="pb-2">
                      <p>Title</p>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full "
                      />
                    </div>
                    <div className="pb-2">
                      <p>Last institution</p>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full "
                      />
                    </div>
                  </div>
                  <button type="submit" className="modal-action  w-full">
                    <label htmlFor="edit-modal" className="btn">
                      Update!
                    </label>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <RightSide></RightSide>
      </div>
    );
};

export default About;