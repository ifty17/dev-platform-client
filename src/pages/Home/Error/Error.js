import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../assets/error.png'

const Error = () => {
    return (
      <div className='pb-4'>
        <img className="w-[40%] mx-auto" src={error} alt="" />
        <h3 className="text-4xl text-center ">
          Please go back to{" "}
          <Link
            to="/home"
            className="text-blue-900 border-b border-blue-700"
          >
            Home
          </Link>
        </h3>
      </div>
    );
};

export default Error;