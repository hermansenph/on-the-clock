require('dotenv/config')
const { createApp } = require('./create-app')
const { MongoClient } = require('mongodb')

MongoClient.connect(process.env.MONGODB_URI, async (err, db) => {

  if (err) console.log(err)

  const app = createApp()

  app.listen(process.env.PORT, () => {
    console.log('Listening on ' + process.env.PORT)
  })

})
