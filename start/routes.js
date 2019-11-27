"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
Route.resource("aboutme", "AboutMeController");
Route.resource("aptitudesprofesionales", "AptitudesProfesionaleController");
Route.resource("cursosaprobados", "CursosAprobadoController");
Route.resource("descripcion", "DescriptionController");
Route.resource("detallespersonales", "DetallesPersonaleController");
Route.resource("expherramientas", "ExpHerramientaController");
Route.resource("fooder", "FooderController");
Route.resource("header", "HeaderController");
Route.resource("navbar", "NavbarController");
Route.resource("proyecto", "ProyectoController");

Route.get("/", () => {
  return { greeting: "Hola:v" };
});
