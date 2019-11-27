'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProyectoSchema extends Schema {
  up () {
    this.create('proyectos', (table) => {
      table.increments()
      table.integer('cant').notNullable()
      table.string('descrip',45).notNullable()
      table.integer('cant2').notNullable()
      table.string('descrip2',45).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('proyectos')
  }
}

module.exports = ProyectoSchema
