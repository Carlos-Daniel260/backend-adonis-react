"use strict";
const ExpHerramienta = use("App/Models/ExpHerramienta");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with expherramientas
 */
class ExpHerramientaController {
  /**
   * Show a list of all expherramientas.
   * GET expherramientas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const expherramientas = await ExpHerramienta.all();

    return response.json(expherramientas);
  }

  /**
   * Render a form to be used for creating a new expherramienta.
   * GET expherramientas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new expherramienta.
   * POST expherramientas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    console.log(request.all());
    const expherramienta = await ExpHerramienta.create(request.all());
    return response.json({ expherramienta });
  }

  /**
   * Display a single expherramienta.
   * GET expherramientas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    let expherramienta = await ExpHerramienta.find(params.id);
    return response.json({ expherramienta: expherramienta });
  }

  /**
   * Render a form to update an existing expherramienta.
   * GET expherramientas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
    let expherramienta = await ExpHerramienta.find(params.id);
    return response.json({ expherramienta: expherramienta });
  }

  /**
   * Update expherramienta details.
   * PUT or PATCH expherramientas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    let expherramienta = await ExpHerramienta.find(params.id);
    expherramienta.merge(request.all());
    await expherramienta.save();
    return response.json(expherramienta);
  }

  /**
   * Delete a expherramienta with id.
   * DELETE expherramientas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    let expherramienta = await ExpHerramienta.find(params.id);
    expherramienta.delete();
    return response.json(expherramienta);
  }
}

module.exports = ExpHerramientaController;
