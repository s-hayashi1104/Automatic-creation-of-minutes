const express = require('express')
const router = express.Router()
const admin = require('firebase-admin')
const serviceAccount = require('../automatic-creation-of-minutes-firebase-adminsdk-dd99r-ec74771db5.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://automatic-creation-of-minutes.firebaseio.com'
})

// Authentification Filter
router.use(function (req, res, next) {
  // get token from body:token or query:token of Http Header:x-access-token
  const token = req.body.token || req.query.token || req.headers['x-access-token']
  // validate token
  if (!token) {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }
  // idToken comes from the client app (shown above)
  admin.auth().verifyIdToken(token).then(decodedToken => {
    let uid = decodedToken.uid
    next()
  }).catch(err => {
    console.error(err)
  })
})

router.get('/:userId/minutes', async (req, res) => {
  try {
    res.json(req.params)
  } catch (err) {
    console.error(err)
    res.status(500)
  }
})
router.post('/:userId/minutes', async (req, res) => {
  try {
    res.json({})
  } catch (err) {
    console.error(err)
    res.status(500)
  }
})
router.put('/:userId/minutes', async (req, res) => {
  try {
    res.json({})
  } catch (err) {
    console.error(err)
    res.status(500)
  }
})
router.delete('/:userId/minutes', async (req, res) => {
  try {
    res.json({})
  } catch (err) {
    console.error(err)
    res.status(500)
  }
})

module.exports = router
