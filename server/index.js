const express = require('express')
const router = require('./routes/routes')
const app = express()
const PORT = 8000



// ! MIDDLEWARES
app.use(express.json())
app.use('/', router)



app.listen(PORT, () => console.log(`App is listening on ${PORT}..LETS GO!!`))