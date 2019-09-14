const { locationValidator } = require('../validators');
const { errors } = require('../middleware');
const { locationService } = require('../services');


module.exports = {
  closeLocations: async (ctx) => {
    const { request: { query: { locations } } } = ctx;

    const validationResult = await locationValidator.closeLocations(locations);

    if (!validationResult.success) {
      return errors.badRequest(ctx, validationResult.error);
    }

    const response = await locationService.closeLocations(validationResult.value);

    ctx.body = response;
  }
};
