"use strict";
const AptitudesProfesionale = use("App/Models/AptitudesProfesionale");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with aptitudesprofesionales
 */
class AptitudesProfesionaleController {
  /**
   * Show a list of all aptitudesprofesionales.
   * GET aptitudesprofesionales
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const aptitudesprofesionales = await AptitudesProfesionale.all();

    return response.json(aptitudesprofesionales);
  }

  /**
   * Render a form to be used for creating a new aptitudesprofesionale.
   * GET aptitudesprofesionales/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new aptitudesprofesionale.
   * POST aptitudesprofesionales
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    console.log(request.all());
    const aptitudesprofesionale = await AptitudesProfesionale.create(
      request.all()
    );
    return response.json({ aptitudesprofesionale });
  }

  /**
   * Display a single aptitudesprofesionale.
   * GET aptitudesprofesionales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    let aptitudesprofesionale = await AptitudesProfesionale.find(params.id);
    return response.json({ aptitudesprofesionale: aptitudesprofesionale });
  }

  /**
   * Render a form to update an existing aptitudesprofesionale.
   * GET aptitudesprofesionales/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
    let aptitudesprofesionale = await AptitudesProfesionale.find(params.id);
    return response.json({ aptitudesprofesionale: aptitudesprofesionale });
  }

  /**
   * Update aptitudesprofesionale details.
   * PUT or PATCH aptitudesprofesionales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    let aptitudesprofesionale = await AptitudesProfesionale.find(params.id);
    aptitudesprofesionale.merge(request.all());
    await aptitudesprofesionale.save();
    return response.json(aptitudesprofesionale);
  }

  /**
   * Delete a aptitudesprofesionale with id.
   * DELETE aptitudesprofesionales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    let aptitudesprofesionale = await AptitudesProfesionale.find(params.id);
    aptitudesprofesionale.delete();
    return response.json(aptitudesprofesionale);
  }
}

module.exports = AptitudesProfesionaleController;
