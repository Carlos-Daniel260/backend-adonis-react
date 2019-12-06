"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FooderSchema extends Schema {
  up() {
    this.table("fooders", table => {
      table.renameColumn("acerca de mi", "acercaDeMi");
      table.renameColumn("icon 1", "icon1");
      table.renameColumn("icon 2", "icon2");
      table.renameColumn("icon 3", "icon3");
    });
  }

  down() {
    this.table("fooders", table => {
      // reverse alternations
    });
  }
}

module.exports = FooderSchema;
