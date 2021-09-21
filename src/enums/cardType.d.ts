/** The Moneris supported card types. */
interface CardType {
    AmericanExpress: "AX";
    /** Canada only. */
    Debit: "D";
    /** Canada only. */
    Discover: "NO";
    /** Canada only. */
    JCB: "C1";
    MasterCard: "M";
    /** Canada only. */
    Novus: "NO";
    /** Canada only. */
    Sears: "SE";
    Visa: "V";
}

export declare const CardType: CardType;