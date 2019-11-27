'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HeaderSchema extends Schema {
  up () {
    this.create('headers', (table) => {
      table.increments()
      table.string('subtitle',45).notNullable()
      table.string('tittle',45).notNullable()
      table.string('descrip',180).notNullable()
      table.string('foto',255).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('headers')
  }
}

module.exports = HeaderSchema
