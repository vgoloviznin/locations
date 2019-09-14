const { assert } = require('chai');
const { location } = require('../../controllers');

describe('Location controller test', () => {
  describe('- closeLocations test', () => {
    it('- returns test array', async () => {
      const toReturn = ['test'];
      const ctx = {};

      await location.closeLocations(ctx);

      assert.deepEqual(ctx.body, toReturn);
    });
  });
});
