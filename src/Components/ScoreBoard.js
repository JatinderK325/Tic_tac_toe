import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = (props) => {
    const {xScores, oScores} = props.scores;
    return(
        <div className="scoreboard">
            <span className={`score x-score ${!props.xPlaying && "inactive"}`}>X - {xScores}</span>
            <span className={`score o-score ${props.xPlaying && "inactive"}`}>O - {oScores}</span>
        </div>
    );
}

export default ScoreBoard;