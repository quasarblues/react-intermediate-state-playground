// Practicing arrays in state
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Emoji() {
    const [emojis, setEmojis] = useState([
        { id: uuidv4(), emoji: '🥸' },
        { id: uuidv4(), emoji: '😒' }
    ]);

    const addEmoji = () => {
        setEmojis(prevArry => [...prevArry, { id: uuidv4(), emoji: '🥸' }]);
    };

    return (
        <div>
            <h2>Emoji Time</h2>
            {emojis.map((e) =>
                <span key={e.id} style={{ fontSize: '2rem', cursor: 'pointer' }}>{e.emoji}</span>
            )}
            <button onClick={addEmoji} style={{ display: 'block', margin: '0 auto' }}>Add Emoji</button>
        </div>
    )
}