const article = require('./article')
const user = require('./user')
const tag = require('./tag')
const comment = require('./comment')
const auth = require('./auth')
const upload = require('./upload')
const visit = require('./visit')
const statistics = require('./statistics')
module.exports = [
  article,
  user,
  tag,
  comment,
  auth,
  upload,
  visit,
  statistics
]
