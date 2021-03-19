import React, {userState} from 'react';

funtion Burn () {
    const [number, setNumber] = userState(0);

    return (
        <div>
            <h1>Welcome to Calorie burner!</h1>
            <h2>How many Calories Burned:</h2>
            <button onClick={() => setNumber(number + 1)}>Calories Burned</button>
            <button onClick={() => setNumnber(number + 1)}>Reset Counter</button>
        </div>
    )
}