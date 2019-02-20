const userRoute = require('./user-route')
const firebase = require('firebase')

const db = firebase.firestore()

const setup = function (app) {
  app.post('/api/signup', async (req, res) => {
    await firebase.auth().createUserWithEmailAndPassword(
      req.body.username, req.body.password
    ).then(UserCredential => {
      const user = UserCredential.user
      const name = user.email
      const id = user.uid

      db.collection('users').doc(id).set({
        name,
        password: req.body.password
      })
      let verified = firebase.auth().currentUser.emailVerified
      // In case of unconfirmed email address, send email
      if (!verified) {
        firebase.auth().currentUser.sendEmailVerification()
        let email = firebase.auth().currentUser.email
        console.log('confirmation mail has been sent', email)
      }
      res.json(user)
    })
      .catch(err => {
        console.error('Error writing document: ', err)
      })
  })
  app.post('/api/signin', async (req, res) => {
    await firebase.auth().signInWithEmailAndPassword(
      req.body.username, req.body.password
    ).then(UserCredential => {
      let verified = firebase.auth().currentUser.emailVerified
      if (!verified) {
        res.json({message: 'Please authenticate your e-mail address'})
      }
      let uid = UserCredential.user.uid
      return UserCredential.user.getIdToken().then(idToken => {
        res.json({idToken, uid})
      })
    })
      .catch(err => {
        console.error('Auth error:', err)
      })
  })

  app.use('/api/user', userRoute)
}

module.exports = setup
