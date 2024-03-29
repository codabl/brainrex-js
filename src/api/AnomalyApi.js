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
import {Error} from '../model/Error';
import {PointTimeSeries} from '../model/PointTimeSeries';

/**
* Anomaly service.
* @module api/AnomalyApi
* @version 1.0.2
*/
export class AnomalyApi {

    /**
    * Constructs a new AnomalyApi. 
    * @alias module:api/AnomalyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the anomalyBatch operation.
     * @callback moduleapi/AnomalyApi~anomalyBatchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Boolean'>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detects anomalies in historical data in batches. This endpoint uses your entire dataset as input
     * The Anomaly Detect endpoint ingests time series data of all types, then monitors and detects abnormalities historical time series data. &lt;br&gt;&lt;br&gt; Our AI selects from several models, choosing the one that fits the given data best, and we give you the avality to customize the sensitivy of the model. Our model has been trained to recognize anomalies in popular blockchain networks e.g. Bitcoin, Ethereum, learning from past events.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/PointTimeSeries>} opts.body Time Series to be analyzed, with the following format.
     * @param {module:api/AnomalyApi~anomalyBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    anomalyBatch(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = ['Boolean'];

      return this.apiClient.callApi(
        '/anomaly/json/detect', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}