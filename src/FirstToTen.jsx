import { useState } from "react";

export default function ({ numOfPlayers = 3, target = 7 }) {
    const [players, setPlayers] = useState(Array.from({ length: numOfPlayers }, (_, i) => (
        { id: i, name: `Player ${i + 1}`, score: 0 }
    )));

    const randNum = () => {
        return Math.floor(Math.random() * 3 + 1)
    }

    const increaseScore = (i) => {
        setPlayers(currentValues => (
            currentValues.map(currentVal => {
                if (currentVal.id === i) {
                    return { ...currentVal, score: currentVal.score + randNum() };
                } else {
                    return currentVal;
                }
            })
        ))
    }

    const reset = () => {
        setPlayers(currentValues => (
            currentValues.map(currentV => {
                return { ...currentV, score: 0 }
            })
        ))
    }

    const isWinner = players.some(p => p.score >= target);

    return (
        <div>
            <h2>First to reach the number.</h2>
            <h3>{numOfPlayers} players play to {target}</h3>
            <h4>Increase player's score one at a time.</h4>
            <ul style={{ listStyle: 'none' }}>
                {players.map((p, i) => (
                    <li key={i}>
                        {p.name}: {p.score}
                        <button disabled={isWinner} onClick={() => increaseScore(i)}>+ Score</button>
                        {p.score >= target && <span>⭐⭐⭐</span>}
                    </li>
                ))}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )

}