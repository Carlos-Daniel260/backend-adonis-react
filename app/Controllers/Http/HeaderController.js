"use strict";
const Header = use("App/Models/Header");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with headers
 */
class HeaderController {
  /**
   * Show a list of all headers.
   * GET headers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const headers = await Header.all();

    return response.json(headers);
  }

  /**
   * Render a form to be used for creating a new header.
   * GET headers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new header.
   * POST headers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    console.log(request.all());
    const header = await Header.create(request.all());
    return response.json({ header });
  }

  /**
   * Display a single header.
   * GET headers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    let header = await Header.find(params.id);
    return response.json({ header: header });
  }

  /**
   * Render a form to update an existing header.
   * GET headers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
    let header = await Header.find(params.id);
    return response.json({ header: header });
  }

  /**
   * Update header details.
   * PUT or PATCH headers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    let header = await Header.find(params.id);
    header.merge(request.all());
    await header.save();
    return response.json(header);
  }

  /**
   * Delete a header with id.
   * DELETE headers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    let header = await Header.find(params.id);
    header.delete();
    return response.json(header);
  }
}

module.exports = HeaderController;
