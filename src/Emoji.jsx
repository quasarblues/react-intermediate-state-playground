// Practicing arrays in state. Adding and removing. Giving IDs.
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

    const deleteEmoji = (id) => {
        setEmojis(prevEmojis => (
            prevEmojis.filter(e => e.id !== id)
        ));
    };

    const turnAlien = () => {
        setEmojis(prevEmojis => (
            prevEmojis.map(e => (
                { ...e, emoji: '👽' }
            ))
        ));
    };

    return (
        <div>
            <h2>Emoji Time</h2>
            {emojis.map((e) =>
                <span
                    onClick={() => deleteEmoji(e.id)}
                    key={e.id}
                    style={{ fontSize: '2rem', cursor: 'pointer' }}>
                    {e.emoji}</span>
            )}
            <button onClick={addEmoji} style={{ display: 'block', margin: '0 auto' }}>Add Emoji</button>
            <button onClick={turnAlien}>Turn em 👽</button>
        </div>
    )
}