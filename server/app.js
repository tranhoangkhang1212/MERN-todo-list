import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import routes from '@routes'
import swagger from '@utils/swagger'
import dbConnect from '@/config/db/connect'

dotenv.config({
    path: './.development.env',
})

const app = express()

const { PORT } = process.env
const port = PORT || 2500

app.use(express.static('public'))
app.use(morgan('dev'))
app.use(cors())

// Router
routes(app)

// Documentation
swagger(app, port)

// Connect database
dbConnect()

app.listen(port, () => {
    console.log('App running on http://localhost:' + port)
})
