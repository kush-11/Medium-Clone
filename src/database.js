const mongoose=require("mongoose");

const DB=`mongodb+srv://kush1604be20:YV2dlWQEi8HZIaD8@cluster0.wvk193e.mongodb.net/demo2`;
mongoose.set('strictQuery', true)
mongoose.connect(DB,{
    useNewUrlParser: true,
}).then(()=>{
    console.log("connection successfull");
}).catch(()=>{
    console.log("error no connection")
});
