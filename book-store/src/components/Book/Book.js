import axios from 'axios';
import React,{Button} from 'react';

import { Link, useNavigate } from 'react-router-dom';
import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
    const deleteHandler = async () =>{
      await axios.delete(`http://localhost:5000/books/${_id}`).then(res => res.data).then(()=>history("/")).then(()=>history("/books"));
    };
  const {_id,Name,Author,Description,Price,Image} = props.book;
  return (
    <div className='card'>
        <img src={Image} alt={Name}/>
        <article>
            By {Author}
        </article>
        <h3>{Name}</h3>
        <p>{Description}</p>
        <h3>Rs.{Price}</h3>
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:'auto'}}>Update</Button>
        <Button onClick={deleteHandler} sx={{mt:'auto'}}>Delete</Button>
    </div>
  )
};

export default Book;