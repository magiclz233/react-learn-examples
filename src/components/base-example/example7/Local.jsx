import { useEffect, useState } from 'react';

const Local = () => {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem('name');
        return savedName ? JSON.parse(savedName) : '';
    });

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name));
    }, [name]);

    const handleClear = () => {
        setName('');
    }

    return (
        <div>
            <h1>your name is: {name}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleClear}>clear name</button>
        </div>
    );
};

export default Local;