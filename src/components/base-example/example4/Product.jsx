// const Product = (props) => {
//     return (
//         <div>
//           <h2>Name: {props.name}</h2>  
//           <p>Price: {props.price}</p>
//         </div>
//     );
// };

const Product = ({name, price}) => {
    return (
        <div>
          <h2>Name: {name}</h2>  
          <p>Price: {price}</p>
        </div>
    );
};

export default Product;