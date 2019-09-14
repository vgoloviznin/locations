const sinon = require('sinon');
const { assert } = require('chai');
const { array } = require('../../helpers');
const _ = require('lodash');
const fakes = require('../data/fakes');

describe('Array helper test', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('- pairs test', () => {
    it('- returns empty array if none is provided', () => {
      const res = array.pairs();

      assert.deepEqual(res, []);
    });

    it('- returns empty array if empty array is provided', () => {
      const res = array.pairs([]);

      assert.deepEqual(res, []);
    });

    it('- calls uniq from lodash', () => {
      const spy = sinon.spy(_, 'uniq');

      array.pairs(fakes.arrayForPairs);

      sinon.assert.calledOnce(spy);
      sinon.assert.calledWithExactly(spy, fakes.arrayForPairs);
    });

    it('- creates pairs from the given array', () => {
      const results = array.pairs(fakes.arrayForPairs);

      assert.deepEqual(results, fakes.pairs);
    });
  });
});
