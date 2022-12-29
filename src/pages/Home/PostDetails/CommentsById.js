import React from 'react';

const CommentsById = ({cmt}) => {

    const { dateField, photoURL, displayName, email, comment } = cmt;

    return (
      <div className="flex mt-3">
        <img
          className="w-[6%] h-[10%] rounded-full mr-3"
          src={photoURL}
          alt=""
        />
        <div className="bg-stone-300 p-2 rounded-md w-full">
          <div className="pb-2">
            <div className='flex justify-between items-center'>
              <p>{displayName}</p>
              <p className='text-[10px]'>{dateField}</p>
            </div>
            <p className="text-xs">{email}</p>
          </div>
          <p className="text-sm">{comment}</p>
        </div>
      </div>
    );
};

export default CommentsById;