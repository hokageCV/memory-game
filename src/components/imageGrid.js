import { v4 as uuid } from 'uuid' ;
import React, { useState, useEffect } from 'react';
import { imageData } from './imageData';
import { wait } from '@testing-library/user-event/dist/utils';


export default function ImageGrid({score, setScore, highScore, setHighScore}){
  const [imageArray, setImageArray] = useState(imageData);

  // update score
  function updateScore(name){
    let imgIndex = imageArray.findIndex(obj => obj.name === name)
    // if image is already selected, reset score and update highscore
    if(imageArray[imgIndex].isSelected){
      setScore(0);
      if(score>highScore) setHighScore(score);
    }
    // if image is not selected, increase score
    else setScore(sc=>sc+1)
  }

  //  update object in array: change the isSelected property of clicked object to true
  function toggleIsSelected(name){
    let imgIndex = imageArray.findIndex(obj => obj.name === name)
    imageArray[imgIndex] = {...imageArray[imgIndex], isSelected:true}
  }

  // array shuffler
  function shuffleImages(){
      const copyImages = [...imageArray]
      const shuffledImages = copyImages.sort(()=>(0.5-Math.random()))
  
      setImageArray(shuffledImages)
    }

  //
  function handleClick(event){
    // get name of the clicked image
    const name = event.target.alt ;
    
    updateScore(name);
    wait(100);
    toggleIsSelected(name);
  }

  //shuffles the grid whenever the score is changed
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