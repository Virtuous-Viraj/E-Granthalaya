import React, { useState } from 'react'
import { Box,Button,Checkbox,FormControlLabel,FormLabel,TextField } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
  const history = useNavigate();
  const [inputs,setInputs] = useState({
    Name:'',
    Description:'',
    Price:'',
    Author:'',
    Image:'',

  });

const sendRequest = async() => {
 await axios.post("http://localhost:5000/books",{
    Name:String(inputs.Name),
    Author:String(inputs.Author),
    Description:String(inputs.Description),
    Price:String(inputs.Price),
    Image:String(inputs.Image),
    Available: Boolean(checked),

}).then(res => res.data);
}

const handleChange =(e)=>{
setInputs((prevState) =>({
  ...prevState,
  [e.target.name]:e.target.value
}))
console.log(e.target.name,"Value",e.target.value);
}
const[checked,setChecked] = useState(false);
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs,checked);
  sendRequest().then(()=>history('/books'));
}



  return (
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
      <Button type='submit' variant='contained'>Add a Book</Button>
      </Box>
      
    </form>
  )
}

export default AddBook