/**
 * AVS Result Codes
 * 
 * The responses that are received from AVS verifications are intended to provide added security and fraud prevention, but the response itself will not affect the issuer’s approval of a transaction. Upon receiving a response, the choice to proceed with a transaction is left entirely to the merchant. Please note that all responses coming back from these verification methods are not direct indicators of whether a merchant should complete any particular transaction. The responses should not be used as a strict guideline of which transaction will approve or decline.
 * 
 * The {@link https://developer.moneris.com/Documentation/NA/E-Commerce%20Solutions/E-Fraud/AVS Address Verification Service (AVS)} value refers to the cardholder’s street number, street name and zip/postal code as it would appear on their statement. The following tables outline the possible responses when passing in AVS information.
 * 
 * AVS verification is only applicable towards Visa, MasterCard, Discover, and American Express card transactions. This verification method is not applicable towards any other card type.
 * 
 * @see {@link https://developer.moneris.com/en/More/Testing/AVS%20Result%20Codes Moneris AVS Result Codes}
 */
interface AVSResultCode {

    /**
     * Visa - Street address matches but postal code does not, or the request does not include the postal code.
     * 
     * Mastercard - Address matches, postal code does not.
     * 
     * Discover - Address matches, five-digit postal code matches.
     * 
     * Amex / JCB - Billing address matches, zip code does not.
     */
    A: "A";

    /**
     * Visa - Street address matches. Postal code not verified due to incompatible formats. (Acquirer sent both street address and postal code.)
     */
    B: "B";

    /**
     * Visa - Street address and postal code not verified due to incompatible formats. (Acquirer sent both street address and postal code.)
     */
    C: "C";

    /**
     * Visa - Street addresses and postal codes match.
     * 
     * Amex / JCB - Customer name incorrect, postal code matches.
     */
    D: "D";

    /**
     * Amex / JCB - Customer name incorrect, billing address and postal code match.
     */
    E: "E";

    /**
     * Amex / JCB - Customer name incorrect, billing address matches.
     */
    F: "F";

    /**
     * Visa - Address information not verified for international transaction. Issuer is not an AVS participant, or AVS data was present in the request but issuer did not return an AVS result, or Visa performs AVS on behalf of the issuer and there was no address record on file for this account.
     * 
     * Discover - Address information not verified for international transaction.
     */
    G: "G";

    /**
     * Visa - 	Address information not verified.
     */
    I: "I";

    /**
     * Amex / JCB - Customer name matches
     */
    K: "K";

    /**
     * Amex / JCB - Customer name and postal code match.
     */
    L: "L";

    /**
     * Visa - 	Street address and postal code match.
     * 
     * Amex / JCB - Customer name, billing address, and postal code match.
     */
    M: "M";

    /**
     * Visa - No match. Acquirer sent postal/ZIP code only, or street address only, or both postal code and street address. Also used when acquirer requests AVS but sends no AVS data.
     * 
     * Mastercard - Neither address nor postal code match.
     * 
     * Discover - Neither address nor postal code match.
     * 
     * Amex / JCB - Billing address and postal code do not match.
     */
    N: "N";

    /**
     * Amex / JCB - Customer name and billing address match
     */
    O: "O";

    /**
     * Visa - Postal code match. Acquirer sent both postal code and street address but street address not verified due to incompatible formats.
     */
    P: "P";

    /**
     * Visa - 	Retry: system unavailable or timed out. Issuer ordinarily performs AVS but was unavailable. Available for U.S. issuers only.
     * 
     * Mastercard - Retry; system unable to process.
     * 
     * Amex / JCB - System unavailable; retry.
     */
    R: "R";

    /**
     * Visa - Not applicable. If present, replaced with G (for international) or U (for domestic) by V.I.P. Available for U.S. Issuers only.
     * 
     * Mastercard - AVS currently not supported.
     * 
     * Discover - AVS currently not supported.
     * 
     * Amex / JCB - AVS currently not supported.
     */
    S: "S";

    /**
     * Discover - Nine-digit zip code matches, address does not match.
     */
    T: "T";

    /**
     * Visa - Address not verified for domestic transaction. Issuer is not an AVS participant, or AVS data was present in the request but issuer did not return an AVS result, or Visa performs AVS on behalf of the issuer and there was no address record on file for this account.
     * 
     * Mastercard - No data from Issuer/Authorization system.
     * 
     * Discover - Retry; system unable to process.
     * 
     * Amex / JCB - Information is unavailable.
     */
    U: "U";

    /**
     * Visa - Not applicable. If present, replaced with ‘Z’ by Visa. Available for U.S. issuers only.
     * 
     * Mastercard - For U.S. Addresses, nine-digit postal code matches, address does not; for address outside the U.S. postal code matches, address does not.
     * 
     * Discover - No data from Issuer/Authorization system.
     * 
     * Amex / JCB - Customer name, billing address, and postal code are all correct.
     */
    W: "W";

    /**
     * Visa - 	Not applicable. If present, replaced with Y by V.I.P. Available for U.S. issuers only.
     * 
     * Mastercard - For U.S. addresses, nine-digit postal code and addresses matches; for addresses outside the U.S., postal code and address match.
     * 
     * Discover - Address matches, nine-digit postal code matches.
     */
    X: "X";

    /**
     * Visa - Street address and postal code match.
     * 
     * Mastercard - For U.S. addresses, five-digit postal code and address matches.
     * 
     * Discover - Address matches, postal code does not.
     * 
     * Amex / JCB - Billing address and postal code both match.
     */
    Y: "Y";

    /**
     * Visa - Postal/Zip matches; street address does not match or street address not included in request.
     * 
     * Mastercard - For U.S. addresses, five-digit postal code matches, address does not match.
     * 
     * Discover - Five-digit postal code matches, address does not.
     * 
     * Amex / JCB - Postal code matches, billing address does not.
     */
    Z: "Z";

}
export declare const AVSResultCode: AVSResultCode;