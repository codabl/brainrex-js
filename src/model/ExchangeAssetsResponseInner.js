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
 * The ExchangeAssetsResponseInner model module.
 * @module model/ExchangeAssetsResponseInner
 * @version 1.0.2
 */
export class ExchangeAssetsResponseInner {
  /**
   * Constructs a new <code>ExchangeAssetsResponseInner</code>.
   * @alias module:model/ExchangeAssetsResponseInner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ExchangeAssetsResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExchangeAssetsResponseInner} obj Optional instance to populate.
   * @return {module:model/ExchangeAssetsResponseInner} The populated <code>ExchangeAssetsResponseInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ExchangeAssetsResponseInner();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('tradinSym'))
        obj.tradinSym = ApiClient.convertToType(data['tradinSym'], 'String');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
    }
    return obj;
  }
}

/**
 * Highest price of the time frame with two decimal points
 * @member {String} name
 */
ExchangeAssetsResponseInner.prototype.name = undefined;

/**
 * Percetange change in the last 24 hours
 * @member {Number} id
 */
ExchangeAssetsResponseInner.prototype.id = undefined;

/**
 * Volume of currency exchanged in the time frame with two decimal points
 * @member {String} tradinSym
 */
ExchangeAssetsResponseInner.prototype.tradinSym = undefined;

/**
 * Volume of currency exchanged in the time frame with two decimal points
 * @member {String} symbol
 */
ExchangeAssetsResponseInner.prototype.symbol = undefined;

