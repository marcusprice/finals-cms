const slugify = require('slugify');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        beforeCreate(model) {
            model.slug = slugify(model.title);
        },
        beforeUpdate(params, model) {
            model.slug = slugify(model.title);
        }
      },
};