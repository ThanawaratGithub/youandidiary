import React, { useEffect, useState }  from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CardActions,Container,Paper,Grid, CardMedia,Button ,TextField,Card,CardHeader,Typography,CardContent} from '@mui/material';
import { maxHeight } from '@mui/system';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import ReportCompo from './ReportCompo';
import RecipeReviewCard from './Supergoodcard';
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


/////////////////////////////////////////////////////////////////////////////////////
const text = `Hello this is the contenet`
const arr = ["https://drive.google.com/uc?export=view&id=1t96Qt6A32iBWYbnzM94O_zGZuOaRe-64",
"https://drive.google.com/uc?export=view&id=1rjtCtj0NEVTE5fuHTL5vaG3meIll1GgO",
"https://drive.google.com/uc?export=view&id=1oeAo8x8LHlQBL9YMmLFRXXXkU8TJ3dDs",
"https://drive.google.com/uc?export=view&id=1f3eAyf6sLrkBXbmmjUshKcwdFOgpRVUb",
"https://drive.google.com/uc?export=view&id=1p1AfVAw6LojDyhgBZjBz18WeqMY9VmkC",
"https://drive.google.com/uc?export=view&id=17ZVC_tAvNt4q1yxa2Q9rIDrVQdNyQuGJ",
"https://drive.google.com/uc?export=view&id=1Z3x18pd5OtQPWnGsUOA6zidQeIJ8dTho",
"https://drive.google.com/uc?export=view&id=14hYJ5Yk06iJsGbcEiG5_ZtS8FuLrEX5c",
"https://drive.google.com/uc?export=view&id=1QaWo9431vuTYL7zJWPfAgLaS2shQaJzu",
"https://drive.google.com/uc?export=view&id=1MoLLqyldPvzx8L6-e075gu5U3UmDnSrl",
"https://drive.google.com/uc?export=view&id=16CrZ3YijUapx7mo5_120xndeAXWSNanu",
"https://drive.google.com/uc?export=view&id=1m0C_7C1l3sAB33xBgvPTED8OlrmyJZ-r",
"https://drive.google.com/uc?export=view&id=1oD2zyXK2WqbPN5kb3JWzid3oWmI6WJ0v",
"https://drive.google.com/uc?export=view&id=11yUD0DoSfOjFaULl6UvyS0nz4G03gCV9",
"https://drive.google.com/uc?export=view&id=1R3VNM8gSlWO7UgtIlTUFLSXWWlLGYU1m",
"https://drive.google.com/uc?export=view&id=1PkyGJ6inRds1IQmnRXMmEeAZBnOMwbXG",
"https://drive.google.com/uc?export=view&id=1EjSn4ZkLRbjk6LQ9CKtq8SZJXIrVfwNa",
"https://drive.google.com/uc?export=view&id=1kq_d5PDLu8K5itws6JjAWbBsshHPAtLg",
"https://drive.google.com/uc?export=view&id=1zOUIgBzKo0YolWkK-9MiKToujmN5WzEj"]
const Thisiscard = (props)=>{
    return (
        <Card sx={{ maxWidth: 345 ,maxHeight:345,marginLeft:'auto',marginRight:'auto'}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140px"
            image= {arr[Number(Math.floor(((Math.random()*(19))*(16512131849854121651)))%20)]}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>PAM & PHA</b>
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx = {{display:'flex',justifyContent:"space-between",color:'#f892ad',fontFamily:'monospace'}}>
            <Button size="small" sx = {{color:'#f892ad',fontFamily:'monospace'}}><b>Share</b></Button>
            <Button size="small"sx = {{color:'#f892ad',fontFamily:'monospace'}}><b>Learn</b> </Button>
          </CardActions>
        </Card>
      );
}

const ButtonCompo =   (propsss)=>{
  const [Nowitem,SetNow] = useState([])
  const [Dataoflist,setData] = useState({})
  const [Datapeab,SetDatapeab] = useState({})
  const [Datasam,SetDatasam ] = useState({})
  const [Coutner,SetCOunter] = useState(0)
  const Change =  (callback)=>{
    SetNow((event)=>{
      return [...event,1]
    })
  }
  const Sadang = ()=>{

  }
  function loadone(){
    const db = database;
    const myref = ref(db)
    get(child(myref, 'users/')).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setData(data)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
 
  }
   function loadtwo(){
    const db = database;
    const myref = ref(db)
    get(child(myref, 'keeper/')).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        SetDatapeab(data)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
   }
 

  useEffect(()=>{
    console.log('counter')
  },[Coutner])
  useEffect(()=>{
    loadone()
    console.log('firstload')
   
  },[])
  useEffect(()=>{
   SetDatasam(Dataoflist);
   console.log('dataoflist')
    loadtwo();
  },[Dataoflist])
  useEffect(()=>{
    console.log('datasam')
    console.log(Dataoflist)
    console.log(Datapeab)
    SetCOunter(prev=>prev+1);
  },[Datasam])
  const [visited,Setvisit] = useState(false)
  useEffect(()=>{
    console.log('datapeab')
    console.log(Dataoflist)
    console.log(Datapeab)
    console.log(Datasam)
    if(Dataoflist!= null && Datapeab!=null){
      Object.entries(Dataoflist).map(([keyaa,value],ind)=>{Object.entries(Datapeab).map(([keya,value],i)=>{
        if(Datapeab[keya].url == Dataoflist[keyaa].url){
          if(Dataoflist[keyaa].mynew == null){
            SetDatasam((prev)=>{var cloner = prev; cloner[keyaa]= {...cloner[keyaa],mynew:Datapeab[keya].mynew}
            
            return cloner;
            
          })
         
          }
        }
        })})
    }
  },[Datapeab])
  const Tum = (event)=>{
    const createref = ref(database,'users/'+event)
    remove(createref)
    loadone()

  }
  const Changeheart =  (event)=>{
    console.log(Dataoflist)
    console.log(event)
    const path = event[0]
    const dat = {
      name:event[1],
      des:event[2],
      title:event[3],
      url:event[4],
      Hstatus:Boolean(!event[5]),
      Date:event[6]
    }
    console.log(dat)
    const createref = ref(database,'users/'+path)
    update(createref,dat)
  }
  const [Dataonecop,Setdataonecop] = useState(Dataoflist);
  const [Datasamcop,Setdatasamcop] = useState(Datasam);
  const ChangeChat = (ev)=>{
    const db = database;
      const myref = ref(db,'keeper'+'/'+ev['keyurl'][0])
      console.log(ev);
      set(myref,{url:ev['keyurl'][4],mynew:ev['keydat']});

      
  }

  const Test = ()=>{
    
    
      return(

       <>
            {Object.entries(Datasam).map(([keya,value],i)=>(
                   <Grid item md = {3}>
                   <  RecipeReviewCard Meets = {propsss.itlikedream}  chathis = {Datasam[keya].mynew} CCe = {ChangeChat} dd = {Datasam[keya].Date} HHe = {Changeheart} Kamsang = {Tum} heart = {Datasam[keya].Hstatus} Title = {Datasam[keya].title} Key = {keya} Name = {Datasam[keya].name} Des = {Datasam[keya].des} Url =  {Datasam[keya].url}/>
                  </Grid>
            ))}
      </>
        
    )
    
    
      
     
  } 
  
   return (
   
    <>
     <div>

        <Container  >
        <Grid container  direction="row"
  justifyContent="center"
    rowSpacing = {{md:4,sm:2,xs:2}} columnSpacing={{md:0,sm:2,xs:2}}>
        <Test/>
        </Grid>
        </Container>

     </div>


       </>
   );
}
export default ButtonCompo