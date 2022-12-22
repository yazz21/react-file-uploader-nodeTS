import express, { Application, Request, Response } from 'express'

import routes from './routes'
import dbInit from './db/init'
import cors from 'cors'
const path = require('path')

dbInit()

const port = 5100

export const get = () => {
    const app: Application = express()

    // Body parsing Middleware
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/static', express.static(path.join(__dirname, '../public')))
    
    app.get('/', async(req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({ message: `Welcome to the File Upload API! \n Endpoints available at http://localhost:${port}/api/v1` })
    })
    
    app.use('/api/v1', routes)

    return app
}

export const start = () => {
    const app = get()
    try {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`)
        })
    } catch (error: any) {
        console.log(`Error occurred: ${error.message}`)
    }
}

start()

