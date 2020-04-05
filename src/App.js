import React, { Component, useState } from 'react';

/* This is functional Comp with useState Hooks */
const App = () =>{
 const [count, setCount] = useState(0);

 const increment = () =>{
   setCount(count + 1)
 } 
 return(
   <div>
     <h2>Countr App</h2>
     <button onClick={increment}>Clicked{count}times</button>
   </div>
 );
};

/* This is class Comp */
/* class App extends Component {
   state = {
    count: 0
   }
   increment = () =>{
     this.setState ({
      count: this.state.count + 1
     })
     
   }
  render(){
    return (
      <div>
      <h2>Counter App</h2>
       <button onClick={this.increment}>Clicked{this.state.count}times</button>
      </div>
    )
    
  }
   
} */

export default App;
