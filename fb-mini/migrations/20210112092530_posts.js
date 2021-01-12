
exports.up = async knex => knex.schema.createTable('posts', table => {
  table
    .uuid('post_id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()')) 

  table
    .uuid('user_id').references('users.id').notNullable()

  table.text('post').notNullable()

  table.integer('likes')

  table.timestamp('date_posted')
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
