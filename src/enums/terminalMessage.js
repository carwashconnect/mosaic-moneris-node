"use strict";

const TerminalMessage = Object.freeze({

    fromResponseCode: (rbCode, options = {}) => {
        //Handle options
        if (!options || "object" != typeof options) options = {}
        const DefaultOptions = {
            isoCode: undefined,
            lang: "en",
            defaultResponseMessage: undefined
        }
        let tempOptions = { ...DefaultOptions, ...options }

        //Verify the rbCode
        if ("string" != typeof rbCode || rbCode.length != 3)
            throw new Error("Invalid RB code. Please ensure RB code is a three character string.")

        //Ensure the language option exists
        if ("object" != typeof TerminalMessage[tempOptions.lang])
            throw new Error("Invalid language selection.")

        let message = TerminalMessage[tempOptions.lang];
        switch (rbCode) {
            case "000":
            case "001":
            case "002":
            case "003":
            case "004":
            case "005":
            case "006":
            case "007":
            case "008":
            case "009":
            case "010":
            case "023":
            case "024":
            case "025":
            case "026":
            case "027":
            case "028":
            case "029":
                return message.Approved;
            case "050":
                return message.RetrySystemProblem;
            case "051":
                return message.ExpiredCard;
            case "052":
                return message.ExcessPinTries;
            case "053":
                return message.RetryEditError;
            case "054":
                return message.RetrySystemProblem;
            case "055":
            case "056":
                return message.CardNotSupported;
            case "057":
            case "058":
            case "059":
                return message.CardUseLimited;
            case "060":
                if (["39", "52"].includes(tempOptions.isoCode))
                    return message.NoChequingAccount
                return message.NoSavingsAccount
            case "061":
                return message.CardIsNotSetUp;
            case "062":
            case "063":
                return message.RetrySystemProblem;
            case "064":
                return message.RetryInvalidCard;
            case "065":
                return message.ExceedsCorrectionLimit;
            case "066":
                return message.RetryEditError;
            case "068":
                return message.RetrySystemProblem;
            case "069":
                return message.RetryEditError;
            case "070":
            case "071":
                return message.InvalidCard;
            case "072":
                return message.RetrySystemProblem;
            case "073":
                return message.InvalidCard;
            case "074":
                if (["89", "91"].includes(tempOptions.isoCode))
                    return message.UnableToAuthorize
                return message.IssuerNotOnline
            case "075":
                return message.RetryInvalidCard
            case "076":
                return message.InsuffientFunds;
            case "077":
                return message.LimitExceeded;
            case "078":
                return message.RetrySystemProblem;
            case "079":
            case "080":
            case "081":
                return message.LimitExceeded;
            case "082":
                return message.UsageExceeded;
            case "083":
                return message.LimitExceeded;
            case "084":
                return message.Declined;
            case "085":
                return message.CardNotSupported;
            case "086":
                return message.RetrySystemProblem;
            case "087":
                return message.OverRetailerLimit;
            case "088":
                return message.RetrySystemProblem;
            case "089":
                return message.CardUseLimited;
            case "090":
            case "091":
                return message.RetrySystemProblem;
            case "092":
                return message.OverRetailerLimit;
            case "093":
            case "094":
            case "095":
                return message.RetrySystemProblem;
            case "096":
                return message.RetryPinError;
            case "097":
                return message.RetryInvalidCard;
            case "098":
                return message.RetrySystemProblem;
            case "099":
                return message.RetryInvalidCard;
            case "100":
            case "101":
            case "102":
            case "103":
            case "104":
                return message.RetrySystemProblem;
            case "105":
                return message.InvalidCard;
            case "106":
                return message.OverRetailerLimit;
            case "107":
                return message.UsageExceeded;
            case "108":
                return message.RetrySystemProblem;
            case "109":
                return message.OverRetailerLimit;
            case "110":
                return message.UsageExceeded;
            case "111":
            case "112":
            case "113":
            case "115":
            case "121":
                return message.RetrySystemProblem;
            case "122":
            case "150":
            case "200":
                return message.RetryEditError;
            case "201":
                return message.RetryPinError;
            case "202":
                return message.RetryEditError;
            case "203":
                return message.RetrySystemProblem;
            case "204":
                return message.OverRetailerLimit;
            case "205":
                return message.RetryEditError;
            case "206":
                return message.CardIsNotSetUp;
            case "207":
            case "208":
            case "209":
            case "210":
                return message.RetryEditError;
            case "212":
                return message.IssuerNotOnline;
            case "251":
                return message.RetryEditError;
            case "252":
                return message.CardNotSupported;
            case "426":
                return message.CallAmex12;
            case "427":
                return message.InvalidMerchant;
            case "429":
                return message.RetryAccountError;
            case "430":
                return message.ExpiredCard;
            case "431":
                return message.CallAmex;
            case "434":
                return message.CallAmex03;
            case "435":
                return message.SystemDown;
            case "436":
                return message.CallAmex05;
            case "437":
            case "438":
                return message.Declined;
            case "439":
                return message.ServiceError;
            case "440":
                return message.CallAmex;
            case "441":
                return message.RetryAmountError;
            case "408":
                return message.Declined
            case "475":
                return message.InvalidExpiryDate;
            case "476":
                return message.Declined;
            case "477":
                return message.UnknownAccount;
            case "478":
                return message.HoldCardCall;
            case "479":
                return message.PickUpCard;
            case "480":
                return message.HoldCardCall;
            case "481":
                return message.Declined;
            case "482":
                return message.ExpiredCard;
            case "483":
                return message.ReferCallToIssuer;
            case "484":
            case "485":
            case "486":
            case "487":
            case "489":
            case "490":
                return message.Declined;
            case "492":
                return message.PleaseInsertCard;
            case "800":
            case "801":
                return message.RetryEditError;
            case "802":
                return message.InvalidClerkId;
            case "809":
                return message.RetryTransactionNotPermitted;
            case "810":
                return message.RetrySystemTimeout;
            case "811":
                return message.RetrySystemProblem;
            case "821":
            case "877":
                return message.RetryEditError;
            case "878":
                return message.RetryPinError;
            case "889":
            case "898":
                return message.RetryEditError;
            case "899":
                return message.HandleInternally;
            case "900":
                return message.ExcessPinTries;
            case "901":
                return message.ExpiredCard;
            case "902":
            case "903":
                return message.CardRestricted;
            case "904":
                return message.InvalidAmount;
            case "905":
                return message.MaxUseExceeded;
            case "906":
                return message.AccountProblem;
            case "907":
                return message.ExceedsLimit;
            case "908":
                return message.InvalidAmount;
            case "960":
                return message.InitializeMerchantIDError;
            case "961":
                return message.NoMatchOnPED;
            case "962":
                return message.FailedToInitialize;
            case "963":
                return message.NoMatchOnPollCode;
            case "964":
                return message.FailedToInitialize;
            case "965":
                return message.InvalidVersionNumber;
            case "966":
                return message.DuplicateTerminalName;
            case "970":
                return message.TableFull;
            case "983":
                return message.NoActivity;
            case "989":
                return message.SystemProblem;
            default:
                return tempOptions.defaultResponseMessage || null;
        }
    },

    en: {
        AccountProblem: "Account problem",
        Approved: "Approved",
        CallAmex03: "Call Amex 03",
        CallAmex05: "Call Amex 05",
        CallAmex12: "Call Amex 12",
        CallAmex: "Call Amex",
        CardIsNotSetUp: "Card is not set up",
        CardNotSupported: "Card not supported",
        CardRestricted: "Card restricted",
        CardUseLimited: "Card use limited",
        Declined: "Declined",
        DuplicateTerminalName: "Duplicate terminal name",
        ExceedsCorrectionLimit: "Exceeds correction limit",
        ExceedsLimit: "Exceeds limit",
        ExcessPinTries: "Excess PIN tries",
        ExpiredCard: "Expired card",
        FailedToInitialize: "Failed to initialize",
        HandleInternally: "Terminal must handle this internally, resend",
        HoldCardCall: "Hold card, call",
        InitializeMerchantIDError: "Failed to initialize merchant id",
        InsuffientFunds: "Insufficient funds",
        InvalidAmount: "Invalid amount",
        InvalidCard: "Invalid card",
        InvalidClerkId: "Invalid clerk id",
        InvalidExpiryDate: "Invalid expiry date",
        InvalidMerchant: "Invalid merchant",
        InvalidVersionNumber: "Invalid version number",
        IssuerNotOnline: "Issuer not online",
        LimitExceeded: "$ Limit exceeded",
        MaxUseExceeded: "Max use exceeded",
        NoActivity: "No activity",
        NoChequingAccount: "No chequing account, retry or cancel",
        NoMatchOnPED: "No match on PED",
        NoMatchOnPollCode: "No match on poll code",
        NoSavingsAccount: "No savings account, retry or cancel",
        OverRetailerLimit: "Over retailer limit",
        PickUpCard: "Pick up card",
        PleaseInsertCard: "Please insert card",
        ReferCallToIssuer: "Refer call to issuer",
        RetryAccountError: "Retry, account error",
        RetryAmountError: "Retry, amount error",
        RetryEditError: "Retry, edit error",
        RetryInvalidCard: "Retry, invalid card",
        RetryPinError: "Retry, PIN error",
        RetrySystemProblem: "Retry, system problem",
        RetrySystemTimeout: "Retry, system timeout",
        RetryTransactionNotPermitted: "Retry, transaction not permitted",
        ServiceError: "Service error",
        SystemDown: "System down",
        SystemProblem: "System problem",
        TableFull: "Table full",
        UnableToAuthorize: "Unable to authorize",
        UnknownAccount: "Unknown Account",
        UsageExceeded: "Usage exceeded",
    }

})

module.exports.TerminalMessage = TerminalMessage;