const { locationValidator } = require('../validators');
const { badRequest } = require('../middleware');
const { location } = require('../services');


module.exports = {
  closeLocations: async (ctx) => {
    const { request: { query: { locations } } } = ctx;

    const validationResult = await locationValidator.closeLocations(locations);

    if (!validationResult.success) {
      return badRequest(ctx, validationResult.error);
    }

    const response = await location.closeLocations(validationResult.value);

    ctx.body = response;
  }
};
