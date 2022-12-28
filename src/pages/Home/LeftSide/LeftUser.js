import React from 'react';


const LeftUser = ({ user }) => {

  const { displayName, title, institution, photoURL, email } = user;

  return (
        <div className="px-3 py-5">
          <img className="w-[25%] mx-auto rounded-full" src={photoURL} alt="" />
          <div className="text-center">
            <h2 className="text-xl text-stone-700">{displayName}</h2>
            <p className="text-stone-700 text-base pt-2">{title}</p>
            <p className="text-stone-700 text-xs py-2">{institution}</p>
            <p className="text-stone-700 text-xs">{email}</p>
          </div>
        </div>
  );
};

export default LeftUser;