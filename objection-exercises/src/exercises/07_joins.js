const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const usersAndPets = await User.query().withGraphFetched('pet')
  console.log(usersAndPets)

  // Get all users, their pets, AND their children
  const usersPetsChildren = await User.query().withGraphFetched('child').withGraphFetched('pet')
  console.log(usersPetsChildren)

  // Get all users, their parents, and their grandparents
  const ancestors = await User.query().withGraphFetched('parent.parent')
  console.dir(ancestors, {depth: 3})

  // Get all users, their pets, their chilren, and their childrens' pets
  const everyone = await User.query().withGraphFetched('pet').withGraphFetched('child.pet')
  console.dir(everyone, {depth: null})

  // -----
  cleanup()
}

run()
