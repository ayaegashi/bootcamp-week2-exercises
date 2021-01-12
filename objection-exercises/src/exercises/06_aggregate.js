const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  try {
    const userNum = await User.query().resultSize()
    console.log(userNum)
  } catch (err) {
    console.log(err)
  }

  // Get the average age of users
  try {
    const avgAge = await User.query().avg('age as avg')
    console.log(avgAge)
  } catch (err) {
    console.log(err)
  }

  // Get the total number of dogs
  try {
    const dogNum = await Pet.query().where('type','DOG').resultSize()
    console.log(dogNum)
  } catch (err) {
    console.log(err)
  }

  // -----
  cleanup()
}

run()
