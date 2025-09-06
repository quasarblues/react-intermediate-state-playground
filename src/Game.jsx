import { useState } from "react";

export default function Game({ players, targetScore }) {
    const numOfPlayers = new Array(players).fill(null);
    const [playerInfo, setPlayerInfo] = useState(numOfPlayers.map((_, i) => (
        { id: i, name: `Player ${i + 1}`, score: 0 }
    )));

    const increaseScore = (i) => {
        setPlayerInfo(currentPs => (
            currentPs.map(p => {
                if (p.id === i) {
                    return { ...p, score: p.score + 1 };
                } else {
                    return p;
                }
            })
        ))
    };

    const gameIsOver = playerInfo.some(p => p.score === targetScore);

    return (
        <div>
            <h2>{players} contestants play to {targetScore}</h2>
            <ul>
                {playerInfo.map((p, i) => (
                    <li key={i} style={{ listStyle: 'none' }}>
                        {p.name}: {p.score}
                        <button disabled={gameIsOver ? true : false} onClick={() => increaseScore(i)}>+ 1</button>
                        {p.score === targetScore && <span>🏆🏆</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}