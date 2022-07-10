import React, { useEffect } from 'react';
import './App.css';
import Layout from "./compenet/Layout/Layout"
import data from "./data/603a0e1cdbe2065320385ee0.json"

function App() {
useEffect(()=>{
  console.log(data);
},[])
  return (
  <div className="App" style={{}}>
 { data&&<Layout data={data.data} />}
</div>

  );
}

export default App;