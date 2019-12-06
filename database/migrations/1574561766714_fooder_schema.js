"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FooderSchema extends Schema {
  up() {
    this.create("fooders", table => {
      table.increments();
      table.string("acercaDeMi", 45).notNullable();
      table.string("descripAcerca", 45).notNullable();
      table.string("noticias", 45).notNullable();
      table.string("descripNoticias", 45).notNullable();
      table.string("sigueme", 45).notNullable();
      table.string("descripSig", 45).notNullable();
      table.string("icon1", 255).notNullable();
      table.string("icon2", 255).notNullable();
      table.string("icon3", 255).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("fooders");
  }
}

module.exports = FooderSchema;
