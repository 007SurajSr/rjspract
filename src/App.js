// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
 

function App() {
  const[count,setCount] = useState(0);
 
  return(
    <div className="app">
      <h1 className={count > 0 ? "positive" : count > 0 ? "negative" : null}>{count}</h1>
      <div className='button-wrapper'>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
      </div>
    </div>
  
  
  
  // const list = [
  //   "Banana",
  //   "Apple",
  //   "Orange",
  //   "Mango",
  //   "Pineapple",
  //   "Watermelon"
  // ];

  // const [filterList, setFilterList] = useState(list);

  // const handleSearch = (event) => {

  //   if (event.target.value === "") {
  //     setFilterList(list);
  //     return;
  //   }
  //   const filteredValues = list.filter(
  //     (item) =>
  //       item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
  //   );
  //   setFilterList(filteredValues);
  // };
  // return (
  //   <div className="app">
  //     <div>
  //       Search: <input name="query" type="text" onChange={handleSearch} />
  //     </div>
  //     {filterList &&
  //       filterList.map((item, index) => (
  //         <div key={index}>{item}</div> //Display each item
  //       ))}
  //   </div>
  );
}

export default App;
