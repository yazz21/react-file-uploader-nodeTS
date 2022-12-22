// const fileUp = require("../controller/file.controller")
const multer = require("multer");
// import { multer } from "multer";
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req:any, file: any, cb: any) {
      cb(null, path.join(__dirname, '../../public/uploads'))
    },
    filename: function (req:any, file: any, cb: any) {
      const uniqueSuffix = Date.now()
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

// Multer Filter
// const multerFilter = (req:any, file: any, cb: any) => {
// if (file.size >) {
// cb(null, true);
// } else {
// cb(new Error("Not a PDF File!!"), false);
// }
// };

const upload = multer({ storage: storage,limits:{
    fileSize: 1200000000
} } )

// module.exports = (app:any) => {

// app.post("/api/file/upload", upload.single("file"), fileUp.upload)


import {Router} from 'express'
import * as fileController from '../controller/file'
import {CreateIngredientDTO, FilterIngredientsDTO, UpdateIngredientDTO} from '../dto/file.dto'

const fileRouter = Router()

fileRouter.get('/file/:id', async (req: any, res: any) => {
    console.log('router params',req);
    console.log('router',req.params.id);
    
    const id = req.params.id
    // console.log('id',id);
    
    const result = await fileController.getById(id)
    return res.status(200).send(result)
})
fileRouter.put('/file:id', async (req: any, res: any) => {
    console.log('router params',req);
    console.log('router',req.params.id);
    console.log('req.body',req.body);
    

    // const id = Number(req.params.id)
    const id = req.params.id
    const payload:UpdateIngredientDTO = req.body
    console.log('payload',payload);
    

    const result = await fileController.update(id, payload)
    return res.status(201).send(result)
})
fileRouter.delete('/file:id', async (req: any, res: any) => {
    const id = Number(req.params.id)

    const result = await fileController.deleteById(id)
    return res.status(204).send({
        success: result
    })
})
fileRouter.post('/file', upload.single("file"), async (req: any, res: any) => {
    // console.log('enter in create post route',req.file);
    
    // const payload:CreateIngredientDTO = req.body
    const payload = req.file
    // console.log('enter in create post route payload',payload);
    
    const result = await fileController.create(payload)
    return res.status(200).send(result)
})
fileRouter.get('/file', async (req: any, res: any) => {
    // console.log('req.query: ',req.query);
    
    // const filters:FilterIngredientsDTO = req.query
    const filters = req.query
    const results = await fileController.getAll(filters)
    return res.status(200).send(results)
})
export default fileRouter 