const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const myDog = await Pet.query().findOne({type: 'BIRD'})

  // Console output is: "Dasia is a bird!"
  console.log(myDog.introduction())

  // -----
  cleanup()
}

run()
