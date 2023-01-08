import Koa from 'koa'
import { koaBody } from 'koa-body'
import router from './routers/index.js'
import { config } from 'dotenv'
config()

const app = new Koa()

app.use(koaBody())

app.use(router.routes())

app.listen(8088, () => {
  console.log('server is running on port 8088...')
})
