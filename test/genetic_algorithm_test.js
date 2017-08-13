const assert = require('chai').assert;
const algorithm = require('../public/javascripts/genetic-algorithm').generateRandomSource;

describe('algorithm', function() {
  it('should return a random string', function(){
    var result = algorith(5);

    expect(result).to.be.a('string');
  });
});
