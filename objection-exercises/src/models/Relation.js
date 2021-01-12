// Write your relation model here!
const { relationMappings, ManyToManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Relation extends BaseModel {
    static get tableName() {
        return 'relations'
    }

}

module.exports = Relation