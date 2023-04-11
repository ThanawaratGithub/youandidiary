const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const Pd = require('./dbmole/data')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.json())
const multer  = require('multer')
const { ClassNames } = require('@emotion/react')
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
  
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+".jpg")
    }
  })
  
  var upload = multer({ storage: storage })

app.post('/send',(req,res)=>{
    console.log('hello')
    console.log(req.body)
    res.sendStatus(200)
})

app.post('/pass',upload.single('img'),(req,res)=>{
  console.log('from multer')
  res.sendStatus(200)

})
app.listen(6060,()=>{console.log('start server')})




