import React, { useState, useEffect } from "react";
import axios from "axios";
import ImgCard from "./ImageCard.js";
import ImgContent from "./ImageContent.js";




function ImgOfTheDay() {

  const [newImage, setNewImage] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=PsEckfvuFPxza549BtvnhaC7hZhW5PM4s3kIF9pf').then(response => {
      setNewImage(response.data);
      console.log(response.data);
    });
  }, []);
  // console.log(newImage.url);

  return (
    <div>
      <ImgCard url={newImage.url}/>,

      <ImgContent title={newImage.title} description={newImage.explanation} date={newImage.date}/>
    </div>
  );

};


export default ImgOfTheDay;
