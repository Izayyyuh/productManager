import React, { useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import ProductList from '../components/ProductList';
const Main = (props) => {
    
    const {product, setProduct} = useState([]);
    const [products, setProducts] = useState([]);

    
    return (
        <div>
    	{/* Form and Product List can both utilize the getter and setter established in their parent component: */}
           <Form product={product} setProduct={setProduct} />
            <hr/>
           <ProductList products={products} setProducts={setProducts} />
        </div>
    )
}
export default Main;