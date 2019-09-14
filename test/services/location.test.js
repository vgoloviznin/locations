require('dotenv').config();

const sinon = require('sinon');
const { assert } = require('chai');
const { locationService } = require('../../services');
const { maps } = require('../../helpers');
const fakes = require('../data/fakes');

describe('Location service test', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('- closeLocations test', () => {
    it('- calls distances properly', async () => {
      const mapsStub = sinon.stub(maps, 'distances');
      mapsStub.returns(fakes.errorMapResponse);
      const joinedPairs = fakes.arrayForPairs.join('|');

      await locationService.closeLocations(fakes.arrayForPairs);

      sinon.assert.calledOnce(mapsStub);
      sinon.assert.calledWithExactly(mapsStub, joinedPairs);
    });

    it('- returns locations with their closest pairs', async () => {
      const mapsStub = sinon.stub(maps, 'distances');
      mapsStub.returns(fakes.mapResponse);

      const result = await locationService.closeLocations(fakes.arrayForPairs);

      assert.deepEqual(result, fakes.locationsWithClosest);
    });
  });
});
