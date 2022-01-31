const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const user = require("./model/user")
const bcrypt = require("bcryptjs")


mongoose.connect("mongodb+srv://CASMO:UiyNMtuYwOAUV67Q@cluster0.uo5sa.mongodb.net/Cluster0?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
    
})
const app = express()
app.use(express.static(__dirname, { index: 'index.html' }));
app.use(bodyParser.json())


app.post("/api/register", async (req, res) =>{
    console.log(req.body)
    res.json({ status: "ok" })
    const {username , password} = req.body
    console.log(await bcrypt.hash(password, 10))

})



app.listen(5500, () =>{
    console.log("serve acıldı")
})