
exports.up = async knex => knex.schema.createTable('friends', table => {
  table
    .uuid('id')
    .primary()
    .notNullable()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('requestor_id')
    .references('users.id')
    
  table
    .uuid('requested_id')
    .references('users.id')

  table.timestamp('daterequested')

  table.enum('status', ['accepted', 'declined', 'requested'])
})

exports.down = function(knex) {
  
};
