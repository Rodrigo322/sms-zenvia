import express from 'express'
const app = express()

import {router} from './routes'

app.use(express.json())
app.use(router)

app.listen(3333, () => console.log('servidor on na port 3333'))