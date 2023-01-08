import { Configuration, OpenAIApi } from 'openai'
import { ChatGPTAPIBrowser } from 'chatgpt'

export const generateImage = async (prompt) => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  })

  const openAI = new OpenAIApi(config)

  const res = await openAI.createImage({
    prompt,
    size: '256x256',
    n: 1,
  })

  return res.data.data[0].url
}

export const getAnswer = async (message) => {
  const api = new ChatGPTAPIBrowser({
    email: process.env.OPEN_AI_EMAIL,
    password: process.env.OPEN_AI_PASSWORD,
  })
  const res = await api.sendMessage(message)
  console.log(res)
}
