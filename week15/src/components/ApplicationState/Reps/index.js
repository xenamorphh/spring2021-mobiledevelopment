import React from 'react';

function  Reps (props) {
    
    return (
        <div>
            <h2>Reps: {props.state.reps}</h2>
            <button onClick={() => props.dispatch({"type": "increment1"})}>Add Reps</button>
            <button onClick={() => props.disatch({"type": "dercrement1"})}>Remove Rep</button>
        </div>
    )
}

export default Reps;