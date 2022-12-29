import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import profile from "../../../assets/profile.jpg";
import { AuthContext } from '../../../Context/AuthProvider';
import LeftUser from './LeftUser';

const LeftSide = () => {

  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/users?email=${user?.email}`;

  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });
  // console.log(users);

    return (
      <div className="rounded-md md:w-[25%] h-[20%] bg-white shadow-xl">
        {
          users?.map(user => <LeftUser
          key={user._id}
          user={user}
          ></LeftUser>)
        }
      </div>
    );
};

export default LeftSide;