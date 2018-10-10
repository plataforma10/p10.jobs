import { combineReducers } from 'redux';

let initState = {
    newState: {
        console: 'Hello word from Init State'
    }
}

function app(state = initState, action) {
    if (!action.value) return state;

    let newState = state;
    newState[action.type][action.action] = action.value;

    return Object.assign({}, state, newState);
}

const rootReducer = combineReducers({ app });

export default rootReducer;