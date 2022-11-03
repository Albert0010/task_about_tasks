import React from 'react';
import {useNavigate, useParams} from "react-router";
import Board from "./Board.js";
import {Button, Input} from "../constants/constants.js";

function User({handleBoardNameChange,handleAddBoardClickChange,users}) {
    const nav = useNavigate();
    const navigateBAck = ()=>{
        nav("/")
    }
    const id = useParams();



    return (
        <>
            <Button onClick={navigateBAck}>Back</Button>
            <div>
                <Input onChange={handleBoardNameChange}/>
                <Button onClick={()=>handleAddBoardClickChange(id.username)}>Add Board</Button>
            </div>

            {users.map((user)=>{
                if(user.userID === id.username){
                    return user.boards.map((i)=><Board key={i.boardId}
                                                          username={id.username}
                                                          board={i}/>)
                }
            })}

        </>

    );
}

export default User;