import { useState } from "react";

function generateEnemies() {
    console.log('the enemies appear');
    return Array(100);
}

export default function Initializer() {

    const [enemies, setEnemies] = useState(generateEnemies);
    return (
        <>
            <h2>Initialize Me</h2>
            <button onClick={() => setEnemies('The boss appears')}>Button</button>
        </>
    )
}

// If we just pass in a function to useState, React will just run it once. That's it.
// If we add (), then the functions is run each time on a render.
// React only re-renders when the state changes. Like setting state to the same number over and over again.