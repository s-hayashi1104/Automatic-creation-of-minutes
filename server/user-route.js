const express = require('express')
const router = express.Router()

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
