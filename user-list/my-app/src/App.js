// import React from "react";
// import "./App.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) =>
//         this.setState({
//           items: data,
//         })
//       );
//   }

//   render() {
//     const { items } = this.state;

//     return (
//       <div className="app">
//         <h1>Fetch data from an api in react</h1>
//         {items.map((item) => (
//           <div>
//             <div className="card">
//               <div className="container">
//                 <h4>
//                   <b>UserName : {item.username} </b>
//                 </h4>
//                 <p>Full Name: {item.name} </p>
//                 <p>User_email: {item.email} </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
import "./App.css";
import PostRequestHooks from "./PostRequestHooks";

function App() {
  return (
    <div>
      <h3>React HTTP POST Requests with Fetch</h3>
      {/* <PostRequest/> */}
      <PostRequestHooks />
    </div>
  );
}

export default App;
