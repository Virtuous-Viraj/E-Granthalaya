import React,{useState} from 'react';
import { AppBar, Tab,Tabs, Toolbar, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [value,setValue] = useState();
  return (
    <div>
<AppBar position='sticky' sx={{backgroundColor:'black'}}>
    <Toolbar>
      <NavLink to={"/"}>
    <Typography>
    <BookIcon></BookIcon> Granthalaya
    </Typography></NavLink>
    <Tabs 
    sx={{ml:"auto"}}
     indicatorColor="secondary" textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
        <Tab LinkComponent={NavLink} to ="/add" label="Add a Book"/>
        <Tab LinkComponent={NavLink} to ="/books" label="View Books"/>
        <Tab LinkComponent={NavLink} to ="/about" label="About Us"/>
    </Tabs>
    </Toolbar>
    
</AppBar>
    </div>
  )
}

export default Header