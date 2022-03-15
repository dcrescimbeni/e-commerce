import React from 'react';

import { useSelector } from "react-redux";

const Profile = () => {

    const user = useSelector((state) => {
        console.log(state.user);
        return state.user;
      });
    

    return (
        <div>
            <br/>
            <br/>
            <br/>
            Hola {user.firstName} este es tu perfil!
        </div>
    )
}

export default Profile
