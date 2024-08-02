// import "./App.css";
// import React, { useState, useEffect } from "react";
// function App(props) {
//   const [data, setData] = useState(1);
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     alert("count props called"+ props.count)
//   }, [props.count]);

//   return (
//     <div className="App">
//       <h1>count props:{props.count}</h1>
//       <h1>data props:{props.data}</h1>
//     </div>
//   );
// }

// export default App;


import React from 'react'

const User = (props) => {
  const data="vanshika"
  return (
    <div>
      <h2>User Name:</h2>
      <button onClick={()=>props.alert(data)}>Click Me</button>
    </div>
  )
}

export default User