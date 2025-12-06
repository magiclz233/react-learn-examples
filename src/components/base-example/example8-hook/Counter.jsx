import { useReducer, useState } from 'react';
import {initialState, countReducer} from './counterReducer'

const Counter = () => {
    const [state, dispatch] = useReducer(countReducer, initialState);
    const [inputValue, setInputValue] = useState(0);
    return (
        <div>
            <h1>{state.count} {state.type} {state.num}</h1>
            <button onClick={() => {dispatch({type: "add"})}}>+1</button>
            <button onClick={() => {dispatch({type: "add"})}}>-1</button>
            <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={() => {
                dispatch({type: "addMore", num: Number(inputValue)});
                setInputValue(0);
            }}>add more</button>
            <button onClick={() => {
                dispatch({type: "decMore", num: Number(inputValue)});
                setInputValue(0);
            }}>dec more</button>
        </div>
    );
};

export default Counter;