import React from "react";




const ImgContent = props => {

  return (
    <div>
      <h3>Title: {props.title}</h3>
      <h5>Description:</h5>
      <p>{props.description}</p>
      <small>DATE: {props.date}</small>
    </div>
  )
}

export default ImgContent;
