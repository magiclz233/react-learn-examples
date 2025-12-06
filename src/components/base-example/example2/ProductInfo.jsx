const ProductInfo = () => {
    const product = {
        name: "脏三",
        price: 200,
        status: false
    }
    return product.status ? (<div>
        <h1>Name: {product.name}</h1>
        <h2>Price: {product.price}</h2>
        <h3>Status: {product.status}</h3>
    </div>) : <p>已售完</p>
}

export default ProductInfo;