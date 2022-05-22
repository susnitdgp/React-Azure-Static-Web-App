import React,{useState,useEffect} from 'react'; 


function App() {
  
  //Usage of state
  const [total, setTotal] = useState(120);

  const value = 'Goswami World';
  
  return (
    <div>

    <div>Hello:  {value}</div>
    <div>Count: {total}</div>

    </div>

  )
}

export default App;
