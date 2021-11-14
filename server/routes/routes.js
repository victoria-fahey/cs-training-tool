const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getCorals()
    .then(corals => {
      res.json(corals)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
