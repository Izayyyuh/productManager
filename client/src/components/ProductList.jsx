import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {

    
    const { products, setProducts, removeFromDom} = props;
    function refreshPage(){
      window.location.reload();
    }
    const deleteProduct = (productId) => {
      axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => {
          removeFromDom(productId)
        })
        .catch(err => console.log(err))
    }

    useEffect (() => {
      axios.get('http://localhost:8000/api/products/')
      .then((res) =>{
        console.log(res.data);
        setProducts(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
}, [])
  return (
      <div className='mx-auto' style={{width: "200px"}}>
        <h2>All Products:</h2>
        {
          products.map((products, index)=>{
            return (
              <div key={index}>
                <div className='d-flex' style={{gap: "2px", marginBottom:"5px"}}>
                  <Link to={`/${products._id}`}> {products.title}</Link>
                  |
                  <Link className='btn btn-secondary' to={"/products/edit/" + products._id}>
                    Edit
                  </Link>
                  |
                  <button className='btn btn-danger' onClick={(e) => {deleteProduct (products._id); refreshPage()}}>
                    Delete
                  </button>
                </div>
              </div>
        )})
        }
      </div>
  )
}

export default ProductList