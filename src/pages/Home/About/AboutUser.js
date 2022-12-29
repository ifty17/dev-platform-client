import React, { useContext, useState } from 'react';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AuthContext } from '../../../Context/AuthProvider';

const AboutUser = ({user}) => {

    // const {user: userAccount} = useContext(AuthContext);
    // console.log(userAccount);

    const { displayName, title, institution, photoURL, email, _id } = user;

    const [userProfile, setUserProfile] = useState(user);

    const handleEditProfile = (event) =>{
        event.preventDefault();
        console.log(userProfile);
    }


     const handleInputChange = (event) => {
       const field = event.target.name;
       const value = event.target.value;
       const newUser = { ...userProfile };
       newUser[field] = value;
       setUserProfile(newUser);
     };

    return (
      <div className="my-5 md:my-0 w-full md:w-[75%] md:h-[42%]  bg-white py-4 px-3 rounded-md shadow-xl">
        <div className="mx-4">
          <img className="w-[25%] rounded-full" src={photoURL} alt="" />
          <div className="flex justify-between">
            <p className="text-3xl pt-3 pb-2">{displayName}</p>
            <label htmlFor="edit-modal">
              <MdOutlineModeEditOutline className="text-4xl rounded-full hover:scale-110 duration-300"></MdOutlineModeEditOutline>
            </label>
          </div>
          <p>{title}</p>
          <p>{institution}</p>
          <p>{email}</p>

          <input type="checkbox" id="edit-modal" className="modal-toggle" />
          <div className="modal sm:modal-middle ">
            <div className="modal-box">
              <label
                htmlFor="edit-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <form onSubmit={handleEditProfile}>
                <div>
                  <div className="pb-2">
                    <p>Name</p>
                    <input
                      name="name"
                      type="text"
                      value={displayName}
                      disabled
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="pb-2">
                    <p>Email</p>
                    <input
                      name="email"
                      type="text"
                      value={email}
                      disabled
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="pb-2">
                    <p>Title</p>
                    <input
                      onChange={handleInputChange}
                      name="title"
                      type="text"
                      defaultValue={title}
                      placeholder="Type here"
                      className="input input-bordered w-full "
                    />
                  </div>
                  <div className="pb-2">
                    <p>Last institution</p>
                    <input
                      onChange={handleInputChange}
                      name="institution"
                      type="text"
                      defaultValue={institution}
                      placeholder="Type here"
                      className="input input-bordered w-full "
                    />
                  </div>
                </div>
                <button type="submit" className="modal-action btn">
                  Update!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUser;