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
 * The OHCLV model module.
 * @module model/OHCLV
 * @version 1.0.2
 */
export class OHCLV {
  /**
   * Constructs a new <code>OHCLV</code>.
   * @alias module:model/OHCLV
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OHCLV</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OHCLV} obj Optional instance to populate.
   * @return {module:model/OHCLV} The populated <code>OHCLV</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OHCLV();
      if (data.hasOwnProperty('close'))
        obj.close = ApiClient.convertToType(data['close'], 'Number');
      if (data.hasOwnProperty('high'))
        obj.high = ApiClient.convertToType(data['high'], 'Number');
      if (data.hasOwnProperty('end_date'))
        obj.endDate = ApiClient.convertToType(data['end_date'], 'Date');
      if (data.hasOwnProperty('open'))
        obj.open = ApiClient.convertToType(data['open'], 'Number');
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Date');
      if (data.hasOwnProperty('volume'))
        obj.volume = ApiClient.convertToType(data['volume'], 'Number');
      if (data.hasOwnProperty('usdVolume'))
        obj.usdVolume = ApiClient.convertToType(data['usdVolume'], 'Number');
      if (data.hasOwnProperty('btcVolume'))
        obj.btcVolume = ApiClient.convertToType(data['btcVolume'], 'Number');
      if (data.hasOwnProperty('quoteVolume'))
        obj.quoteVolume = ApiClient.convertToType(data['quoteVolume'], 'Number');
    }
    return obj;
  }
}

/**
 * Closing price quote of the time frame with two decimal points
 * @member {Number} close
 */
OHCLV.prototype.close = undefined;

/**
 * Highest price of the time frame with two decimal points
 * @member {Number} high
 */
OHCLV.prototype.high = undefined;

/**
 * End date in YYYY/MM/DD
 * @member {Date} endDate
 */
OHCLV.prototype.endDate = undefined;

/**
 * Opening price quote of the time frame with two decimal points
 * @member {Number} open
 */
OHCLV.prototype.open = undefined;

/**
 * Timestamp of the beggining of the frame
 * @member {Date} time
 */
OHCLV.prototype.time = undefined;

/**
 * Volume of currency exchanged in the time frame with two decimal points
 * @member {Number} volume
 */
OHCLV.prototype.volume = undefined;

/**
 * Volume of currency exchanged in dollars the time frame with two decimal points
 * @member {Number} usdVolume
 */
OHCLV.prototype.usdVolume = undefined;

/**
 * Volume of currency exchanged in dollars the time frame with two decimal points
 * @member {Number} btcVolume
 */
OHCLV.prototype.btcVolume = undefined;

/**
 * Volume of currency exchanged in dollars the time frame with two decimal points
 * @member {Number} quoteVolume
 */
OHCLV.prototype.quoteVolume = undefined;

