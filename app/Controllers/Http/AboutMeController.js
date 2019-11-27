"use strict";
const AboutMe = use("App/Models/AboutMe");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with aboutmes
 */
class AboutMeController {
  /**
   * Show a list of all aboutmes.
   * GET aboutmes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const aboutmes = await AboutMe.all();

    return response.json(aboutmes);
  }

  /**
   * Render a form to be used for creating a new aboutme.
   * GET aboutmes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new aboutme.
   * POST aboutmes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    console.log(request.all());
    const aboutme = await AboutMe.create(request.all());
    return response.json({ aboutme });
  }

  /**
   * Display a single aboutme.
   * GET aboutmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    let aboutme = await AboutMe.find(params.id);
    return response.json({ aboutme: aboutme });
  }

  /**
   * Render a form to update an existing aboutme.
   * GET aboutmes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
    let aboutme = await AboutMe.find(params.id);
    return response.json({ aboutme: aboutme });
  }

  /**
   * Update aboutme details.
   * PUT or PATCH aboutmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    let aboutme = await AboutMe.find(params.id);
    aboutme.merge(request.all());
    await aboutme.save();
    return response.json(aboutme);
  }

  /**
   * Delete a aboutme with id.
   * DELETE aboutmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    let aboutme = await AboutMe.find(params.id);
    aboutme.delete();
    return response.json(aboutme);
  }
}

module.exports = AboutMeController;
