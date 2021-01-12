const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
// Import models
const User = require('../models/User')

const run = (async () => {
  // Write Queries and Logs Here !!!
  try {
    const allUsers = await User.query()
    console.log(allUsers)
  } catch (err) {
    console.log(err)
  }


  // Get all pets
  try {
    const allPets = await Pet.query()
    console.log(allPets)
  } catch (err) {
    console.log(err)
  }


  // Get the name and age of all users
  try {
    const userNameAge = await User.query().select('firstName','lastName','age')
    console.log(userNameAge)
  } catch (err) {
    console.log(err)
  }

  // ------
  cleanup()
})

run()
