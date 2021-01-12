const { getMaxListeners } = require('../lib')
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const newPerson = await User.query().insert({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: 'peter@gmail.com',
    age : 26,
    pet : [
      {
        name: 'Rocco',
        type: 'DOG'
      },
      {
        name: 'Rosey',
        type: 'DOG'
      }
    ]
  })

  // -----
  cleanup()
}

run()
