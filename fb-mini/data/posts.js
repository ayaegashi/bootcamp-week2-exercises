const casual = require('casual')
const userData = require('./users')

casual.define('posts', ({ userId }) => ({
    post_id: casual.uuid,
    user_id: userId,
    post: casual.text,
    likes: casual.integer(from=0, to=500),
    date_posted: casual.timestamp
}))

const postsArr = []

for (let i=0; i < 20; i += 1) {
    const userId = casual.random_element(userData).id

    postsArr.push(casual.posts( { userId }))
}

module.exports = postsArr