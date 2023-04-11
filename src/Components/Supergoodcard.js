import * as React from 'react';
import Button from '@mui/material/Button';
import { Modal,TextField,InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AlertDialogSlide from './Popupcompo';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import ClearIcon from '@mui/icons-material/Clear';
import parse from 'html-react-parser';
import SendIcon from '@mui/icons-material/Send';
import { initializeApp } from "firebase/app";
import { getDatabase,onValue,push,ref,set,remove, update,child,get } from "firebase/database";
import { getStorage } from "firebase/storage";
import RichText from './testone';
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCom7Bn-glWGNwLtW1Rd7cmrrvMiP1S7Hc",
  authDomain: "projectme-92ed4.firebaseapp.com",
  databaseURL: "https://projectme-92ed4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "projectme-92ed4",
  storageBucket: "projectme-92ed4.appspot.com",
  messagingSenderId: "205560943794",
  appId: "1:205560943794:web:ad504883c3079db08ea5ab",
  measurementId: "G-7SHJ6R80PD"
};

//https://www.youtube.com/watch?v=YOAeBSCkArA
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const d = new Date();
let y = d.getFullYear();
let dd = d.getDate();
let m = d.getMonth();


export default function RecipeReviewCard(props) {
  console.log(props.Meets)
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [Favcol,setFavcol] = React.useState(props.heart)
  const handleFavcol = ()=>{
    props.HHe([props.Key,props.Name,props.Des,props.Title,props.Url,Favcol,props.dd]) ;

    setFavcol((prev) => { return (!prev); })
  }

  const handleClose = () => {
    setOpen(false);
  };
  const handleClosedis = ()=>{
    setOpen(false);
    props.Kamsang(props.Key)
  }
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [Let,SetLet] = React.useState('J');
  React.useEffect(()=>{
    if(props.Name) SetLet(props.Name.substring(0,1))
  },[])
  const Ale = ()=>{
   
  }
  const [Popup,Setpopup] = React.useState(null)
  const Hey = ()=>{
    console.log('key')
  }
const [Mana,SetMana] = React.useState(false)
React.useEffect(()=>{
  if(props.Name == 'Pha'){
    SetMana(true)
  }
},[])
const styler = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  maxWidth:500,
  outline: 0
  

};
  const [openmol, setOpenmol] = React.useState(false);
  const handleOpenmol = () => setOpenmol(true);
  const handleClosemol = () => setOpenmol(false);
  const [chat,Setchat] = React.useState(props.chathis?props.chathis:[])
  const [chattext,Setchattext] = React.useState('')
  const handleclickchat = ()=>{
    Setchattext('')
    Setchat((prev)=>{ props.CCe({keyurl:[props.Key,props.Name,props.Des,props.Title,props.Url,Favcol,props.dd],keydat:[...prev,chattext]});  return [...prev,chattext]})
    const myref = ref(database,'keeper/'+props.Key);
    onValue(myref,(snapshot)=>{
      const data = snapshot.val();
      Setchat(data['mynew'])
    })
  }
  React.useEffect(()=>{
    console.log('hello')
    const myref = ref(database,'keeper/'+props.Key);
    onValue(myref,(snapshot)=>{
      const data = snapshot.val();
      Setchat(data['mynew'])
    })
  },[])
  const handlechat = (event)=>{
    Setchattext(event.target.value)

  }
  return (
    <>
      <>
    <div>
      <Modal 
        open={openmol}
        onClose={handleClosemol}

      >
        <div style={styler }>
            
          <img style = {{borderRadius:'7px', width:'100%',height:'100%',objectFit:'cover',padding:0}} src={props.Url}></img>
        </div>
      </Modal>
    </div>
    </>
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx = {{fontFamily:'monospace'}} >{"Do you want to delete?"}</DialogTitle>
     
        <DialogActions>
          <Button sx = {{color:'LightCoral',fontFamily:'monospace',fontSize:'large'}} onClick={handleClose}><b>NO</b></Button>
          <Button sx = {{color:'LightCoral',fontFamily:'monospace',fontSize:'large'}} onClick={handleClosedis}><b>YES</b></Button>
        </DialogActions>
      </Dialog>
    </div>
    <Card sx={{ width:250 ,marginBottom:'10px'}}>
    {Mana?(<> 
      <CardHeader sx = {{fontFamily:'monospace'}}
        avatar={
          <Avatar sx={{ bgcolor: 'indianred' }} aria-label="recipe">
            {Let}
          </Avatar> 
        }
        action={
          <IconButton aria-label="settings" onClick={handleClickOpen}>
            <ClearIcon/>
          </IconButton>
        }
      title= {props.Name}
     
        subheader= {props.dd}
      /></> ):(<>
      <CardHeader sx = {{fontFamily:'monospace'}}
        avatar={
          <Avatar sx={{ bgcolor: 'MediumSeaGreen' }} aria-label="recipe">
            {Let}
          </Avatar> 
        }
        action={
          <IconButton aria-label="settings" onClick={handleClickOpen}>
            <ClearIcon/>
          </IconButton>
        }
      title= {props.Name}
     
        subheader= {props.dd}
      /></>)}
      <CardMedia onClick={handleOpenmol}
        component="img"
        
        height="194"
        image= {props.Url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" noWrap>
          {props.Title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        {!Mana? (<>{!Favcol ?(<><FavoriteIcon onClick = {handleFavcol}/></>):(<><FavoriteIcon  onClick = {handleFavcol} sx = {{color:'#A2E4B8'}}/></>)}</>):(<>{!Favcol ?(<><FavoriteIcon onClick = {handleFavcol}/></>):(<><FavoriteIcon  onClick = {handleFavcol} sx = {{color:'indianred'}}/></>)}</>) }
          
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography >

            {props.Des?(<>{parse(props.Des)}</>):(<></>) }
            {chat.length?(<>
            <hr></hr>
            <p style={{textAlign:'center',fontSize:'1.2rem',fontWeight:'bold'}}>CHAT ZONE</p>
            {
              chat.map((e,ind)=>{
                return (<>
              {!props.Meets['Pha']?(<><p>&#128045;: {e}</p></>):(<><p>&#128059;: {e}</p></>)  }
                </>)
              })
            }
           
               <hr></hr></>):<></>} 
               <br></br>
          <TextField autoFocus  color='success' onChange={handlechat} multiline  value={chattext}  InputProps={{
            endAdornment: <InputAdornment position="end">

              <IconButton aria-label="add to favorites" onClick={handleclickchat}><SendIcon/></IconButton>
            </InputAdornment>,
          }} />
          </Typography>
          
    
        </CardContent>
      </Collapse>
    </Card>
    </>
  );
}