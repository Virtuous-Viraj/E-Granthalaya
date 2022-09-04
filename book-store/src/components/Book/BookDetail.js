import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { Box,Button,Checkbox,FormControlLabel,FormLabel,TextField } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
const BookDetail = () => {
    const [inputs,setInputs] = useState({});
    const id = useParams().id;
    const [checked,setChecked] = useState(false);
    console.log(id);
    const history = useNavigate();
    useEffect(() => {
        const fetchHandler = async() =>{
            await axios.get(`htpp://localhost:5000/books/${id}`)
            .then((res)=>res.data).then(data => setInputs(data.book));
        };
        fetchHandler().then((data)=>setInputs(data.book));
    }, [id]);

    const sendRequest = async() =>{
            await axios.put(`http://localhost:5000/books/${id}`,{
                Name:String(inputs.Name),
                Author:String(inputs.Author),
                Description:String(inputs.Description),
                Price:String(inputs.Price),
                Image:String(inputs.Image),
                Available: Boolean(checked),
            }).then(res => res.data)
           
        }       

    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history("/books"));
    };
    const handleChange = (e)=>
    {       setInputs((prevState) =>({
        ...prevState,
        [e.target.Name]:e.target.value
      }))
            console.log(e);
    };
  return (
    <div>
         <form onSubmit={handleSubmit} >
      <Box display='flex'flexDirection="column" justifyContent={'center'} maxWidth='700' alignContent={'center'} alignSelf='center' mr={'auto'} marginTop='10'>
      <FormLabel>Name</FormLabel>
<TextField value={inputs.Name} onChange={handleChange} margin='normal' fullWidth variant='outlined'name='Name'/>
<FormLabel>Author</FormLabel>
<TextField value={inputs.Author} onChange={handleChange} margin='Author' fullWidth variant='outlined'name='Author'/>
<FormLabel>Description</FormLabel>
<TextField value={inputs.Description} onChange={handleChange} margin='Description' fullWidth variant='outlined'name='Description'/>
<FormLabel >Price</FormLabel>
<TextField value={inputs.Price} onChange={handleChange} type={'number'} margin='normal' fullWidth variant='outlined'name='Price'/>
<FormLabel>Image</FormLabel>
<TextField value={inputs.Image} onChange={handleChange} margin="normal"
  fullWidth variant = "outlined"
  name = "Image">
  
</TextField>
<FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label ="Available"></FormControlLabel>
      <Button type='submit' variant='contained'>Update Book</Button>
      </Box>
      
    </form>  
    </div>
  )
}

export default BookDetail