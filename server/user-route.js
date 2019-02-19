const express = require('express')
const router = express.Router()
const firebase = require('firebase')
const config = require('./firebase-config')
const admin = require('firebase-admin')
const serviceAccount = require('../automatic-creation-of-minutes-firebase-adminsdk-dd99r-ec74771db5.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://automatic-creation-of-minutes.firebaseio.com'
})

firebase.initializeApp(config)
const db = firebase.firestore()

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
    console.error(`idToken error ${err}`)
  })
})

router.get('/:uId/minutes', async (req, res) => {
  const uId = req.params.uId
  db.collection('users').where('id', '==', uId)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        res.json(doc.data().minutes)
        console.log(doc.id, ' => ', doc.data())
      })
    })
    .catch(function (error) {
      console.log('Error getting documents: ', error)
    })
})
router.post('/:uId/minutes', async (req, res) => {
  try {
    res.json({})
  } catch (err) {
    console.error(err)
  }
})
router.put('/:uId/minutes', async (req, res) => {
  try {
    res.json({})
  } catch (err) {
    console.error(err)
  }
})
router.delete('/:uId/minutes', async (req, res) => {
  try {
    res.json({})
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
