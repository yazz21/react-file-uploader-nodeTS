import { Router } from 'express'
import fileRouter from './uploadRoutes'

const router = Router()

router.use('', fileRouter)

export default router