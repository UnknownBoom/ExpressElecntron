import '../db/index'
const express = require('express')
import userRouter from './route/userRouter'
import realtorRouter from './route/realtorRoute'
import leviRouter from './route/leviRouter'
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json());

const port = process.env.PORT || 8057

app.use('/api/user',userRouter)
app.use('/api/realtor',realtorRouter)
app.use('/api/levi',leviRouter)

app.listen(port)
