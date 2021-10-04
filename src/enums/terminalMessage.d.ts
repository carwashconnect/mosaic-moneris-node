/**
 * Terminal Messages
 * 
 * The Terminal Message text is a suggestion only and is not mandated by either the Bank or Interac. It is strongly advised that discretion be used with sensitive messages such as INSUFFICIENT FUNDS if the terminal display is visible to persons other than the cardholder and the clerk. Replacement by a more general message such as DECLINED is recommended.
 * 
 * @see {@link https://developer.moneris.com/More/Testing/Response%20Codes Moneris Response Codes}
 */
interface TerminalMessage {

    [languageCode: string]: TerminalMessageLang

    /**
     * Identifies and returns a customer friendly terminal message.
     * @param rbCode The Moneris provided response code.
     * @param options Additional options.
     * @returns The identified response message, the default response message, or null.
     * @memberof TerminalMessage
     */
    fromResponseCode: (rbCode: string, options?: FromResponseCodeOptions) => string | null;
}

interface FromResponseCodeOptions {
    /** The Moneris ISO response code. Used in some cases to return a more accurate response message. */
    isoCode?: string;

    /** The desired language for the response messages. 
     * @default "en"
     */
    lang?: string;

    /** The reponse message to return if a terminal message cannot be identified. */
    defaultResponseMessage?: string;
}

/** Terminal messages per language. */
interface TerminalMessageLang {
    AccountProblem: string;
    Approved: string;
    CallAmex03: string;
    CallAmex05: string;
    CallAmex12: string;
    CallAmex: string;
    CardIsNotSetUp: string;
    CardNotSupported: string;
    CardRestricted: string;
    CardUseLimited: string;
    Declined: string;
    DuplicateTerminalName: string;
    ExceedsCorrectionLimit: string;
    ExceedsLimit: string;
    ExcessPinTries: string;
    ExpiredCard: string;
    FailedToInitialize: string;
    HandleInternally: string;
    HoldCardCall: string;
    InitializeMerchantIDError: string;
    InsuffientFunds: string;
    InvalidAmount: string;
    InvalidCard: string;
    InvalidClerkId: string;
    InvalidExpiryDate: string;
    InvalidMerchant: string;
    InvalidVersionNumber: string;
    IssuerNotOnline: string;
    LimitExceeded: string;
    MaxUseExceeded: string;
    NoActivity: string;
    NoChequingAccount: string;
    NoMatchOnPED: string;
    NoMatchOnPollCode: string;
    NoSavingsAccount: string;
    OverRetailerLimit: string;
    PickUpCard: string;
    PleaseInsertCard: string;
    ReferCallToIssuer: string;
    RetryAccountError: string;
    RetryAmountError: string;
    RetryEditError: string;
    RetryInvalidCard: string;
    RetryPinError: string;
    RetrySystemProblem: string;
    RetrySystemTimeout: string;
    RetryTransactionNotPermitted: string;
    ServiceError: string;
    SystemDown: string;
    SystemProblem: string;
    TableFull: string;
    UnableToAuthorize: string;
    UnknownAccount: string;
    UsageExceeded: string;
}

export declare const TerminalMessage: TerminalMessage;