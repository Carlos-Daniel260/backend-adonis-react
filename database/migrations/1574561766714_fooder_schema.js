'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FooderSchema extends Schema {
  up () {
    this.create('fooders', (table) => {
      table.increments()
      table.string('acerca de mi',45).notNullable()
      table.string('descripAcerca',45).notNullable()
      table.string('noticias',45).notNullable()
      table.string('descripNoticias',45).notNullable()
      table.string('sigueme',45).notNullable()
      table.string('descripSig',45).notNullable()
      table.string('icon 1',255).notNullable()
      table.string('icon 2',255).notNullable()
      table.string('icon 3',255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('fooders')
  }
}

module.exports = FooderSchema
