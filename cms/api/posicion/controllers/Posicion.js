'use strict';

/**
 * Posicion.js controller
 *
 * @description: A set of functions called "actions" for managing `Posicion`.
 */

module.exports = {

  /**
   * Retrieve posicion records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.posicion.search(ctx.query);
    } else {
      return strapi.services.posicion.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a posicion record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.posicion.fetch(ctx.params);
  },

  /**
   * Count posicion records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.posicion.count(ctx.query);
  },

  /**
   * Create a/an posicion record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.posicion.add(ctx.request.body);
  },

  /**
   * Update a/an posicion record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.posicion.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an posicion record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.posicion.remove(ctx.params);
  }
};
