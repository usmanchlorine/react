const connectToMongo=require('./db')
connectToMongo();



const express = require('express')
const app = express()
const port = 5000

//available routes

app.use(express.json()) // /yeh middle ware hai yeh use hooga agar response json ma bhejna hai tu sab si pehle yeh karlena usman

app.use('/api/auth',require('./routes/auth')) /// aapp.use is like middleware  yeh api  tu hooga hi likin aagaya mai router sai  endpoind dungha like includes in django

app.use('/api/notes',require('./routes/notes')) // yeh aik or middle ware hai 



app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})