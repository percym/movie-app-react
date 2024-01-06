import React, { useEffect } from "react";

//c48fccb0
const API_KEY= 'c48fccb0'
const API_URL=`http://www.omdbapi.com/?apikey=${API_KEY}`

const searchMovies =async(title)=>{

    const response= await fetch(`${API_URL}&s=${title}`);
    const data =response.json();

    console.log(data);
}

const App =()=>{
    

useEffect(()=>{
    searchMovies('harry potter');

},[])

return (
<h1>App</h1>
);
}
export default App