import { useReducer } from 'react';
const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return { ...state, count: state.count + 1 }
        case "dec":
            return { ...state, count: state.count - 1 }
        case "reset":
            return { ...state, count: 0 }
        default:
            return state;
    }
}
const initValue = { count: 0 };

const UseReducerTest = () => {
    console.log('组件渲染了！');  // 这行会疯狂打印，几万次！

    const [state, dispatch] = useReducer(reducer, initValue);

    return (
        <div>
            <button onClick={() => dispatch({ type: "add" })}>+</button>
            <button onClick={() => dispatch({ type: "dec" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
            <h1>{state.count}</h1>
        </div>
    );
};

export default UseReducerTest;