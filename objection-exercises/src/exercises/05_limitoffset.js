const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  try {
    const firstFive = await User.query().orderBy('lastName').limit(5)
    console.log(firstFive)
  } catch (err) {
    console.log(err)
  }

  // Get the second 5 users, ordered by lastName
  try {
    const nextFive = await User.query().orderBy('lastName').limit(5).offset(5)
    console.log(nextFive)
  } catch (err) {
    console.log(err)
  }

  // -----
  cleanup()
}

run()
