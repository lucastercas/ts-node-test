import express = require('express')

const app: express.Application = express()

app.get('/', (_, res) => {
  res.send("Oi")
})

app.listen(3000, () => {
  console.log("Lisnening on port 3000")
})
