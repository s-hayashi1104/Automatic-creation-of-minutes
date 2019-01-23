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
  app.get('/api/user/:userId/minutes', async (req, res) => {
    try {
      res.json(req.params)
    } catch (err) {
      console.error(err)
      res.status(500)
    }
  })
  app.post('/api/user/:userId/minutes', async (req, res) => {
    try {
      res.json({})
    } catch (err) {
      console.error(err)
      res.status(500)
    }
  })
  app.put('/api/user/:userId/minutes', async (req, res) => {
    try {
      res.json({})
    } catch (err) {
      console.error(err)
      res.status(500)
    }
  })
  app.delete('/api/user/:userId/minutes', async (req, res) => {
    try {
      res.json({})
    } catch (err) {
      console.error(err)
      res.status(500)
    }
  })
}

module.exports = setup
