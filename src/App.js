import React, { Component, useState, useEffect } from 'react';

//News Api testing
const App = () =>{
  // state
  const [news, setNews] = useState([]);
  const [searchQuery, setSerchQuery] = useState("react");
  const [url, setUrl] = useState(`http://hn.algolia.com/api/v1/search?query=react`);

  const [loading, setLoading] = useState(false);

  // fetch news
  const fetchNews = () =>{
    //set loading true
    setLoading(true);
    fetch(url)
    .then(result => result.json())
    .then(data => (setNews(data.hits)),setLoading(false))
    .catch(error => console.log(error))
  };

  useEffect(() =>{
    fetchNews();
  }, [url]);

  const handleChange = e =>{
     setSerchQuery(e.target.value);
  }

  const handleSubmit = e =>{
    e.preventDefault()
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  }

  const showLoading = () => (loading? <h2>Loading....</h2>: '');

  const searchForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <button>Search</button>
      </form>
  );

  const showNews = () => (
    news.map((n, index) =>(
      <p key={1}>{n.title}</p>
       ))
  );

  return (
    <div>
      <h2>News</h2>
      {showLoading()}
      {searchForm()}
      {showNews()}
    </div>
  )
};

/* This is functional Comp with useState Hooks */
/* const App = () =>{
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
}; */

/* using hooks useEffect */
// const App = () =>{
//   const [count, setCount] = useState(0);

//   useEffect(() =>{
//     document.title = `Clicked ${count} times`
//   })
 
//   const increment = () =>{
//     setCount(count + 1)
//   } 
//   return(
//     <div>
//       <h2>Countr App</h2>
//       <button onClick={increment}>Clicked{count}times</button>
//     </div>
//   );
//  };





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

/* Here we discuss life cycle method with class comp */
/*  class App extends Component {
   state = {
    count: 0
   }
   increment = () =>{
     this.setState ({
      count: this.state.count + 1
     });
   }
   componentDidMount(){
     document.title = `Clicked ${this.state.count} times`
   }

  componentDidUpdate(){
    document.title = `Clicked ${this.state.count} times`
   } 
  render(){
    return (
      <div>
      <h2>Counter App</h2>
       <button onClick={this.increment}>Clicked{this.state.count}times</button>
      </div>
    )
    
  }
   
}  */


export default App;
