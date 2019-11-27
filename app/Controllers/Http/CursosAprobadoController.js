"use strict";
const CursosAprobado = use("App/Models/CursosAprobado");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cursosaprobados
 */
class CursosAprobadoController {
  /**
   * Show a list of all cursosaprobados.
   * GET cursosaprobados
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const cursosaprobados = await CursosAprobado.all();

    return response.json(cursosaprobados);
  }

  /**
   * Render a form to be used for creating a new cursosaprobado.
   * GET cursosaprobados/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new cursosaprobado.
   * POST cursosaprobados
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    console.log(request.all());
    const cursosaprobado = await CursosAprobado.create(request.all());
    return response.json({ cursosaprobado });
  }

  /**
   * Display a single cursosaprobado.
   * GET cursosaprobados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    let cursosaprobado = await CursosAprobado.find(params.id);
    return response.json({ cursosaprobado: cursosaprobado });
  }

  /**
   * Render a form to update an existing cursosaprobado.
   * GET cursosaprobados/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
    let cursosaprobado = await CursosAprobado.find(params.id);
    return response.json({ cursosaprobado: cursosaprobado });
  }

  /**
   * Update cursosaprobado details.
   * PUT or PATCH cursosaprobados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    let cursosaprobado = await CursosAprobado.find(params.id);
    cursosaprobado.merge(request.all());
    await cursosaprobado.save();
    return response.json(cursosaprobado);
  }

  /**
   * Delete a cursosaprobado with id.
   * DELETE cursosaprobados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    let cursosaprobado = await CursosAprobado.find(params.id);
    cursosaprobado.delete();
    return response.json(cursosaprobado);
  }
}

module.exports = CursosAprobadoController;
