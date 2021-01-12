const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const Marquise = await User.query().findById('99717afd-5902-4b52-9148-9dfd38990752')

  // Use that instance to create a new pet related that user
  const newPet = await Marquise.$relatedQuery('pet').insert({
    type: 'DOG',
    name: 'Jenn'
  }).returning('*')


  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const everyone = await Marquise.$fetchGraph(`[child, pet]`)
  console.log(everyone)

  // -----
  cleanup()
}

run()
