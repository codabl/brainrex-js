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
import {ApiClient} from "../ApiClient";
import {CandleRequest} from '../model/CandleRequest';
import {CandleResponse} from '../model/CandleResponse';
import {Exchange} from '../model/Exchange';
import {ExchangeAssetsResponse} from '../model/ExchangeAssetsResponse';
import {OrderbookRequest} from '../model/OrderbookRequest';
import {OrderbookResponse} from '../model/OrderbookResponse';
import {SupportedExchanges} from '../model/SupportedExchanges';
import {TickerResponse} from '../model/TickerResponse';

/**
* Integrations service.
* @module api/IntegrationsApi
* @version 1.0.2
*/
export class IntegrationsApi {

    /**
    * Constructs a new IntegrationsApi. 
    * @alias module:api/IntegrationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the cryptoGetCandleData operation.
     * @callback moduleapi/IntegrationsApi~cryptoGetCandleDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CandleResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Downloads candle format market data
     * Returns a list of candle data from specified market and data range
     * @param {module:model/CandleRequest} body The Get candles end point return market data in Open High Close Volume format. In order to use this endpoint you need to enter your API keys to your data provider in the console
     * @param {module:api/IntegrationsApi~cryptoGetCandleDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    cryptoGetCandleData(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling cryptoGetCandleData");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CandleResponse;

      return this.apiClient.callApi(
        '/crypto/get_candles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the cryptoGetExchangeAssets operation.
     * @callback moduleapi/IntegrationsApi~cryptoGetExchangeAssetsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExchangeAssetsResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets all coin pairs traded in specified exchange
     * This endpoint returns all the Available currency pairs
     * @param {module:model/Exchange} body Name of the cryptocurrency exchange
     * @param {module:api/IntegrationsApi~cryptoGetExchangeAssetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    cryptoGetExchangeAssets(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling cryptoGetExchangeAssets");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ExchangeAssetsResponse;

      return this.apiClient.callApi(
        '/crypto/get_exchange_assets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the cryptoGetOrderbooks operation.
     * @callback moduleapi/IntegrationsApi~cryptoGetOrderbooksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderbookResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the current state of the orderbook.
     * This endpoint returns the current state of the ordebook with a limit set by you. The maximun orderbook depth is 25.
     * @param {module:model/OrderbookRequest} body Exchange, trading pair and date rage for data
     * @param {module:api/IntegrationsApi~cryptoGetOrderbooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    cryptoGetOrderbooks(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling cryptoGetOrderbooks");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OrderbookResponse;

      return this.apiClient.callApi(
        '/crypto/get_orderbooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the cryptoGetSupportedExchanges operation.
     * @callback moduleapi/IntegrationsApi~cryptoGetSupportedExchangesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SupportedExchanges{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets all cryptocurrency exchanges supported by the Brainrex API
     * Returns a list of candle data from specified market and data range
     * @param {module:api/IntegrationsApi~cryptoGetSupportedExchangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    cryptoGetSupportedExchanges(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SupportedExchanges;

      return this.apiClient.callApi(
        '/crypto/get_supported_exchanges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the cryptoGetTicker operation.
     * @callback moduleapi/IntegrationsApi~cryptoGetTickerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TickerResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Downloads candle format market data
     * Returns a list of candle data from specified market and data range
     * @param {module:model/Exchange} body Get ticker data from specified crypto exchange
     * @param {module:api/IntegrationsApi~cryptoGetTickerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    cryptoGetTicker(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling cryptoGetTicker");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TickerResponse;

      return this.apiClient.callApi(
        '/crypto/get_ticker', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}