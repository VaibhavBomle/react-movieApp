import './App.css';
import { useEffect } from 'react';
import SearchIcon from './search.svg';
//c032e2d7


function App() {
  const API_URL =" http://www.omdbapi.com?apikey=c032e2d7";

  
    const searchMovie =async (title) =>{
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log("data : ",data)
    }
 

  useEffect(() =>{
    searchMovie("Spiderman")
  },[])
  return (
    <div className='app'>
       <h>MovieWorld</h>
        
    </div>
  );
}

export default App;
