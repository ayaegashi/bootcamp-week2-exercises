
exports.up = async knex => knex.schema.createTable('postlikes', table => {
    table.uuid('post_id').references('posts.post_id').notNullable()

    table.uuid('liker_id').references('users.id').notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('postlikes')
