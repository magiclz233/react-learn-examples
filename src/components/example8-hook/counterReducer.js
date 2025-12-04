const initialState = { count: 0 }

function countReducer(state, action) {
    switch (action.type) {
        case "add":
            return {...state, count: state.count + 1}
        case "dec":
            return {...state, count: state.count - 1}
        case "addMore":
            return {...state, count: state.count + action.num}
        case "decMore":
            return {...state, count: state.count - action.num}
        default:
            return state;
    }
}

export {initialState, countReducer};