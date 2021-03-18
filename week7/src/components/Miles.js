import React, {useState} from 'react';

function Miles () {
    const [number, setNumber] = userState(0);

    return (
        <div>
            <h1>Welcome to the Mile tracker!</h1>
            <h2>How many Miles: {number}</h2>
            <h3>Get your gainz on</h3>
            <button onClick={() => setNumber(number + 1)}>Miles Ran</button>
            <button onClick={() => setNumber(0)}>Reset Counter</button>
        </div>
    )
}