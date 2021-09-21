"use strict";

const { CardType } = require('./enums/cardType')
//Result Codes
const { AVSResultCode } = require('./enums/avs')
const { CVDResultCode } = require('./enums/cvd')

module.exports.Moneris = {
    CardType,
    ResultCode: {
        AVS: AVSResultCode,
        CVD: CVDResultCode
    }
}