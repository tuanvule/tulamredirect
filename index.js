const express = require('express')
const app = express()
const port = 3000

app.get('/redirect', (req, res) => {
//   res.send('Hello World!')
    res.redirect("https://forms.gle/9hVxtoAbSUPDtC2o6")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})