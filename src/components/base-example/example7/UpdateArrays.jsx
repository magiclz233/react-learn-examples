import { useState } from 'react';

const UpdateArrays = () => {
    const [friends, setFriends] = useState(["ALEX", "MAGIC"]);
    const addOne = () => setFriends([...friends, "mumu"]);
    const removeOne = () => setFriends(friends.filter((f) => f !== "MAGIC"));
    const updateOne = () => 
        setFriends(friends.map((f) => (f === "ALEX" ? "ALEX TWO" : f)));
    return (
        <div>
            {friends.map((t) => (
                <li key={Math.random()}>{t}</li>
            ))}
            <button onClick={addOne}>Add</button>
            <button onClick={removeOne}>Remove</button>
            <button onClick={updateOne}>Update</button>
        </div>
    );
};

export default UpdateArrays;