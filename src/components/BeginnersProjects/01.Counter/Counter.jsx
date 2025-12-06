import React, { useState } from 'react';
import './style.css'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className='container'>
                <h1 className='number'>{count}</h1>
            </div>
            <section className='btn-container'>
                <button className="increment" onClick={() => setCount(count + 1)}>增加</button>
                <button className="increment" onClick={() => setCount(count - 1)}>减少</button>
            </section>
        </>
    );
}

export default Counter;