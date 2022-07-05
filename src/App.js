import React,{useState, useEffect} from 'react'
import './App.css';

import NavBar from './component/NavBar'
import ImageCard from './component/ImageCard'


function App() {

  const[data, getData] = useState(null);

  const url = "https://api.pexels.com/v1/curated?page=2&per_page=40"
  useEffect(() => {

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
             const response = JSON.parse(xhttp.responseText);
             getData(response);
          }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
  },[])

  if(!data){
      return null;
  }

  console.log(data);


  return (
    <>
        <div className="navDiv">
          <NavBar />
        </div>

        <div className="imageCardContainer">
          {data.photos.map((item) => {
            return <ImageCard id={item.id} small={item.src.small} original={item.src.landscape}  />
          })}
        </div>

    </>
      
  );
}

export default App;
