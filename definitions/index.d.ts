/// <reference types="mongoose" />
export { ActionLog, ActionLogModel } from "./models/action-log";
export { Agency, AgencyModel } from "./models/agency";
export { Assignment, AssignmentModel } from "./models/assignment";
export { Battalion, BattalionModel } from "./models/battalion";
export { BeaconLog, BeaconLogModel } from "./models/beacon-log";
export { CADIncident, CADIncidentModel } from "./models/cad-incident";
export { CADStatus, CADStatusModel } from "./models/cad-status";
export { CADStatusMap, CADStatusMapModel } from "./models/cad-status-map";
export { CADVehicle, CADVehicleModel } from "./models/cad-vehicle";
export { CADVehicleStatus, CADVehicleStatusModel } from "./models/cad-vehicle-status";
export { CADVehicleStatusHistory, CADVehicleStatusHistoryModel } from "./models/cad-vehicle-status-history";
export { Checklist, ChecklistModel } from "./models/checklist";
export { ChecklistItem, ChecklistItemModel } from "./models/checklist-item";
export { Department, DepartmentModel } from "./models/department";
export { DeviceMapping, DeviceMappingModel } from "./models/device-mapping";
export { Esri, EsriModel } from "./models/esri";
export { IncidentEvent, IncidentEventModel } from "./models/incident-event";
export { IncidentNotified, IncidentNotifiedModel } from "./models/incident-notified";
export { IncidentTakeover, IncidentTakeoverModel } from "./models/incident-takeover";
export { Location, LocationModel } from "./models/location";
export { MailLog, MailLogModel } from "./models/mail-log";
export { ManagedIncident, ManagedIncidentModel } from "./models/managed-incident";
export { PersonnelImport, PersonnelImportModel } from "./models/personnel-import";
export { RateLimit, RateLimitModel } from "./models/rate-limit";
export { Session, SessionModel } from "./models/session";
export { Template, TemplateModel } from "./models/template";
export { User, UserModel } from "./models/user";
export { UserDevice, UserDeviceModel } from "./models/user-device";
export { UserRegistration, UserRegistrationModel } from "./models/user-registration";
export * from "./helpers";
export declare function connect(url: string): Promise<{
    mongoose: typeof import("mongoose");
    connection: typeof import("mongoose");
    models: {
        ActionLog: import("./models/action-log").ActionLogModel;
        Agency: import("./models/agency").AgencyModel;
        Assignment: import("./models/assignment").AssignmentModel;
        Battalion: import("./models/battalion").BattalionModel;
        BeaconLog: import("./models/beacon-log").BeaconLogModel;
        CADIncident: import("./models/cad-incident").CADIncidentModel;
        CADStatus: import("./models/cad-status").CADStatusModel;
        CADStatusMap: import("./models/cad-status-map").CADStatusMapModel;
        CADVehicle: import("./models/cad-vehicle").CADVehicleModel;
        CADVehicleStatus: import("./models/cad-vehicle-status").CADVehicleStatusModel;
        CADVehicleStatusHistory: import("./models/cad-vehicle-status-history").CADVehicleStatusHistoryModel;
        Checklist: import("./models/checklist").ChecklistModel;
        ChecklistItem: import("./models/checklist-item").ChecklistItemModel;
        Department: import("./models/department").DepartmentModel;
        DeviceMapping: import("./models/device-mapping").DeviceMappingModel;
        Esri: import("./models/esri").EsriModel;
        IncidentEvent: import("./models/incident-event").IncidentEventModel;
        IncidentNotified: import("./models/incident-notified").IncidentNotifiedModel;
        IncidentTakeover: import("./models/incident-takeover").IncidentTakeoverModel;
        Location: import("./models/location").LocationModel;
        MailLog: import("./models/mail-log").MailLogModel;
        ManagedIncident: import("./models/managed-incident").ManagedIncidentModel;
        PersonnelImport: import("./models/personnel-import").PersonnelImportModel;
        RateLimit: import("./models/rate-limit").RateLimitModel;
        Session: import("./models/session").SessionModel;
        Template: import("./models/template").TemplateModel;
        User: import("./models/user").UserModel;
        UserDevice: import("./models/user-device").UserDeviceModel;
        UserRegistration: import("./models/user-registration").UserRegistrationModel;
    };
}>;
declare type UnboxPromise<T extends Promise<unknown>> = T extends Promise<infer U> ? U : never;
export declare type BackendModels = UnboxPromise<ReturnType<typeof connect>>["models"];
export default connect;
//# sourceMappingURL=index.d.ts.map