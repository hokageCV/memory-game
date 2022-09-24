import React from "react";

export default function ScoreBoard({score, highScore}) {
    return(
        <div className="scoreBoard border border-secondary d-flex justify-content-around mx-auto">
            <p>Current Score {score} </p>
            <p>Best Score {highScore} </p>
        </div>
    )
}