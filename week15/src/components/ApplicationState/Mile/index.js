import React from 'react';

function  Mile (props) {
    
    return (
        <div>
            <h2>Miles: {props.state.miles}</h2>
            <button onClick={() => props.dispatch({"type": "increment2"})}>Add Mile</button>
            <button onClick={() => props.disatch({"type": "dercrement2"})}>Remove Mile</button>
        </div>
    )
}

export default Reps;