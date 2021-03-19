import React, {useState} from 'react';

function Cals() {
    const [number, setNumber] = userState(0);

    return (
        <div> 
            <h1>Track your calories!</h1>
            <h2>How many Calories: {number}</h2>
            <h3>Remember to eat!</h3>
            <button onClick={() => setNumber(number +1)}>Calorie Intake</button>
            <button onClick={() => setNumber(0)}>Reset Counter</button>
        </div>
    )
}