import { useState } from 'react';

const Profile = () => {
    const [user, setUser] = useState({
        name: "",
        age: "",
    });
    const [value, setValue] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue([...value, {...user}]);
        setUser({
            name: "",
            age: "",
        });
    }
    return (
        <div>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={user.age} onChange={(e) => setUser({ ...user, age: e.target.value })} />
                <button type="submit">Submit</button>
            </form>
            {value.length > 0 && (
                value.map((item, index) => (
                    <>
                        <p key={index}>Name: {item.name}</p>
                        <p key={index}>Age: {item.age}</p>
                    </>
                ))
            )}
        </div>
    );
};

export default Profile;