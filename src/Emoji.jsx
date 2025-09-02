// Practicing arrays in state
import { useState } from "react";

export default function Emoji() {
    const [emojis, setEmojis] = useState(["🥸"]);
    const addEmoji = () => {
        setEmojis(current => [...current, "🥸"])
    };
    return (
        <div>
            <h2>Emoji Clicker</h2>
            {emojis.map(e => (
                <span style={{ fontSize: '2rem' }}>{e}</span>
            ))}
            <button onClick={addEmoji} style={{ display: 'block', margin: '0 auto' }}>Add Emoji</button>
        </div>
    )
}