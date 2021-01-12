const { HasManyRelation, ManyToManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')
const Pet = require('./Pet')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      pet: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId',
        },
      },

      child: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
            from: 'users.id',
            through: {
                from: 'relations.parentId',
                to: 'relations.childId'
            },
            to: 'users.id',
          },
        },

      parent: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
            from: 'users.id',
            through: {
                from: 'relations.childId',
                to: 'relations.parentId'
            },
            to: 'users.id',
          },
        },

    }
  }
}

module.exports = User
