const casual = require('casual')
const userData = require('./users')

casual.define('friendship', ({ user1Id, user2Id, requestStatus }) => ({
    id: casual.uuid,
    requestor_id: user1Id,
    requested_id: user2Id,
    daterequested: casual.timestamp,
    status: requestStatus,
}))

const friendships = []

for (let i=0; i < 20; i += 1) {
    const user1Id = casual.random_element(userData).id
    const user2Id = casual.random_element(userData).id
    const requestStatus = casual.random_element(['accepted', 'declined', 'requested'])

    friendships.push(casual.friendship({ user1Id, user2Id, requestStatus }))
}

module.exports = friendships