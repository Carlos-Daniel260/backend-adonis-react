'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExpHerramientasSchema extends Schema {
  up () {
    this.create('exp_herramientas', (table) => {
      table.increments()
      table.string('exp1',45).notNullable()
      table.integer('barra1').notNullable()
      table.string('exp2',45).notNullable()
      table.integer('barra2').notNullable()
      table.string('exp3',45).notNullable()
      table.integer('barra3').notNullable()
      table.string('exp4',45).notNullable()
      table.integer('barra4').notNullable()
      table.string('exp5',45).notNullable()
      table.integer('barra5').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('exp_herramientas')
  }
}

module.exports = ExpHerramientasSchema
