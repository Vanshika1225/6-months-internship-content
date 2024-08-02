import "./App.css";
// import React, { useState, useEffect } from "react";
// import User from "./User";
// function App() {
//   const [data, setData] = useState(1);
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.warn("Ue effect called");
//   }, []);
//   useEffect(() => {
//     console.warn("Ue effect called in count");
//   }, [count]);
//   useEffect(() => {
//     console.warn("Ue effect called in data");
//   }, [data]);
//   return (
//     <div className="App">
//       <h1>Use Effect hook</h1>
//       <User count={count} data={data} />
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Update count
//       </button>
//       <button
//         onClick={() => {
//           setData(data + 1);
//         }}
//       >
//         Update data
//       </button>
//     </div>
//   );
// }

// export default App;
// import { useState, useEffect } from 'react';
// import { createConnection } from './Chat.js';

// function ChatRoom({ roomId }) {
//   const [serverUrl, setServerUrl] = useState('https://localhost:1234');

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => {
//       connection.disconnect();
//     };
//   }, [roomId, serverUrl]);

//   return (
//     <>
//       <label>
//         Server URL:{' '}
//         <input
//           value={serverUrl}
//           onChange={e => setServerUrl(e.target.value)}
//         />
//       </label>
//       <h1>Welcome to the {roomId} room!</h1>
//     </>
//   );
// }

// export default function App() {
//   const [roomId, setRoomId] = useState('general');
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <label>
//         Choose the chat room:{' '}
//         <select
//           value={roomId}
//           onChange={e => setRoomId(e.target.value)}
//         >
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Close chat' : 'Open chat'}
//       </button>
//       {show && <hr />}
//       {show && <ChatRoom roomId={roomId} />}
//     </>
//   );
// }

// import React from "react";
// import { Button } from "react-bootstrap";
// const App = () => {
//   return (
//     <>
//       <div>App</div>
//       <Button
//         onClick={() => {
//           alert("BButton clicked");
//         }}
//       >
//         Click Me
//       </Button>
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { Table } from "react-bootstrap";
// const App = () => {
//   const student = [
//     {
//       name: "vanshika",
//       email: "vashika.rbu@gmail.com",
//       contact: 847575547,
//       address: [
//         { houseNumber: 10, city: "Noida", country: "India" },
//         { houseNumber: 34, city: "Gujrat", country: "India" },
//         { houseNumber: 84, city: "Rajasthan", country: "India" },
//       ],
//     },
//     {
//       name: "Anil",
//       email: "Anil.rbu@gmail.com",
//       contact: 78888888888,
//       address: [
//         { houseNumber: 10, city: "Noida", country: "India" },
//         { houseNumber: 34, city: "Gujrat", country: "India" },
//         { houseNumber: 84, city: "Rajasthan", country: "India" },
//       ],
//     },
//     {
//       name: "Saam",
//       email: "Saam.rbu@gmail.com",
//       contact: 847575547,
//       address: [
//         { houseNumber: 10, city: "Noida", country: "India" },
//         { houseNumber: 34, city: "Gujrat", country: "India" },
//         { houseNumber: 84, city: "Rajasthan", country: "India" },
//       ],
//     },
//   ];

//   return (
//     <div>
//       <Table striped bordered hover>
//         <tbody>
//           <tr>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Contact</td>
//           </tr>

//           {student.map((data, i) =>
//               <tr key={i}>
//                 <td>{i}</td>
//                 <td>{data.name}</td>
//                 <td>{data.email}</td>
//                 <td>{data.contact}</td>
//                 <td>
//                   <Table striped bordered hover>
//                     <tbody>
//                       {data.address.map((item) => (
//                         <tr>
//                           <td>{item.houseNumber}</td>
//                           <td>{item.city}</td>
//                           <td>{item.country}</td>
//                         </tr>
//                       ))}{" "}
//                     </tbody>
//                   </Table>
//                 </td>
//               </tr>
//             )
//           }
//         </tbody>
//       </Table>
//     </div>

//   );
// };

// export default App;

// import React from "react";
// import Student from "./student";
// const App = () => {
//   const student = [
//     {
//       name: "vanshika",
//       email: "vashika.rbu@gmail.com",
//       contact: 847575547,
//     },
//     {
//       name: "Anil",
//       email: "Anil.rbu@gmail.com",
//       contact: 78888888888,
//     },
//     {
//       name: "Saam",
//       email: "Saam.rbu@gmail.com",
//       contact: 847575547,
//     },
//   ];
//   return (
//     <div className="App">
//       <h1>student list</h1>
//       {student.map((item, i) => (
//         <Student item={item} />
//       ))}
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import User from "./User";
// const App = () => {
//   function parant(data){
//     alert(data)
//   }
//   return (
//     <div className="App">
//       <h1>Lifting state Up</h1>
//       <User alert={parant}/>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react'

// function Panel({title,children}){
//   const [isActive,setIsActive]=useState(false);
//   return(
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive? 
//       (<p>{children}</p>)
//       :
//       (<button onClick={()=>setIsActive(true)}>Show</button>)}
//     </section>
//   )
// }

// export default function Accordion()
// {
//    return(
//     <>
//     <h1>Lifting state up Example</h1>
//     <Panel title="about">
//       <p> With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//     </p>
//     </Panel>
//     <Panel title="contact">
//       <p>  The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
//    </p>
//     </Panel>
//     </>
//    )
// }

// import React, { useState } from 'react'
// import Panel from "./Panel";
// const App = () => {
//   const [activeIndex,setActiveIndex]=useState(0)
//   return (
//    <>
//      <h1>Lifting state up Example</h1>
//      <Panel title="about" isActive={activeIndex==0} onShow={()=>{setActiveIndex(0)}}><panel/>
//        <p> With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//      </p>
//      </Panel>
//      <Panel title="contact" isActive={activeIndex==1} onShow={()=>{setActiveIndex(1)}}>
//        <p>  The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
//     </p>
//      </Panel>
//    </>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  const [item,setItem]=useState(1);

  return (
    <div>
      <h2>Count:{count}</h2>
      <h2>Item:{item}</h2>
      <button onClick={()=>[setCount(count+1)]}>Update count</button>
      <button onClick={()=>[setItem(item+1)]}>Update item</button>
    </div>
  )
}

export default App