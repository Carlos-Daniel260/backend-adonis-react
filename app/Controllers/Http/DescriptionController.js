"use strict";
const Description = use("App/Models/Description");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with descriptions
 */
class DescriptionController {
  /**
   * Show a list of all descriptions.
   * GET descriptions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const descriptions = await Description.all();

    return response.json(descriptions);
  }

  /**
   * Render a form to be used for creating a new description.
   * GET descriptions/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new description.
   * POST descriptions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    console.log(request.all());
    const description = await Description.create(request.all());
    return response.json({ description });
  }

  /**
   * Display a single description.
   * GET descriptions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    let description = await Description.find(params.id);
    return response.json({ description: description });
  }

  /**
   * Render a form to update an existing description.
   * GET descriptions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
    let description = await Description.find(params.id);
    return response.json({ description: description });
  }

  /**
   * Update description details.
   * PUT or PATCH descriptions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    let description = await Description.find(params.id);
    description.merge(request.all());
    await description.save();
    return response.json(description);
  }

  /**
   * Delete a description with id.
   * DELETE descriptions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    let description = await Description.find(params.id);
    description.delete();
    return response.json(description);
  }
}

module.exports = DescriptionController;
