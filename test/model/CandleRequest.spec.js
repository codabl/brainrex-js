/*
 * Brainrex API
 * Provides anomaly detection and natural language processing technlogies to blockchain developers.
 *
 * OpenAPI spec version: 1.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Brainrex);
  }
}(this, function(expect, Brainrex) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CandleRequest', function() {
      beforeEach(function() {
        instance = new Brainrex.CandleRequest();
      });

      it('should create an instance of CandleRequest', function() {
        // TODO: update the code to test CandleRequest
        expect(instance).to.be.a(Brainrex.CandleRequest);
      });

      it('should have the property baseTradingSymbol (base name: "base_trading_symbol")', function() {
        // TODO: update the code to test the property baseTradingSymbol
        expect(instance).to.have.property('baseTradingSymbol');
        // expect(instance.baseTradingSymbol).to.be(expectedValueLiteral);
      });

      it('should have the property exchange (base name: "exchange")', function() {
        // TODO: update the code to test the property exchange
        expect(instance).to.have.property('exchange');
        // expect(instance.exchange).to.be(expectedValueLiteral);
      });

      it('should have the property interval (base name: "interval")', function() {
        // TODO: update the code to test the property interval
        expect(instance).to.have.property('interval');
        // expect(instance.interval).to.be(expectedValueLiteral);
      });

      it('should have the property quoteTradingSymbol (base name: "quote_trading_symbol")', function() {
        // TODO: update the code to test the property quoteTradingSymbol
        expect(instance).to.have.property('quoteTradingSymbol');
        // expect(instance.quoteTradingSymbol).to.be(expectedValueLiteral);
      });

    });
  });

}));