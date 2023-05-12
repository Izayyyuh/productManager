import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Form = (props) => {
    //keep track of  what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const {products, setProducts} = props;
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit 
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(response =>{
                console.log(response); //always console log to get used to tracking your data!
                console.log(response.data);
                setProducts([...products, response.data]);
            })
            .catch(err =>console.log(err))
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className='mx-auto' style={{width: "200px"}}>
                    <h1>Add Product</h1>
                    <p className='form-group'>
                        <label>Title:</label>
                        <input type="text" className='col-auto' onChange={(e) =>setTitle(e.target.value)} />
                    </p>
                    <p className='form-group'>
                        <label>Price (USD):</label>
                        <input type="number" className='col-auto' onChange={(e) =>setPrice(e.target.value)} />
                    </p>
                    <p className='form-group'>
                        <label>Description:</label>
                        <input type="text" className='col-auto' onChange={(e) =>setDescription(e.target.value)} />
                    </p>
                    <input className='btn btn-primary' type="submit" />
                </div>
            </form>
        </div>
    )
}
export default Form;