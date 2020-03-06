import React, { useState, useEffect } from "react";




const ImgContent = props => {

  return (
    <div>
      <h3>Title: {props.title}</h3>
      <p>Description: {props.description}</p>
      <small>DATE: {props.date}</small>
    </div>
  )
}

export default ImgContent;
