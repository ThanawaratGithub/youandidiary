// use mongoose
const mongoose = require('mongoose')
// connect mongodb
const dburl = 'mongodb://localhost:27017/PROJECTPAM'
mongoose.connect(dburl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).catch(err=>{console.log(err)})
// design schema

let databSchema = mongoose.Schema({
    name:String,
    image:String,
    description:String
})
//build model
let Model = mongoose.model('Pamcard',databSchema)

//export model
module.exports = Model

// design function for save data
module.exports.saveproduct  = (model,data)=>{
    model.save(data)
}