import { v4 as uuid } from 'uuid' ;
import React, { useState, useEffect } from 'react';
import { imageData } from './imageData';
import {useWindowSize} from  '@react-hook/window-size'
import Confetti from 'react-confetti'


export default function ImageGrid({score, setScore, highScore, setHighScore, target}){
  const [imageArray, setImageArray] = useState(imageData);
  const { width, height } = useWindowSize();
  
  useEffect(() => {
    if(score===target){
      setImageArray(imageData)
    }
  })

  function updateScore(name){
    
    let imgIndex = imageArray.findIndex(obj => obj.name === name)

    // if image is already selected, reset score and update highscore
    if(imageArray[imgIndex].isSelected){
      setScore(0);
      if(score>highScore) {
        setHighScore(score)
      };
    }
    // if image is not selected, increase score
    else {
      setScore(sc=>sc+1)
    }

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
    toggleIsSelected(name);
  }

  //shuffles the grid whenever the score is changed
  useEffect(shuffleImages,[score])


  return (
      <div className="imgs-container">
        {score===target && <Confetti width={width} height={height} />}
        {imageArray.map(img=>(
          <div key={uuid()} className="imgDiv">
            <img src={img.path}  alt={img.name}  onClick={handleClick}   />
            <p><small>{img.name}</small></p>
          </div>
        ))}
      </div>
  )
}