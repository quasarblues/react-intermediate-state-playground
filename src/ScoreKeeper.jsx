// Working with objects in state
import { useState } from "react";

export default function ScoreKeeper() {
    const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });

    // Function declaration
    function addP1() {
        setScores(current => {
            return { ...current, p1Score: scores.p1Score + 1 };
        });
    }

    // Function expression
    const addP2 = () => setScores(current => ({ ...current, p2Score: scores.p2Score + 1 }));

    function resetGame() {
        setScores(current => {
            return { ...current, p1Score: 0, p2Score: 0 };
        });
    }

    return (
        <div>
            <h2>Score Keeper!</h2>
            <h3>P1 score is {scores.p1Score}</h3>
            <h3>P2 score is {scores.p2Score}</h3>
            <button onClick={addP1}>+1 Player 1</button>
            <button onClick={addP2}>+2 Player 2</button>
            <button onClick={resetGame}>Reset Game</button>
        </div>
    )
}