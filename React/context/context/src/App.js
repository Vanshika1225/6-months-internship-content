import { useReducer } from "react";

import AddTask from "./Component/AddTask";
// import { createContext, useState } from "react";
import "./App.css";
import ListTask from "./Component/ListTask";
// import FormPanel from "./Component/FormPanel";

// const context = createContext(null);
// const userContext = createContext(null);
// function App() {
//   const [theme, setTheme] = useState("dark");
//   const [currentUser, setCurrentUser] = useState(null);
//   return (
//     <>
//       <context.Provider value={theme}>
//         <userContext.Provider value={{ currentUser, setCurrentUser }}>
//           <FormPanel />
//           <label>
//             <input
//               type="checkbox"
//               checked={theme === "dark"}
//               onChange={(e) => {
//                 setTheme(e.target.checked ? "dark" : "light");
//               }}
//             ></input>
//           </label>
//           use dark mode
//         </userContext.Provider>
//       </context.Provider>
//     </>
//   );
// }

// export default App;
// export { context, userContext};

// import React, { createContext } from "react";
// import CounterPart from "./Component/CounterPart";
// const counterContext = createContext();
// const App = () => {
//   return (
//     <>
//       <counterContext.Provider value={0}>
//         <CounterPart/>
//       </counterContext.Provider>
//     </>
//   );
// };

// export default App;
// export {counterContext}

// import React from 'react'
// import UseReducerExample from './Component/useReducerExample'
// import ReduceExample from './Component/ReduceExample'
// const App = () => {
//   return (
//     <>
// {
/* <UseReducerExample /> */
// }
//     <ReduceExample/>
//     </>
//   )
// }

// export default App
// const reducerMethod = (state, action) => {
//   if (action.type === "added") {
//     return [
//       ...state,
//       {
//         id: action.id,
//         text: action.text,
//         done: false,
//       },
//     ];
//   }
//   else if(action.type==='changed')
//   {
//     return state.map(t=>{
//       if(t.id === action.text.id){
//         return action.text;
//       }
//       else{
//         return t;
//       }
//     })
//   }
//   else if(action.type==='deleted')
//   {
//     return state.filter(t=>t.id!==action.id)
//   }
// };

// const App = () => {
//   const [state, dispatch] = useReducer(reducerMethod, taskList);

//   function handleAddTask(text) {
//     dispatch({
//       type: "added",
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(text){
//     dispatch({
//       type:'changed',
//       text:text,
//     })
//   }

//   function handleDeleteTask(textId){
//     dispatch({
//       type:'deleted',
//       id:textId,
//     })
//   }

//   return (
//     <>
//       <div className="App">
//         <h1>Task Iternary</h1>
//         <AddTask onAddTask={handleAddTask} />

//         <ListTask state={state} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
//       </div>
//     </>
//   );
// };

// let nextId = 3;
// const taskList = [
//   { id: 0, text: "Visit Kafka Museum", done: true },
//   { id: 1, text: "Watch a poppet show", done: false },
//   { id: 2, text: "Drink Lemon Juice", done: false },
// ];

// export default App;

import React from "react";
import TodoList from "./Component/TodoList";

const App = () => {
  return (
    <>
     <div className="App">
     <TodoList username="Vanshika" />
     </div>
    </>
  );
};

export default App;
