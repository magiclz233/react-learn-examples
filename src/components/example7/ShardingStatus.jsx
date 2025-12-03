import { useState } from 'react';

const ComponentOne = ({count, onClickHandler}) => {
    return (
        <div>
            <p>{count}</p>
            <button onClick={onClickHandler}>增加</button>
        </div>
    );
};

const ComponentTwo = ({count, onClickHandler}) => {
    return (
        <div>
            <p>{count}</p>
            <button onClick={onClickHandler}>增加</button>
        </div>
    );
};

const ShardingStatus = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
           <ComponentOne count={count} onClickHandler={() => setCount(count => count + 1)} />
           <ComponentTwo count={count} onClickHandler={() => setCount(count => count + 1)} />
        </div>
    );
};

export default ShardingStatus;