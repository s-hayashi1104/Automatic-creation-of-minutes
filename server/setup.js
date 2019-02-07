const userRoute = require('./user-route')
const admin = require('firebase-admin')
const serviceAccount = require('../automatic-creation-of-minutes-firebase-adminsdk-dd99r-ec74771db5.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://automatic-creation-of-minutes.firebaseio.com'
})

const db = admin.database()
const ref = db.ref('users')

const setup = function (app) {
  app.post('/api/signup', async (req, res) => {
    try {
      ref.set({
        id: '1',
        name: req.body.username,
        password: req.body.password
      })
      res.status(200)
    } catch (err) {
      console.error(err)
      res.status(500)
    }
  })
  app.post('/api/signin', async (req, res) => {
    try {
      res.json({})
    } catch (err) {
      console.error(err)
      res.status(500)
    }
  })

  app.use('/api/user', userRoute)
}

module.exports = setup
