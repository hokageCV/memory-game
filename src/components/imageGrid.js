import { v4 as uuid } from 'uuid' ;
import React, { useState, useEffect } from 'react';
import { imageData } from './imageData';


export default function ImageGrid({score, setScore, highScore, setHighScore}){
  const [imageArray, setImageArray] = useState(imageData);

  // changes the isSelected property of clicked image to true
  function handleClick(event){
    const name = event.target.alt ;

    setImageArray(prevData =>{
      const changed = prevData.filter(i=> i.name===name)
      console.log( changed );

      return[
        ...prevData,
        changed.isSelected = true
      ]
    })
  }

  // array shuffler
  function shuffleImages(){
    const copyImages = [...imageArray]
    const shuffledImages = copyImages.sort(()=>(0.5-Math.random))

    setImageArray(shuffledImages)
  }

  //shuffles the grid if score is changed
  useEffect(shuffleImages,[score])


  // render image
  return (
      <div className="row">
        {imageArray.map(img=>(
          <div key={uuid()}>
            <img src={img.path}  alt={img.name}  onClick={handleClick}   />
          </div>
        ))}
      </div>
  )
}