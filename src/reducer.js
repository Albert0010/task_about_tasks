import uuid from "react-uuid";

export const ACTIONS = {
    ACTION_ADDBUTTON_CLICKED:"clicked",
    ACTION_ADD_USER:"addUser",
    ACTION_INPUTCHANGE:"changeInput",
    ACTION_BOARD_NAME_CHANGE:"board name Change",
    ACTION_BOARD_NAME_ADD:"addBoardName",
    ACTION_ADD_TASK:"addTask",
    ACTION_TASK_INPUT:"taskInput",
    ACTION_SAVE_TASK_INPUT:"saveTAskInputChange"
}


export function reducer(state,action) {

    switch (action.type){
        case ACTIONS.ACTION_ADDBUTTON_CLICKED:{
            return {...state,IsaddUserClicked:true}
        }
        case ACTIONS.ACTION_INPUTCHANGE:{
            const {name} = action.payload;
            return {...state,userNameInp:name}
        }
        case ACTIONS.ACTION_ADD_USER:{
            const {name} = action.payload;
            return {...state,IsaddUserClicked:false,users:[...state.users,{
                    userID:uuid(),
                    name:name,
                    boards:[]
                }],userNameInp:""}
        }
        case ACTIONS.ACTION_BOARD_NAME_CHANGE:{
            const {input} = action.payload;
            console.log(input)
            return {...state,boardNameInp:input}
        }
        case ACTIONS.ACTION_BOARD_NAME_ADD:{
            const {boardName,id} = action.payload;

            return {...state,users:state.users.map((user)=>{

                    if(id === user.userID){
                        return {...user,boards:[...user.boards,{
                                boardId:uuid(),
                                boardName:boardName,
                                tasks:{
                                    todo:[{taskId:uuid(),taskName:"JS"}],
                                    doing:[{taskId:uuid(),taskName:"JAVA"}],
                                    done:[{taskId:uuid(),taskName:"CPP"}]
                                }
                            }]}
                    }
                    return {...user};
                })}
        }
        case ACTIONS.ACTION_TASK_INPUT:{
            const {taskName} = action.payload;
            return {...state,taskNameInp:taskName};
        }
        case ACTIONS.ACTION_SAVE_TASK_INPUT:{
            const {taskName,taskId,boardId,usersID,status} = action.payload;
            return {...state,users:state.users.map((user)=>{
                debugger;
                if(user.userID === usersID){
                    return {...user,boards:user.boards.map((board)=>{
                            if(board.boardId === boardId){
                                return {...board,tasks:{...board.tasks,[status]:taskName}}
                            }
                            return [...board];
                        })}
                }
                return [...user];
                })}
        }
    }
}
