exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table
    .string('password')
    .notNullable()

  table.string('first_name')
  
  table.string('last_name')
  
  table.datetime('dob')

  table.text('bio')

  table.boolean('online').notNullable()

  table.timestamp('last_seen').notNullable()

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
