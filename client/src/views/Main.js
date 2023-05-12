import React, { useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import ProductList from '../components/ProductList';
const Main = (props) => {
    
    const {product, setProduct} = useState([]);
    const [products, setProducts] = useState([]);
    const removeFromDom = productId => {
        setProduct(products.filter(product => product.id !== productId));
    }

    
    return (
        <div>
    	{/* Form and Product List can both utilize the getter and setter established in their parent component: */}
           <Form product={product} setProduct={setProduct} />
            <hr/>
           <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main;