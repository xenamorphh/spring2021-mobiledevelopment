import React, {useState} from 'react';

function Miles () {
    const [number, setNumber] = userState(0);

    return (
        <div>
            <h2>How many Miles: {number}</h2>
            <button onClick={() => setNumber(number + 1)}>Miles Ran</button>
            <button onClick={() => setNumber(0)}>Reset Counter</button>
        </div>
    )
}