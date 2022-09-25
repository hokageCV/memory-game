import ImageGrid from './components/imageGrid';
import Header from './components/header';
import ScoreBoard from './components/scoreBoard';
import React, {useState } from 'react';
import './style/style.css'

import { useEffect } from 'react';
import Popup from './components/Popup';


function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [popup, setPopup] = useState(false);
  const [target, setTarget] = useState(10);

  // if score equals target, display popup 
  useEffect(() => {
    if(score === target) setPopup(true) 
  },[score])

  // reset game 
  const reset = () => {
    setScore(0)
    setPopup(false)
  }

  // toggle target between 10 & 5
  function handleTarget(){
    setTarget(prev => prev===10?5:10)
  }

  return (
    <div className="App">
      { popup ? ( <Popup reset={reset} /> ) : null }
      <Header handleTarget={handleTarget} />
      <ScoreBoard  score={score} highScore={highScore} />

      

      <ImageGrid 
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        target={target}
      />
    </div>
  );
}

export default App;
