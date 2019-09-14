const _ = require('lodash');

module.exports = {
  pairs: (arr) => {
    if (!arr || arr.length === 0) {
      return [];
    }

    const duplicateFree = _.uniq(arr);
    const pairs = [];

    for (let i = 0; i < duplicateFree.length - 1; i += 1) {
      for (let j = i; j < duplicateFree.length - 1; j += 1) {
        pairs.push([duplicateFree[i], duplicateFree[j + 1]]);
      }
    }

    return pairs;
  }
};
