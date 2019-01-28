const userRoute = require('./user-route')

const setup = function (app) {
  app.post('/api/signup', async (req, res) => {
    try {
      res.json({})
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
