(function () {
  'use strict';
  describe("add suite", function () {
    var add = require('../../src/Add.js');
    it("should add two numbers", function () {
      expect(add(1, 1)).toEqual(2);
    });
  });
}());
