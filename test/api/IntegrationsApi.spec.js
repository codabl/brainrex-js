/*
 * BrainRex API
 * The Brainrex API is a collection of analytics tools and data integrations made for blockchain developers. In particular we offer Natural Language Processing and Anomaly detection algorithms that have been fine tune to understand text data and time series in the domain speficic setting of cryptocurrency and blockchain technology. This technology is intended to be use as building blocks to bigger applications, we offer examples on how to use them for Trading Backtesting and Smart Contract anomaly monitoring.
 *
 * OpenAPI spec version: 1.0.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.44
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
    factory(root.expect, root.BrainRexApi);
  }
}(this, function(expect, BrainRexApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BrainRexApi.IntegrationsApi();
  });

  describe('(package)', function() {
    describe('IntegrationsApi', function() {
      describe('cryptoGetCandleData', function() {
        it('should call cryptoGetCandleData successfully', function(done) {
          // TODO: uncomment, update parameter values for cryptoGetCandleData call and complete the assertions
          /*

          instance.cryptoGetCandleData(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BrainRexApi.CandleResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('cryptoGetExchangeAssets', function() {
        it('should call cryptoGetExchangeAssets successfully', function(done) {
          // TODO: uncomment, update parameter values for cryptoGetExchangeAssets call and complete the assertions
          /*

          instance.cryptoGetExchangeAssets(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BrainRexApi.ExchangeAssetsResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('cryptoGetOrderbooks', function() {
        it('should call cryptoGetOrderbooks successfully', function(done) {
          // TODO: uncomment, update parameter values for cryptoGetOrderbooks call and complete the assertions
          /*

          instance.cryptoGetOrderbooks(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BrainRexApi.OrderbookResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('cryptoGetSupportedExchanges', function() {
        it('should call cryptoGetSupportedExchanges successfully', function(done) {
          // TODO: uncomment cryptoGetSupportedExchanges call and complete the assertions
          /*

          instance.cryptoGetSupportedExchanges(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BrainRexApi.SupportedExchanges);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('cryptoGetTicker', function() {
        it('should call cryptoGetTicker successfully', function(done) {
          // TODO: uncomment, update parameter values for cryptoGetTicker call and complete the assertions
          /*

          instance.cryptoGetTicker(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BrainRexApi.TickerResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
