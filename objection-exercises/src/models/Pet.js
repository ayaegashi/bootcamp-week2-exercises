// Write your Pet model here!
const BaseModel = require('./BaseModel')

class Pet extends BaseModel {
    static get tableName() {
        return 'pets'
    }

    static get virtualAttributes() {
        return ['name', 'type']
    }

    introduction() {
        return `${this.name} is a ${this.type.toLowerCase()}!`
    }
}

module.exports = Pet