"use strict";

const { CardType } = require('./enums/cardType')

//Reponse Messages
const { TerminalMessage } = require('./enums/terminalMessage')

//Result Codes
const { AVSResultCode } = require('./enums/avs')
const { CVDResultCode } = require('./enums/cvd')

module.exports.Moneris = {
    CardType,
    ResultCode: {
        AVS: AVSResultCode,
        CVD: CVDResultCode
    },
    TerminalMessage
}