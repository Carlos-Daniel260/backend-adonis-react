"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CursosAprobadosSchema extends Schema {
  up() {
    this.create("cursos_aprobados", table => {
      table.increments();
      table.string("tittle", 45).notNullable();
      table.string("descrip", 120).notNullable();
      table.string("dato1", 45).notNullable();
      table.string("session1", 45).notNullable();
      table.integer("result1").notNullable();
      table.string("dato2", 45).notNullable();
      table.string("session2", 45).notNullable();
      table.integer("result2").notNullable();
      table.string("dato3", 45).notNullable();
      table.string("session3", 45).notNullable();
      table.integer("result3").notNullable();
      table.string("dato4", 45).notNullable();
      table.string("session4", 45).notNullable();
      table.integer("result4").notNullable();
      table.string("dato5", 45).notNullable();
      table.string("session5", 45).notNullable();
      table.integer("result5").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("cursos_aprobados");
  }
}

module.exports = CursosAprobadosSchema;
