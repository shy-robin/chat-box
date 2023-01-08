import KoaRouter from 'koa-router'
import { generateImage, getAnswer } from '../utils/openAI.js'

const router = new KoaRouter()

router.get('/image', async (ctx) => {
  const { prompt } = ctx.request.query
  const res = await generateImage(prompt)

  ctx.body = {
    imgUrl: res,
  }
})

router.get('/answer', async (ctx) => {
  const { message } = ctx.request.query
  await getAnswer(message)
})

export default router
