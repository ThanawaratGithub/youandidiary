import React  from 'react';
import { Typography,Box,AppBar,Toolbar,Button,MenuIcon,IconButton } from '@mui/material';
import { padding } from '@mui/system';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
const text = `Hello this is the contenet`

const CreateTypo = ()=>{
  return (
    <Box sx={{ flexGrow: 1  }}>
      <AppBar position="static" sx = {{ backgroundColor:'#ffedf2' ,height:'50px'}}>
        <Toolbar>
          <Typography variant="h6" component="div"  sx = {{fontFamily:'monospace',color:'firebrick',flexGrow:1}}>
            <b>MENU</b>

          </Typography>
          <Typography variant="h3" component="div"  sx = {{position:'sticky',fontFamily:'monospace',color:'firebrick',flexGrow:1}}>
           <div> &#128022;</div>
          </Typography>
          <Button sx = {{fontFamily:'monospace',color:'firebrick'}}><h2>Login</h2></Button>
        </Toolbar>
      </AppBar>
      <br></br>
    </Box>
    
  );
}
export default CreateTypo