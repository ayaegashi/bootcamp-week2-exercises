const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('postlikes', ({ postId, likerId }) => ({
    post_id: postId,
    liker_id: likerId
}))

const postlikesArr = []

for (let i=0; i < 20; i += 1) {
    const postId = casual.random_element(postData).post_id
    const likerId = casual.random_element(userData).id

    postlikesArr.push(casual.postlikes({ postId, likerId }))
}

module.exports = postlikesArr