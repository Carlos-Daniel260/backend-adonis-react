"use strict";
const Fooder = use("App/Models/Fooder");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with fooders
 */
class FooderController {
  /**
   * Show a list of all fooders.
   * GET fooders
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const fooders = await Fooder.all();

    return response.json(fooders);
  }

  /**
   * Render a form to be used for creating a new fooder.
   * GET fooders/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new fooder.
   * POST fooders
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const fooder = await Fooder.create(request.all());
    return response.json({ fooder });
  }

  /**
   * Display a single fooder.
   * GET fooders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    let fooder = await Fooder.find(params.id);
    return response.json({ fooder: fooder });
  }

  /**
   * Render a form to update an existing fooder.
   * GET fooders/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
    let fooder = await Fooder.find(params.id);
    return response.json({ fooder: fooder });
  }

  /**
   * Update fooder details.
   * PUT or PATCH fooders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    let fooder = await Fooder.find(params.id);
    fooder.merge(request.all());
    await fooder.save();
    return response.json(fooder);
  }

  /**
   * Delete a fooder with id.
   * DELETE fooders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    let fooder = await Fooder.find(params.id);
    fooder.delete();
    return response.json(fooder);
  }
}

module.exports = FooderController;
