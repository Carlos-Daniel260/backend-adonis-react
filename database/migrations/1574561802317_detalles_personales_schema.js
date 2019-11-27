'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetallesPersonalesSchema extends Schema {
  up () {
    this.create('detalles_personales', (table) => {
      table.increments()
      table.string('subtittle',45).notNullable()
      table.string('tittle',45).notNullable()
      table.string('descrip',1000).notNullable()
      table.string('foto',250).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('detalles_personales')
  }
}

module.exports = DetallesPersonalesSchema
