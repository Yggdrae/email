import express from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile('/index.html', {root: `${__dirname}/views`})
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`)
})