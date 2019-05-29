const express = require('express')
const app = express()

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/', (request, response) => {
  console.log(request.body)

  // 50% chance of success
  if (Math.random() > 0.5) {
    response.status(200).send('saved')
  } else {
    response.status(500).send('Server Error')
  }
})

app.get('/', (request, response) => {
  response.status(200).send()
})

app.listen(3000)
