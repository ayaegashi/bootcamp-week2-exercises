const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  created_at: casual.moment,
  updated_at: casual.moment,
  password: casual.password,
  first_name: casual.first_name,
  last_name: casual.last_name,
  dob: casual.date(),
  bio: casual.sentence,
  online: casual.boolean,
  last_seen: casual.moment,
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
