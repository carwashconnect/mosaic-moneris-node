/**
 * CVD Result Codes
 * 
 * The responses that are received from CVD verifications are intended to provide added security and fraud prevention, but the response itself will not affect the issuer’s approval of a transaction. Upon receiving a response, the choice to proceed with a transaction is left entirely to the merchant. Please note that all responses coming back from these verification methods are not direct indicators of whether a merchant should complete any particular transaction. The responses should not be used as a strict guideline of which transaction will approve or decline.
 * 
 * The {@link https://developer.moneris.com/Documentation/NA/E-Commerce%20Solutions/E-Fraud/CVD Card Validation Digits (CVD)} value refers to the numbers appearing on the back of the credit card which are not imprinted on the front. The exception to this is with American Express cards where this value is indeed printed on the front. The CVD response is an alphanumeric 2 byte variable. The first byte is the numeric CVD indicator sent in the request; the second byte would be the response code. The following is a list of all possible responses once a CVD value has been passed in.
 * 
 * Note: Please be advised that CVD results will NOT be returned in the response for UnionPay.
 * 
 * @see {@link https://developer.moneris.com/More/Testing/CVD%20Result%20Codes Moneris CVD Result Codes}
 */
interface CVDResultCode {

    /** Invalid security code for AmEx/JCB. */
    D: "D";

    /** Match */
    M: "M";

    /** No Match */
    N: "N";

    /** Not Processed */
    P: "P";

    /** CVD should be on the card, but Merchant has indicated that CVD is not present. */
    S: "S";

    /** Issuer is not a CVD participant. */
    U: "U";

    /** Match for AmEx/JCB only. */
    Y: "Y";

    /** Invalid response code. */
    Other: "Other"

}

export declare const CVDResultCode: CVDResultCode;