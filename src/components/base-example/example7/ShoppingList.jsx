import { useState } from 'react';

const ShoppingList = () => {
    const [item, setItem] = useState([]);
    const [value, setValue] = useState({
        name: "",
        price: "",
        count: 1,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.name.trim() && Number(value.price) > 0  && Number(value.count) > 0) {
            setItem([...item, value]);
            setValue({
                name: "",
                price: "",
                count: 1,
            });
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValue(prevValue => ({ ...prevValue, [name]: value }));
    }
    return (
        <div>
            <h1>Shopping List</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">商品名称:</label>
                <input type="text" id="name" name="name" value={value.name} onChange={handleInputChange} />
                <label htmlFor="price">商品价格:</label>
                <input type="number" id="price" name="price" value={value.price} onChange={handleInputChange} />
                <label htmlFor="count">商品数量:</label>
                <input type="number" id="count" name="count" value={value.count} onChange={handleInputChange} />
                <button type="submit" style={{
                    padding: "8px 16px",
                    backgroundColor: "#42B3A7",
                    color: "white",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    alignSelf: "flex-end",
                }}>添加</button>
            </form>
            <ul>
                {item.length > 0 && item.map((todo, index) => (
                    <li key={index}>{todo.name} - {todo.price} - {todo.count}</li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;