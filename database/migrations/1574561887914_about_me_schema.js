'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AboutMeSchema extends Schema {
  up () {
    this.create('about_mes', (table) => {
      table.increments()
      table.string('tittle',45).notNullable()
      table.string('descrip1',45).notNullable()
      table.string('descrip2',45).notNullable()
      table.string('icon',255).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('about_mes')
  }
}

module.exports = AboutMeSchema
