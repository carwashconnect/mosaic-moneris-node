import { CardType } from './enums/cardType'
import { TerminalMessage } from './enums/terminalMessage'
//Result Codes
import { AVSResultCode } from './enums/avs'
import { CVDResultCode } from './enums/cvd'

export declare namespace Moneris {
    export { CardType };
    export declare namespace ResultCode {
        export { AVSResultCode as AVS }
        export { CVDResultCode as CVD }
    }

    export { TerminalMessage }

} 
