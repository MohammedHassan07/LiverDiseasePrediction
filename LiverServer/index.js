const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const app = express()
corsOption = {
    origin: '*'
}
app.use(cors({ option: corsOption }))
app.use(express.json())

const PORT = process.env.PORT
app.listen(PORT, () => {

    console.log('Server is up at ', PORT)
})

const diseaseRoute = require('./routes/model.routes')

app.use('/disease', diseaseRoute)