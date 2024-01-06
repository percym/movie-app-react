import React, { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
//c48fccb0
const API_KEY= 'c48fccb0'
const API_URL=`http://www.omdbapi.com/?apikey=${API_KEY}`

const searchMovies =async(title)=>{

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    const result = data.Search;
    console.log(result);
}

const App =()=>{
    

useEffect(()=>{
    searchMovies('harry potter');

},[])

return (
<div className="app">

</div>
);
}
export default App