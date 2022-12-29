import React, { useContext } from 'react';
import RightSide from '../RightSide/RightSide';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import AboutUser from './AboutUser';


const About = () => {

    const { user } = useContext(AuthContext);

    const url = `https://devplatform-server.vercel.app/users?email=${user?.email}`;

    const { data: users = [] } = useQuery({
      queryKey: ["users", user?.email],
      queryFn: async () => {
        const res = await fetch(url);
        const data = res.json();
        return data;
      },
    });

    return (
      <div className="md:flex gap-5 mt-5 md:mx-10">
        {
            users?.map(user => <AboutUser
            key={user?._id}
            user={user}
            ></AboutUser>)
        }

        <RightSide></RightSide>
      </div>
    );
};

export default About;