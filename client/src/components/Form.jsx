import React, {useState} from 'react'
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
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title:</label>
                <input type="text" onChange={(e) =>setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price:</label>
                <input type="number" onChange={(e) =>setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description:</label>
                <input type="text" onChange={(e) =>setDescription(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}
export default Form;