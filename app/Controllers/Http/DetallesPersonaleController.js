"use strict";
const DetallesPersonale = use("App/Models/DetallesPersonale");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with detallespersonales
 */
class DetallesPersonaleController {
  /**
   * Show a list of all detallespersonales.
   * GET detallespersonales
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const detallespersonales = await DetallesPersonale.all();

    return response.json(detallespersonales);
  }

  /**
   * Render a form to be used for creating a new detallespersonale.
   * GET detallespersonales/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new detallespersonale.
   * POST detallespersonales
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    console.log(request.all());
    const detallespersonale = await DetallesPersonale.create(request.all());
    return response.json({ detallespersonale });
  }

  /**
   * Display a single detallespersonale.
   * GET detallespersonales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    let detallespersonale = await DetallesPersonale.find(params.id);
    return response.json({ detallespersonale: detallespersonale });
  }

  /**
   * Render a form to update an existing detallespersonale.
   * GET detallespersonales/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
    let detallespersonale = await DetallesPersonale.find(params.id);
    return response.json({ detallespersonale: detallespersonale });
  }

  /**
   * Update detallespersonale details.
   * PUT or PATCH detallespersonales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    let detallespersonale = await DetallesPersonale.find(params.id);
    detallespersonale.merge(request.all());
    await detallespersonale.save();
    return response.json(detallespersonale);
  }

  /**
   * Delete a detallespersonale with id.
   * DELETE detallespersonales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    let detallespersonale = await DetallesPersonale.find(params.id);
    detallespersonale.delete();
    return response.json(detallespersonale);
  }
}

module.exports = DetallesPersonaleController;
