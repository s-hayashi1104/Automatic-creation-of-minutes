const setup = function (app) {
  app.post('/signup', async (req, res) => {
    try {
      res.json({})
    } catch (err) {
      console.error(err)
      res.status(500)
    }
  })
  app.post('/signin', async (req, res) => {
    try {
      res.json({})
    } catch (err) {
      console.error(err)
      res.status(500)
    }
  })
  app.get('/userpage/userId/minutes', async (req, res) => {
    try {
      res.json({})
    } catch (err) {
      console.error(err)
      res.status(500)
    }
  })
  app.post('/userpage/userId/minutes', async (req, res) => {
    try {
      res.json({})
    } catch (err) {
      console.error(err)
      res.status(500)
    }
  })
  app.put('/userpage/userId/minutes', async (req, res) => {
    try {
      res.json({})
    } catch (err) {
      console.error(err)
      res.status(500)
    }
  })
  app.delete('/userpage/userId/minutes', async (req, res) => {
    try {
      res.json({})
    } catch (err) {
      console.error(err)
      res.status(500)
    }
  })
}

module.exports = setup
