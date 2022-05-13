const express = require("express")
const app = express()
const port = 3000

//root route
app.get('/',(req,res) => {
    res.send("<h1>Hello World")
})

app.listen(port,()=>{
    console.log(`Server runs on port ${port}`)
})