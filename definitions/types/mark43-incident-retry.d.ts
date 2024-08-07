export interface RelatedEventType {
    mark43Id: number;
    cadAgencyEventNumber: string;
}
export interface RetryPayloadType {
    departmentId: number;
    activityType: string;
    relatedEvent: RelatedEventType;
}
export interface Mark43IncidentRetryType {
    departmentId: string;
    created: Date;
    modified: Date;
    active: boolean;
    attempts: number;
    retries: number;
    notificationSent: boolean;
    retryPayload: RetryPayloadType;
    mark43IncidentId: number;
    incidentNumber: string;
}
//# sourceMappingURL=mark43-incident-retry.d.ts.map