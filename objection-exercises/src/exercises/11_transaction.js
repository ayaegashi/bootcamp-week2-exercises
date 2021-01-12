const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  try {
    const mytransaction = await User.transaction(async trx => {
      const newUser = await User.query().insert({
        email: 'new_user@hotmail.com',
        firstName: 'Genevieve',
        lastName: 'Baker',
        age: 46
      }).returning('*')

      const herPet = await newUser.$relatedQuery('pet').insert({
        type: 'BIRD',
        name: 'Sun'
      })

      const totalPets = await Pet.query().resultSize()

      if (totalPets > 15) {
        await Pet.query().delete().where('type', 'BIRD')
      }
      
    })
  } catch (err) {
    console.log("This is an error")
    console.log(err)
  }


  // -----
  cleanup()
}

run()
