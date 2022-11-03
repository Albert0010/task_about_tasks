import React from 'react';
import {useParams, useNavigate} from "react-router";
import {Button} from "../constants/constants.js";
import Task from "./Task.js";

function EachBoard({users,handleChangeTaskInput,handleSaveTaskADdButton}) {
    const nav = useNavigate();


    const path = useParams();


    const user = users && users.filter((i)=> i.userID === path.username);
    const board = user[0] && user[0].boards.filter((board)=>board.boardId === path.eachBoard );


    const navigateBAck = ()=>{
        nav(`/${path.username}`);
    }



    return (
        <div >
            {board.map(i=><Task key={i.boardId}
                                {...i}
                                handleSaveTaskADdButton={handleSaveTaskADdButton}
                                users={users}
                                board={board}
                                />)}
            <Button onClick = {navigateBAck}>Back</Button>
        </div>
    );
}

// <div key={i.boardId}>
//     <h1>{i.boardName}</h1>
// </div>

export default EachBoard;