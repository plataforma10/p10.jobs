'use strict';

/**
 * Public.js controller
 *
 * @description: A set of functions called "actions" for managing `Public`.
 */

module.exports = {

  /**
   * Retrieve public records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.public.search(ctx.query);
    } else {
      return strapi.services.public.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a public record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.public.fetch(ctx.params);
  },

  /**
   * Count public records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.public.count(ctx.query);
  },

  /**
   * Create a/an public record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.public.add(ctx.request.body);
  },

  /**
   * Update a/an public record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.public.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an public record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.public.remove(ctx.params);
  }
};
