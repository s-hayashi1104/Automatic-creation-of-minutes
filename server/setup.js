const userRoute = require('./user-route')
const firebase = require('firebase')

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDI9F4uZ3SzNGOO1HtLT-BNm_1VCLUUKNU',
  authDomain: 'automatic-creation-of-minutes.firebaseapp.com',
  databaseURL: 'https://automatic-creation-of-minutes.firebaseio.com',
  projectId: 'automatic-creation-of-minutes',
  storageBucket: 'automatic-creation-of-minutes.appspot.com',
  messagingSenderId: '695781313773'
}
firebase.initializeApp(config)

const db = firebase.firestore()

const setup = function (app) {
  app.post('/api/signup', async (req, res) => {
    await firebase.auth().createUserWithEmailAndPassword(
      req.body.username, req.body.password
    ).then(UserCredential => {
      const user = UserCredential.user
      const name = user.email
      const id = user.uid

      db.collection('users').add({
        id,
        name,
        password: req.body.password
      })
      let verified = firebase.auth().currentUser.emailVerified
      console.log(verified)
      // 未確認のメールアドレスの場合、メールを送信する
      if (!verified) {
      // メール送信処理
        firebase.auth().currentUser.sendEmailVerification()
        let email = firebase.auth().currentUser.email
        console.log('確認メールを送信しました。', email)
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
      console.log(verified)
      // 未確認のメールアドレスの場合、メールを送信する
      if (!verified) {
      // メール送信処理
        firebase.auth().currentUser.sendEmailVerification()
        let email = firebase.auth().currentUser.email
        console.log('確認メールを送信しました。', email)
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
