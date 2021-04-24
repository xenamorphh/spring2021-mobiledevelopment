 let state = {
     rep: 0,
     miles: 0,
 };

 function reducer(state, action) {
     switch (action.type) {
         case 'increment1':
             return{rep: state.rep +1, mile: state.mile};
        case 'increment2':
            return {rep: state.rep, miles: state.miles +1};
        case 'decrement1':
            return {rep: state.rep -1, miles: state.miles};
        case 'decrement2':
            return {rep: state.rep, miles: state.miles - 1};
        default:
            throw new Error();
     }
 }


 export {state, reducer};