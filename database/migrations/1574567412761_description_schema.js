'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DescriptionSchema extends Schema {
  up () {
    this.create('descriptions', (table) => {
      table.increments()
      table.string('descrip1',1000).notNullable()
      table.string('descrip2',1000).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('descriptions')
  }
}

module.exports = DescriptionSchema
