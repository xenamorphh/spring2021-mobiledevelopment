import React from 'react';
import {state, reducer} from './components/ApplicationState';
import Reps from './components/Reps';
import Mile from './component/Mile';

function App() {

  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <header className="App-header">
        <Mile state={currentState} dispatch={dispatch}/>
        <Reps state={currentState} dispatch={dispatch}/>
      </header>
    </div>
  )
}

export default App;