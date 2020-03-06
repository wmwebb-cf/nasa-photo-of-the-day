import React from "react";




const ImgCard = props => {
  return (
    // console.log(`${props.url}`)
    <div>
      <img src={props.url} />
    </div>
  )
}

export default ImgCard;
