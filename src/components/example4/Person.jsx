// const Person = (props) => {
//     return (
//         <div>
//         <h2>Name: {props.name}</h2> 
//         <p>Age: {props.age}</p>
//         </div>
//     );
// };

const Person = ({name, age}) => {
    return (
        <div>
        <h2>Name: {name}</h2> 
        <p>Age: {age}</p>
        </div>
    );
};

export default Person;