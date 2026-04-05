export declare const RecipeSource: {
    readonly user: "user";
    readonly external: "external";
};
export type RecipeSource = (typeof RecipeSource)[keyof typeof RecipeSource];
export declare const SubmissionStatus: {
    readonly pending: "pending";
    readonly processed: "processed";
};
export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus];
export declare const Visibility: {
    readonly private: "private";
    readonly public: "public";
};
export type Visibility = (typeof Visibility)[keyof typeof Visibility];
export declare const NotificationType: {
    readonly follow: "follow";
    readonly like: "like";
    readonly comment: "comment";
    readonly system: "system";
    readonly ai_result: "ai_result";
    readonly fraud_alert: "fraud_alert";
    readonly badge: "badge";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
//# sourceMappingURL=enums.d.ts.map