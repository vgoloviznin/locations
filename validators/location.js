const Joi = require('joi');
const _ = require('lodash');

const schema = Joi.array().default([]).items(Joi.string().required());

module.exports = {
  closeLocations: async (data) => {
    try {
      const value = await Joi.validate(data, schema, { abortEarly: false, allowUnknown: true, stripUnknown: true });
      return {
        success: true,
        value: _.uniq(value)
      };
    } catch (err) {
      return { success: false, errors: err.details.map(val => val.message).join(';') };
    }
  }
};
