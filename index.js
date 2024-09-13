const express = require('express')
const app = express()
const port = "https://tulamredirect.vercel.app/"

app.get('/redirect', (req, res) => {
//   res.send('Hello World!')
    res.redirect("https://www.facebook.com/itclub.nhh")
})

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})