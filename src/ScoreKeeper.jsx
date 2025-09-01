import { useState } from "react";

export default function ScoreKeeper() {
    const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });

    function addP1() {
        setScores((prevScores) => {
            return { ...prevScores, p1Score: prevScores.p1Score + 1 };
        });
    }

    function addP2() {
        setScores((prevScores) => {
            return { ...prevScores, p2Score: prevScores.p2Score + 1 };
        });
    }
    return (
        <div>
            <h2>Score Keeper!</h2>
            <h3>P1 score is {scores.p1Score}</h3>
            <h3>P2 score is {scores.p2Score}</h3>
            <button onClick={addP1}>+1 Player 1</button>
            <button onClick={addP2}>+2 Player 2</button>
        </div>
    )
}