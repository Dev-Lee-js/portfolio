const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000

mongoose.connect('mongodb+srv://jongseok:852456@cluster0.oit5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {


}).then(() => console.log('MongoDB 연결중...'))
  .catch(err => console.log(err))

app.get('/',(req,res)=>{
    res.send("서버가 열렸다!!")
})


app.listen(port,()=>console.log(`${port}포트에서 서버 가동중....`))


