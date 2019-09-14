require('dotenv').config();

const sinon = require('sinon');
const { assert } = require('chai');
const { location } = require('../../controllers');
const { locationValidator } = require('../../validators');
const { locationService } = require('../../services');
const { errors } = require('../../middleware');
const fakes = require('../data/fakes');

describe('Location controller test', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('- closeLocations test', () => {
    it('- calls validator properly', async () => {
      const ctx = { request: { query: { locations: fakes.arrayForPairs } } };
      const validatorStub = sinon.stub(locationValidator, 'closeLocations');
      validatorStub.returns(fakes.falseValidation);
      sinon.stub(errors, 'badRequest');

      await location.closeLocations(ctx);

      sinon.assert.calledOnce(validatorStub);
      sinon.assert.calledWithExactly(validatorStub, fakes.arrayForPairs);
    });

    it('- calls badRequest proeperly on failed validation', async () => {
      const ctx = { request: { query: { locations: fakes.arrayForPairs } } };
      const validatorStub = sinon.stub(locationValidator, 'closeLocations');
      validatorStub.returns(fakes.falseValidation);
      const badRequestStub = sinon.stub(errors, 'badRequest');

      await location.closeLocations(ctx);

      sinon.assert.calledOnce(badRequestStub);
      sinon.assert.calledWithExactly(badRequestStub, ctx, fakes.falseValidation.error);
    });

    it('- calls service properly', async () => {
      const ctx = { request: { query: { locations: fakes.arrayForPairs } } };
      const validatorStub = sinon.stub(locationValidator, 'closeLocations');
      validatorStub.returns(fakes.trueValidation);
      const serviceStub = sinon.stub(locationService, 'closeLocations');
      serviceStub.returns(fakes.pairs);

      await location.closeLocations(ctx);

      sinon.assert.calledOnce(serviceStub);
      sinon.assert.calledWithExactly(serviceStub, fakes.trueValidation.value);
    });

    it('- returns response properly', async () => {
      const ctx = { request: { query: { locations: fakes.arrayForPairs } } };
      const validatorStub = sinon.stub(locationValidator, 'closeLocations');
      validatorStub.returns(fakes.trueValidation);
      const serviceStub = sinon.stub(locationService, 'closeLocations');
      serviceStub.returns(fakes.pairs);

      await location.closeLocations(ctx);

      assert.deepEqual(ctx.body, fakes.pairs);
    });
  });
});
