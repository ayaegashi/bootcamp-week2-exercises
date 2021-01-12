
const postlikesData = require('../data/postlikes')

exports.seed = knex => knex('postlikes').del()
  .then(() => knex('postlikes').insert(postlikesData))