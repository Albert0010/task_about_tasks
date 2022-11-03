import React from 'react';
import {useNavigate} from "react-router";
import {Button} from "../constants/constants.js";

function Board({board,username}) {
    const nav = useNavigate();

    const handleUserClick = ()=>{
        nav(`/${username}/${board.boardId}`);
    }


    return (
        <div>
            <h1 onClick={handleUserClick}>{board.boardName}</h1>
        </div>
    );
}

export default Board;