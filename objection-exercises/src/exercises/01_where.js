const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')
const User = require('../models/User')

const run = (async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  try {
    const Doug = await User.query().where('firstName', 'Doug')
    console.log(Doug)
  } catch (err) {
    console.log(err)
  }


  // Do the same with object notation
  try {
    const Doug = await User.query().where({firstName: "Doug"})
    console.log(Doug)
  } catch (err) {
    console.log(err)
  }

  // Get all DOGS and BIRDS
  try {
    const dogsBirds = await Pet.query().where('type', 'BIRD').orWhere('type','DOG')
    console.log(dogsBirds)
  } catch (err) {
    console.log(err)
  }

  // -----
  cleanup()
})

run()
