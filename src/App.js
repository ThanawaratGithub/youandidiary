import CreateTypo from "./Components/CreateTypo";
import ButtonCompo from "./Components/ButtonCompo";
import CardCompo from "./Components/CardCompo";
import { Typography,Box,AppBar,Toolbar,Button,MenuIcon,IconButton } from '@mui/material';
import AlertDialogSlide from "./Components/Popupcompo";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import ReportCompo from "./Components/ReportCompo";
import { useState } from "react";
function App() {
  const [Pha,setPha] = useState(false);
  const [Emo,setEmo] = useState(false);
  const handleClick = ()=>{
      setEmo(prev=>!prev)
      setPha(prev=>!prev)
  }
  //'<>&#128059</>'
  // &#128022;
  return (
    <>
    
      <div>
      <Routes>
        <Route path = '/' element ={<>
          <Box sx={{ flexGrow: 1  }}>
      <AppBar position="static" sx = {{ backgroundColor:'#ffedf2' ,height:'50px'}}>
        <Toolbar>
        <Typography variant="h6" component="div"  sx = {{fontFamily:'monospace',color:'firebrick',flexGrow:1}}>
            <Link to = '/insert' style = {{textDecoration: 'none'}}><b style = {{color:'firebrick',textDecoration: 'none'}}>INSERT</b></Link>

          </Typography>
          <Typography variant="h3" component="div"  sx = {{position:'sticky',fontFamily:'monospace',color:'firebrick',flexGrow:1}}>
           <div>
            {!Emo?(<>&#128055;</>):(<>&#128059;</>)}
            </div> 
          </Typography>
          <Button onClick={handleClick} sx = {{fontFamily:'monospace',color:'firebrick'}}><h2>CHANGE</h2></Button>
        </Toolbar>
      </AppBar>
      <br></br>
    </Box>
        
        <ButtonCompo itlikedream = {{Pha}}/>  </>}></Route>
        <Route path = '/insert' element ={<>
          <Box sx={{ flexGrow: 1  }}>
      <AppBar position="static" sx = {{ backgroundColor:'#ffedf2' ,height:'50px'}}>
        <Toolbar>
          <Typography variant="h6" component="div"  sx = {{fontFamily:'monospace',color:'firebrick',flexGrow:1}}>
            <Link to = '/' style = {{textDecoration: 'none'}}><b style = {{color:'firebrick',textDecoration: 'none'}}>BACK</b></Link>

          </Typography>
          <Typography variant="h3" component="div"  sx = {{position:'sticky',fontFamily:'monospace',color:'firebrick',flexGrow:1}}>
           <div> &#128022;</div>
          </Typography>

        </Toolbar>
      </AppBar>
      <br></br>
    </Box>
        
        <ReportCompo /></>}></Route>
      </Routes>
      </div>
  
    
    <CardCompo/>
   </>
  );
}

export default App;
