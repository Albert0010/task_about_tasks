import {type} from "@testing-library/user-event/dist/type";
import {useReducer} from "react";
import logo from './logo.svg';
import './App.css';
import {Routes, useNavigate} from "react-router";
import {Route} from "react-router";
import uuid from "react-uuid";
import {reducer} from "./reducer.js";
import styled from 'styled-components'
import {ACTIONS} from "./reducer.js";
import User from "./components/User.js"

import {Button,Input} from "./constants/constants.js";

import UserName from "./components/UserName.js";
import Board from "./components/Board.js";

import EachBoard from "./components/EachBoard.js";


const initialState = {
  userNameInp:"",
  boardNameInp:"",
  IsaddUserClicked:false,
  users:[],
}


function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  const handleAddClick = ()=>{
    dispatch({type:ACTIONS.ACTION_ADDBUTTON_CLICKED})
  }

  const handleChangeInput = (e)=>{
    dispatch({type:ACTIONS.ACTION_INPUTCHANGE,payload:{name:e.target.value}})
  }
  const handleSave = ()=>{
    dispatch({type:ACTIONS.ACTION_ADD_USER,payload:{name:state.userNameInp}})
  }
  const handleBoardNameChange = (e)=>{
    dispatch({type: ACTIONS.ACTION_BOARD_NAME_CHANGE, payload: {input: e.target.value}})
  }
  const handleAddBoardClickChange = (id)=>{
    dispatch({type:ACTIONS.ACTION_BOARD_NAME_ADD,payload:{boardName:state.boardNameInp,id:id}})
  }

  const handleSaveTaskADdButton = (taskName,taskId,boardId,usersID,status)=>{
    dispatch({type:ACTIONS.ACTION_SAVE_TASK_INPUT,payload:{taskName:taskName,taskId:taskId,boardId:boardId,usersID:usersID,status:status}})
  }






  return (
    <div className="App">
      {!state.IsaddUserClicked
          ?
        <Button onClick={handleAddClick}>Add User</Button>
          :
      <>
        <Input value={state.userNameInp} onChange={handleChangeInput}/>
        <Button onClick={handleSave}>Save</Button>
      </>}


      <Routes>
        <Route index element={
        <div>
          {state.users.map((user)=><UserName user={user} key={user.userID}/>)}
        </div>}/>
        <Route path={"/:username"} element={<User users={state.users}
                                                  handleBoardNameChange={handleBoardNameChange}
                                                  handleAddBoardClickChange={handleAddBoardClickChange}/>} />
        <Route path={"/:username/:eachBoard"} element={<EachBoard users={state.users}
                                                                  handleSaveTaskADdButton={handleSaveTaskADdButton}
                                                                   />}/>
      </Routes>
    </div>
  );
}

export default App;
