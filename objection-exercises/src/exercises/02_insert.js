const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  try {
    console.log('hi')
    const Me = await User.query().insert({
      email: 'email@gmail.com',
      firstName: 'Ayana',
      lastName: 'Yaegashi',
      age: 19
    })
  } catch (err) {
    console.log(err)
  }

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  try {
    const MyPet = await Pet.query().insert({
      ownerId: '54d49395-9765-40d5-be7d-08fd421654b5',
      type: 'DOG',
      name: 'Dalia'
    })
  } catch (err) {
    console.log(err)
  }

  // -----
  cleanup()
}

run()
