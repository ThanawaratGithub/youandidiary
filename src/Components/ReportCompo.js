import { TextField,Button,TextareaAutosize, Select ,InputAdornment } from "@mui/material";
import './Controlreport.css'
import {  uploadBytesResumable, getDownloadURL,listAll ,ref as sRef} from "firebase/storage";
import { useEffect, useState,forwardRef } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, push,ref,set,onValue, update } from "firebase/database";
import { getStorage } from "firebase/storage";
import TextEditor from "./testone";
import { Alert } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import ClearIcon from '@mui/icons-material/Clear';
import { BrowserRouter as Router,Routes,Route,Link, Navigate } from "react-router-dom";

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
const storage = getStorage(app);

/////////////////////////////////////////////////////////////////////////////////////
const imageMimeType = /image\/(png|jpg|jpeg)/i;
const ReportCompo = (props)=>{
    const axios = require('axios')
    const [Name,Setname] = useState(null)
    const [Des,Setdes] = useState(null)
    const [file, setFile] = useState(null);
    const [selectFile,setSelect] = useState(null)
    const [fileDataURL, setFileDataURL] = useState(null);
    const [Url,setUrl] = useState(null)
    const [Title,Settitle] = useState(null)
    const changeName = (ev)=>{
        Setname(ev.target.value)
    }
    const Transition = forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });
    const [open, setOpen] = useState(false);

    
    
    const handleClose = () => {
      setOpen(false);
      setTimeout(() => {
      }, 2000);
    };
   

    const changeHandler = (e) => {

      setSelect(e.target.files[0])
      const file = e.target.files[0];
      if (!file.type.match(imageMimeType)) {
        alert("Image mime type is not valid");
        return;
      }
      setFile(file);
    }
    
    const changetitle = (ev)=>{
      Settitle(ev.target.value)
      const d = new Date();
      let y = d.getFullYear();
      let dd = d.getDate();
      let m = ((Number(d.getMonth())+1)%13);
      if(m==0){m = m+1}
      let k = String(m)
      if (m<10) {k = '0'+k}
      const heer = String(dd)+'/'+k+'/'+String(y)
      SetKuYY(heer)
    }
    useEffect(() => {
      let fileReader, isCancel = false;
      if (file) {
        fileReader = new FileReader();
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result && !isCancel) {
            setFileDataURL(result)
          }
        }
        fileReader.readAsDataURL(file);
      }
      return () => {
        isCancel = true;
        if (fileReader && fileReader.readyState === 1) {
          fileReader.abort();
        }
      }
  
    }, [file]);
    const Del = (event)=>{
        event.preventDefault();
        setFile(null)
        setFileDataURL(null)
    }
    const [Back,Setback] = useState(false)
    const Save = ()=>{
      if(Name){
        setOpen(true)
      }else{
        alert('Please insert name')
        return ;
      }
      axios.post(`https://mernstack254617.herokuapp.com/api/create`,{
    }).then(res=>console.log(res)).catch(err=>alert(err))
        Setcounter(prev=>prev-1)
        const db = database;
        const myref = ref(db,'counter')
        set(myref,Counter-1)
        if (!file) {
          alert("Please upload an image first!");
      }else{
        
      }
      console.log(file)
     
      const storageRef = sRef(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
          "state_changed",
          (snapshot) => {  },
          (err) => console.log(err),
          () => { getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                 setUrl(url)
                
              });
          }
          
      );
    
     
    }
    const [Green,Setgreen] = useState(false)
    const [KUYYY,SetKuYY] = useState(null)

    useEffect(()=>{
    if(Url) {

      
      setTimeout(() => {
      Setback(true)
    }, 3000);}

    
    const data = {name:Name,des:Des,url:Url,title:Title,Date:KUYYY}
    console.log(data)
    const createref = ref(database,'users/'+'0'+String(Counter)+'_'+data.name)
    set(createref,data)
    

    
    },[Url])
    const Gethtml = (event)=>{
      console.log(event,typeof(event))
      Setdes(event)
    }

    const [Boxone,Setboxone] = useState(false);
    const [Boxtwo,Setboxtwo] = useState(false)
    const Changeboxone = ()=>{
      Setboxone(prev=>{return !prev})
    }
    const Changeboxtwo = ()=>{
      Setboxtwo(prev=>{return !prev})
    }
    const [Counter,Setcounter] = useState(0)
    useEffect(()=>{
      const db = database;
      const myref = ref(db,'counter')
      onValue(myref, (snapshot) => {
        const data = snapshot.val();
        Setcounter(data)
        console.log(Counter)
      });
      if(Boxone==true){
        Setname('Pam')
      }else if(Boxtwo==true){
        Setname('Pha')
      }
    },[Boxone,Boxtwo])
    return (
    <>
      <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx = {{fontFamily:'monospace'}}>{"Upload completed, Please wait a moment"}	<>	&#128022;</> {"....."}</DialogTitle>
     
        <DialogActions>
        </DialogActions>
      </Dialog>
      
      </>
      <>
            {Back ? (<><Navigate to="/" /></>):(<></>)}
         
        
        </>
    
    <form  className = 'block'>
    
    <ul >
    <p style = {{fontFamily:'monospace',fontSize:'large'}}><b>Input your name</b></p>
    {/* <TextField id="outlined-basic" label="Name" variant="outlined" onChange={changeName} required/> */}

    { <div style={{display:'flex' ,width:'170px',justifyContent:"space-between"}}>
    {!Boxone?(<><Button sx = {{fontFamily:'monospace',fontSize:'large'}} disabled = {Boxtwo} onClick={Changeboxone} color = 'success' variant="outlined"><b>PAM</b></Button></>):(<><Button  disabled = {Boxtwo} onClick={Changeboxone} sx = {{fontFamily:'monospace',fontSize:'large'}}variant="contained" color="success"><b>PAM</b></Button></>)}
   
   {!Boxtwo?(<><Button sx = {{fontFamily:'monospace',fontSize:'large'}} disabled = {Boxone} onClick={Changeboxtwo} color = 'secondary' variant="outlined"><b>PHA</b></Button></>):(<><Button disabled = {Boxone} onClick={Changeboxtwo} sx = {{fontFamily:'monospace',fontSize:'large'}}variant="contained" color="secondary"><b></b>PHA</Button></>)}
   </div> }
   <br></br>
    <p style = {{fontFamily:'monospace',fontSize:'large'}}><b>Choose image</b></p>
    
    <li><input name = "img" type="file" id='image' accept='.png, .jpg, .jpeg' onChange={changeHandler} required/></li>
      
    <li>{fileDataURL ?
        <p className="img-preview-wrapper">
          {

            <img src={String(fileDataURL)} alt="preview" style={{width:'300px',height:'300px'}}/>
          }
        </p> : null}</li>
        <br></br>
    <p style = {{fontFamily:'monospace',fontSize:'large'}}><b>Title of your Story</b></p>
    <li><TextField id="outlined-basic" label="Title" variant="outlined" onChange={changetitle} required/> </li>
    <br></br>
    <p style = {{fontFamily:'monospace',fontSize:'large'}}><b>Describe your Story</b></p>
    <div style = {{backgroundColor:'LavenderBlush',color:'black'}} >
    
    <TextEditor Gettext = {Gethtml} />
    </div>
    <br></br>
    <br></br>
  <Button sx = {{marginLeft:'auto',marginRight:'auto',marginBottom:'30px',fontFamily:'monospace',fontSize:'large'}} onClick={Save} variant="contained" color="success">
 <b>SUBMIT</b> 
</Button>

    <div>
          
 
    </div>

    </ul>
    </form>
    </>

   
    );


}
export default ReportCompo