"use strict";

//Result Codes
const { AVSResultCode } = require('./enums/avs')
const { CVDResultCode } = require('./enums/cvd')

module.exports.Moneris = {
    ResultCode: {
        AVS: AVSResultCode,
        CVD: CVDResultCode
    }
}