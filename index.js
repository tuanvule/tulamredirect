const express = require('express')
const app = express()
const port = "https://tulamredirect.vercel.app/"

app.get('/redirect', (req, res) => {
//   res.send('Hello World!')
    res.redirect("https://forms.gle/9hVxtoAbSUPDtC2o6")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})