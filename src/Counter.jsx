import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>Count is {count}</h2>
            <button onClick={() => setCount(count + 1)}>Add 1</button >
            <button onClick={() => {
                setCount(curCount => curCount + 1);
                setCount(curCount => curCount + 2);
                setCount(curCount => curCount + 3);
            }
            }>Add 6?</button>
        </>
    )
}
// When our value of state depends on the previous value of state, we should update by using an updater function.