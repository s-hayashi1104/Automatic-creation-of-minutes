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
  db.collection('users').doc(uId)
    .get()
    .then(doc => {
      if (doc.exists) {
        res.json(doc.data().minutes)
        console.log('Document data:', doc.data())
      } else {
      // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    })
    .catch(error => {
      console.log('Error getting documents: ', error)
    })
})

router.post('/:uId/minutes', async (req, res) => {
  const uId = req.params.uId
  const contents = req.body.contents
  console.log(contents)
  db.collection('users').doc(uId)
    .update({
      minutes: firebase.firestore.FieldValue.arrayUnion({contents})
    })
    .then(res.json({}))
    .catch(error => {
      console.log('Error getting documents: ', error)
    })
})
router.put('/:uId/minutes', async (req, res) => {
  try {
    res.json({})
  } catch (err) {
    console.error(err)
  }
})
router.delete('/:uId/minutes', async (req, res) => {
  const uId = req.params.uId
  const contents = req.body.contents
  db.collection('users').doc(uId)
    .update({
      minutes: firebase.firestore.FieldValue.arrayRemove({contents})
    })
    .then(res.json({}))
    .catch(error => {
      console.log('Error getting documents: ', error)
    })
})

module.exports = router
