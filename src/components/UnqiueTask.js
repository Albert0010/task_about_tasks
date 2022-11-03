import {useState} from "react";
import React from 'react';
import {Button, Input} from "../constants/constants.js";

function UnqiueTask({task,board,handleSaveTaskADdButton,users,status}) {
    const [taskNameInp,handleChangeTaskInput] = useState("");
    const [clicked,setClick] = useState(false);

    console.log(status,task,board,users);

    return (
        <>
            {!clicked  ? <div>
                {task.map(task=>{
                    return (<div key={task.taskId}>
                        <div key={task.taskId}>
                            <h1>{task.taskName}</h1>
                        </div>
                    </div>)
                })}
                <Button onClick={setClick}>Edit Task Name</Button>
            </div>
                :
            <div>
                <Input type={"text"}
                       value={taskNameInp}
                       placeholder={"write task name"}
                       onChange={(e)=>handleChangeTaskInput(e.target.value)}/>
                <Button onClick={()=>{
                    handleSaveTaskADdButton(taskNameInp,task[0].taskId,board[0].boardId,users[0].userID,status)
                }
                }>Save</Button>
            </div>
            }
        </>
    );
}

export default UnqiueTask;
