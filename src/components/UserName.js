import React from 'react';
import {useNavigate} from "react-router";

function UserName({user}) {
    const nav = useNavigate();
    const handleUserClick = ()=>{
        nav(`/${user.userID}`);
    }
    return (
        <div>
            <h1 key={user.userID} onClick={handleUserClick} >{user.name}</h1>
        </div>
    );
}

export default UserName;