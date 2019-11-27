"use strict";
const Navbar = use("App/Models/Navbar");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with navbars
 */
class NavbarController {
  /**
   * Show a list of all navbars.
   * GET navbars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const navbars = await Navbar.all();

    return response.json(navbars);
  }

  /**
   * Render a form to be used for creating a new navbar.
   * GET navbars/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new navbar.
   * POST navbars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    console.log(request.all());
    const navbar = await Navbar.create(request.all());
    return response.json({ navbar });
  }

  /**
   * Display a single navbar.
   * GET navbars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    let navbar = await Navbar.find(params.id);
    return response.json({ navbar: navbar });
  }

  /**
   * Render a form to update an existing navbar.
   * GET navbars/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
    let navbar = await Navbar.find(params.id);
    return response.json({ navbar: navbar });
  }

  /**
   * Update navbar details.
   * PUT or PATCH navbars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    let navbar = await Navbar.find(params.id);
    navbar.merge(request.all());
    await navbar.save();
    return response.json(navbar);
  }

  /**
   * Delete a navbar with id.
   * DELETE navbars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    let navbar = await Navbar.find(params.id);
    navbar.delete();
    return response.json(navbar);
  }
}

module.exports = NavbarController;
