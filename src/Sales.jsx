import { useState } from "react";

export default function ({ salesPeople = 3, goal = 10000 }) {
    const [employeeInfo, setEmployeeInfo] = useState(
        Array.from({ length: salesPeople }, (_, i) => ({
            id: i,
            name: `Employee No. ${i + 1}`,
            sales: 0
        }))
    )

    const addSales = (i) => {
        setEmployeeInfo(currEmployees => (
            currEmployees.map(e => {
                if (e.id === i) {
                    return { ...e, sales: e.sales + 5000 }
                } else {
                    return e;
                }
            })
        ))
    }

    const reset = () => {
        setEmployeeInfo(currEmployees => (
            currEmployees.map(e => (
                { ...e, sales: 0 }
            ))
        ))
    }

    const isWinner = employeeInfo.some(e => e.sales === goal);

    return (
        <div>
            <h2>We have {salesPeople} members with a goal of ${goal.toLocaleString()}</h2>
            <ul>
                {employeeInfo.map((e, i) => (
                    <li key={i} style={{ listStyle: 'none' }}>
                        {e.name}: {e.sales}
                        <button disabled={isWinner} onClick={() => addSales(i)}>+5,000</button>
                        {e.sales === goal && <span>🏆🏆🏆</span>}
                    </li>
                ))}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}