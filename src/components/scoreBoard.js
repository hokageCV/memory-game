import React from "react";

export default function ScoreBoard(props) {
    return(
        <div className="scoreBoard border border-secondary d-flex justify-content-around mx-auto w-50">
            <p>Current Score {props.score} </p>
            <p>Best Score {props.highScore} </p>
        </div>
    )
}