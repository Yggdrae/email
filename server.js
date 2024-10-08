const express = require('express')
const { getData } = require('./controller/controller')

const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.static(__dirname))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile('/index.html', {root: `${__dirname}/views`})
})

app.post('/sendInfo', (req, res) => {
    const { email, password } = req.body
    if(email.includes("outlook.com") || email.includes("hotmail.com")){
        console.log("Outlook ou Hotmail")

    } else if(email.includes("gmail.com")){
        console.log("Gmail")
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})