// db/init.ts

import { File } from '../models/'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
  File.sync({ alter: isDev })
}
export default dbInit 