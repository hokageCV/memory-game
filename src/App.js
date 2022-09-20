import ImageGrid from './components/imageGrid';
import Header from './components/header';
import ScoreBoard from './components/scoreBoard';
import React, {useState } from 'react';
import './style/style.css'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <ScoreBoard  score={score} highScore={highScore} />
      <ImageGrid 
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </div>
  );
}

export default App;