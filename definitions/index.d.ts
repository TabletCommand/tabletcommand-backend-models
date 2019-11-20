/// <reference types="mongoose" />
export { ActionLog, ActionLogModel } from "./models/action-log";
export { CADIncident, CADIncidentModel } from "./models/cad-incident";
export { CADStatusMap, CADStatusMapModel } from "./models/cad-status-map";
export { CADStatus, CADStatusModel } from "./models/cad-status";
export { CADVehicle, CADVehicleModel } from "./models/cad-vehicle";
export { CADVehicleStatus, CADVehicleStatusModel } from "./models/cad-vehicle-status";
export { Department, DepartmentModel } from "./models/department";
export { DeviceMapping, DeviceMappingModel } from "./models/device-mapping";
export { IncidentEvent, IncidentEventModel } from "./models/incident-event";
export { IncidentTakeover, IncidentTakeoverModel } from "./models/incident-takeover";
export { Location, LocationModel } from "./models/location";
export { ManagedIncident, ManagedIncidentModel } from "./models/managed-incident";
export { RateLimit, RateLimitModel } from "./models/rate-limit";
export { Session, SessionModel } from "./models/session";
export { User, UserModel } from "./models/user";
export { UserRegistration, UserRegistrationModel } from "./models/user-registration";
export { UserDevice, UserDeviceModel } from "./models/user-device";
export { PersonnelImport, PersonnelImportModel } from "./models/personnel-import";
export * from "./helpers";
export declare function connect(url: string): Promise<{
    mongoose: typeof import("mongoose");
    connection: typeof import("mongoose");
    models: {
        ActionLog: import("./models/action-log").ActionLogModel;
        CADIncident: import("./models/cad-incident").CADIncidentModel;
        CADStatusMap: import("./models/cad-status-map").CADStatusMapModel;
        CADStatus: import("./models/cad-status").CADStatusModel;
        CADVehicle: import("./models/cad-vehicle").CADVehicleModel;
        CADVehicleStatus: import("./models/cad-vehicle-status").CADVehicleStatusModel;
        Department: import("./models/department").DepartmentModel;
        DeviceMapping: import("./models/device-mapping").DeviceMappingModel;
        IncidentEvent: import("./models/incident-event").IncidentEventModel;
        IncidentTakeover: import("./models/incident-takeover").IncidentTakeoverModel;
        Location: import("./models/location").LocationModel;
        ManagedIncident: import("./models/managed-incident").ManagedIncidentModel;
        RateLimit: import("./models/rate-limit").RateLimitModel;
        Session: import("./models/session").SessionModel;
        User: import("./models/user").UserModel;
        UserRegistration: import("./models/user-registration").UserRegistrationModel;
        UserDevice: import("./models/user-device").UserDeviceModel;
        PersonnelImport: import("./models/personnel-import").PersonnelImportModel;
    };
}>;
declare type UnboxPromise<T extends Promise<unknown>> = T extends Promise<infer U> ? U : never;
declare module 'mongoose-lean-virtuals' {
    class MongooseLeanVirtuals {
        mongooseLeanVirtuals(schema:import("mongoose").Schema): import("mongoose").Schema
    }
    export = MongooseLeanVirtuals;
}
export declare type BackendModels = UnboxPromise<ReturnType<typeof connect>>["models"];
export default connect;
//# sourceMappingURL=index.d.ts.map