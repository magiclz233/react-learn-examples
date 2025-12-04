import { createContext, useContext } from 'react';

const Data = createContext();
const Data1 = createContext();

const CompoentA = () => {
    return <ComponentB />;
};
const ComponentB = () => {
    return <ComponentC />;
};

const ComponentC = () => {
    const userName = useContext(Data);
    const Age = useContext(Data1);

    return (
        <h1>
            My name is: {userName} & I'm {Age} years old.
        </h1>
    );
};

const UseContextTest = () => {
    const name = "HuXn";
    const Age = 18;
    return (
        <div>
            <Data.Provider value={name}>
                <Data1.Provider value={Age}>
                    <CompoentA />
                </Data1.Provider>
            </Data.Provider>

        </div>
    );
};

export default UseContextTest;