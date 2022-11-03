import React, {useState} from 'react';
import uuid from "react-uuid";
import {Button} from "../constants/constants.js";
import UnqiueTask from "./UnqiueTask.js";

function Task({boardName,tasks,users,board,handleSaveTaskADdButton}) {



    console.log(users);


    return (

        <>
        <div className={"column"}>
            {Object.keys(tasks).map((task)=>{
                return <UnqiueTask key={uuid()}
                                   users={users}
                                   status={task}
                                   handleSaveTaskADdButton={handleSaveTaskADdButton}
                                   task={tasks[task]}
                                   board={board}
                                   />
            })}
        </div>

        </>
    );
}

export default Task;
