import { useEffect } from 'react';
import Link from './Pages Js/Link';
import './App.css';
import axios from './axios';

function App() {
  useEffect(()=>{
    axios.get("/shortfacts").then((res)=>{
      console.log(res.data);
    })
  },[])
  return (
    <div className="App">
      <Link/>
    </div>
  );
}

export default App;
