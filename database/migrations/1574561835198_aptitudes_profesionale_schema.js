'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AptitudesProfesionaleSchema extends Schema {
  up () {
    this.create('aptitudes_profesionales', (table) => {
      table.increments()
      table.string('tittle',45).notNullable()
      table.string('descrip',200).notNullable()
      table.string('icon1',250).notNullable()
      table.string('descrip1',45).notNullable()
      table.string('icon2',250).notNullable()
      table.string('descrip2',45).notNullable()
      table.string('icon3',250).notNullable()
      table.string('descrip3',45).notNullable()
      table.string('icon4',250).notNullable()
      table.string('descrip4',45).notNullable()
      table.string('icon5',250).notNullable()
      table.string('descrip5',45).notNullable()
      


      table.timestamps()
    })
  }

  down () {
    this.drop('aptitudes_profesionales')
  }
}

module.exports = AptitudesProfesionaleSchema
