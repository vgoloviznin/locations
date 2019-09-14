const sinon = require('sinon');
const { array } = require('../../helpers');
const { assert } = require('chai');
const { location } = require('../../controllers');
const fakes = require('../data/fakes');

describe('Location controller test', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('- closeLocations test', () => {
    it('- calls pairs method', () => {
      const ctx = { request: { query: { locations: fakes.arrayForPairs } } };
      const spy = sinon.spy(array, 'pairs');

      location.closeLocations(ctx);

      sinon.assert.calledOnce(spy);
      sinon.assert.calledWithExactly(spy, fakes.arrayForPairs);
    });

    it('- returns pairs', () => {
      const ctx = { request: { query: { locations: fakes.arrayForPairs } } };
      const stub = sinon.stub(array, 'pairs');
      stub.returns(fakes.pairs);

      location.closeLocations(ctx);

      assert.deepEqual(ctx.body, fakes.pairs);
    });
  });
});
