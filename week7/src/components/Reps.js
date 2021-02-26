import React, {Component} from 'react'

class Reps extends Component {
   constructor(props) {
       super(props);
       this.state = {
           reps : 0
       };
   };



   render() {

    return(
        <div>
            <h2>Total Reps: {this.state.reps}</h2>
            <button onClick={() => this.setState({reps: this.state.reps + 1})}>Rep</button>
            <button onClick={() => this.setState({reps: 0})}>Reset Counter</button>
        </div>
    );
}
}

export default Reps;
