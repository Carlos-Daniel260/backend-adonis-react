'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NavbarSchema extends Schema {
  up () {
    this.create('navbars', (table) => {
      table.increments()
      table.string('icon',255).notNullable()
      table.string('nombreIcon',45).notNullable()
      table.string('home',45).notNullable()
      table.string('about',45).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('navbars')
  }
}

module.exports = NavbarSchema
