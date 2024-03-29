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
import {ApiClient} from '../ApiClient';

/**
 * The TickerResponseInner model module.
 * @module model/TickerResponseInner
 * @version 1.0.2
 */
export class TickerResponseInner {
  /**
   * Constructs a new <code>TickerResponseInner</code>.
   * @alias module:model/TickerResponseInner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TickerResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TickerResponseInner} obj Optional instance to populate.
   * @return {module:model/TickerResponseInner} The populated <code>TickerResponseInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TickerResponseInner();
      if (data.hasOwnProperty('lastUpdated'))
        obj.lastUpdated = ApiClient.convertToType(data['lastUpdated'], 'Date');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('percentChange24hUsd'))
        obj.percentChange24hUsd = ApiClient.convertToType(data['percentChange24hUsd'], 'Number');
      if (data.hasOwnProperty('priceBtc'))
        obj.priceBtc = ApiClient.convertToType(data['priceBtc'], 'Number');
      if (data.hasOwnProperty('priceUsd'))
        obj.priceUsd = ApiClient.convertToType(data['priceUsd'], 'Number');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
    }
    return obj;
  }
}

/**
 * Closing price quote of the time frame with two decimal points
 * @member {Date} lastUpdated
 */
TickerResponseInner.prototype.lastUpdated = undefined;

/**
 * Highest price of the time frame with two decimal points
 * @member {String} name
 */
TickerResponseInner.prototype.name = undefined;

/**
 * Percetange change in the last 24 hours
 * @member {Number} percentChange24hUsd
 */
TickerResponseInner.prototype.percentChange24hUsd = undefined;

/**
 * Opening price quote of the time frame with two decimal points
 * @member {Number} priceBtc
 */
TickerResponseInner.prototype.priceBtc = undefined;

/**
 * Timestamp of the beggining of the frame
 * @member {Number} priceUsd
 */
TickerResponseInner.prototype.priceUsd = undefined;

/**
 * Volume of currency exchanged in the time frame with two decimal points
 * @member {String} symbol
 */
TickerResponseInner.prototype.symbol = undefined;

