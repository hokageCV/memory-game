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

  // if score is 10, display popup 
  useEffect(() => {
    if(score === target) setPopup(true) 
  },[score])

  // // reset game from popup
  const reset = () => {
    setScore(0)
    setPopup(false)
  }

  function handleTarget(){
    setTarget(prev => prev===10?5:10)
  }

  return (
    <div className="App">
      <Header handleTarget={handleTarget} />
      <ScoreBoard  score={score} highScore={highScore} />

      { popup ? ( <Popup reset={reset} /> ) : null }

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
