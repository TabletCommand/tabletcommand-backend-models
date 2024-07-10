/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { ConnectOptions } from "mongoose";
import { MongooseModule } from "./helpers";
import { LocationKindType, LocationSource } from "./constants";
export { LocationKindType, LocationSource, };
export { ActionLog, ActionLogModel } from "./models/action-log";
export { Agency, AgencyModel } from "./models/agency";
export { ArcGISGroup, ArcGISGroupModel } from "./models/arcgis-group";
export { Assignment, AssignmentModel } from "./models/assignment";
export { Battalion, BattalionModel } from "./models/battalion";
export { BeaconLog, BeaconLogModel } from "./models/beacon-log";
export { CADIncident, CADIncidentModel } from "./models/cad-incident";
export { CADIncidentBlock, CADIncidentBlockModel } from "./models/cad-incident-block";
export { CADIncidentStream, CADIncidentStreamModel } from "./models/cad-incident-stream";
export { CADSimulation, CADSimulationModel } from "./models/cad-simulation";
export { CADStatus, CADStatusModel } from "./models/cad-status";
export { CADStatusMap, CADStatusMapModel } from "./models/cad-status-map";
export { CADVehicle, CADVehicleModel } from "./models/cad-vehicle";
export { CADVehicleStatus, CADVehicleStatusModel } from "./models/cad-vehicle-status";
export { CADVehicleStatusHistory, CADVehicleStatusHistoryModel } from "./models/cad-vehicle-status-history";
export { ChartDeviceStats, ChartDeviceStatsModel } from "./models/chart-device-stats";
export { ChartIncident, ChartIncidentModel } from "./models/chart-incident";
export { ChartManagedIncident, ChartManagedIncidentModel } from "./models/chart-managed-incident";
export { ChartUser, ChartUserModel } from "./models/chart-user";
export { Checklist, ChecklistModel } from "./models/checklist";
export { ChecklistItem, ChecklistItemModel } from "./models/checklist-item";
export { CSVImport, CSVImportModel } from "./models/csv-import";
export { Department, DepartmentModel } from "./models/department";
export { DeviceMapping, DeviceMappingModel } from "./models/device-mapping";
export { Esri, EsriModel } from "./models/esri";
export { GSTMapping, GSTMappingModel } from "./models/gst-mapping";
export { IncidentEvent, IncidentEventModel } from "./models/incident-event";
export { IncidentNotified, IncidentNotifiedModel } from "./models/incident-notified";
export { IncidentTakeover, IncidentTakeoverModel } from "./models/incident-takeover";
export { JobLog, JobLogModel } from "./models/job-log";
export { Location, LocationModel } from "./models/location";
export { MailLog, MailLogModel } from "./models/mail-log";
export { ManagedIncident, ManagedIncidentModel } from "./models/managed-incident";
export { Mark43IncidentRetry, Mark43IncidentRetryModel } from "./models/mark43-incident-retry";
export { Message, MessageModel } from "./models/message";
export { Monitor, MonitorModel } from "./models/monitor";
export { PersonnelImport, PersonnelImportModel } from "./models/personnel-import";
export { PersonnelKnown, PersonnelKnownModel } from "./models/personnel-known";
export { PersonnelRoster, PersonnelRosterModel } from "./models/personnel-roster";
export { RateLimit, RateLimitModel } from "./models/rate-limit";
export { ReleaseNote, ReleaseNoteModel } from "./models/release-note";
export { RemoteLog, RemoteLogModel } from "./models/remote-log";
export { RemoteLogStream, RemoteLogStreamModel } from "./models/remote-log-stream";
export { Session, SessionModel } from "./models/session";
export { SMTPUnhandled, SMTPUnhandledModel } from "./models/smtp-unhandled";
export { Template, TemplateModel } from "./models/template";
export { User, UserModel } from "./models/user";
export { UserDevice, UserDeviceModel } from "./models/user-device";
export { UserRegistration, UserRegistrationModel } from "./models/user-registration";
export { ValidationReport, ValidationReportModel } from "./models/validation-report";
export * from "./helpers";
export declare function connect(url: string, overwriteOpts?: ConnectOptions): Promise<{
    mongoose: typeof import("mongoose");
    connection: typeof import("mongoose");
    models: {
        ActionLog: import("mongoose").Model<import("./models/action-log").ActionLog, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/action-log").ActionLog> & import("./models/action-log").ActionLog & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        Agency: import("mongoose").Model<import("./models/agency").Agency, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/agency").Agency> & import("./models/agency").Agency & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        ArcGISGroup: import("mongoose").Model<import("./models/arcgis-group").ArcGISGroup, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/arcgis-group").ArcGISGroup> & import("./models/arcgis-group").ArcGISGroup & {
            _id: import("mongoose").Types.ObjectId;
        }, any>;
        Assignment: import("mongoose").Model<import("./models/assignment").Assignment, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/assignment").Assignment> & import("./models/assignment").Assignment & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        Battalion: import("mongoose").Model<import("./models/battalion").Battalion, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/battalion").Battalion> & import("./models/battalion").Battalion & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        BeaconLog: import("mongoose").Model<import("./models/beacon-log").BeaconLog, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/beacon-log").BeaconLog> & import("./models/beacon-log").BeaconLog & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        CADIncident: import("mongoose").Model<import("./models/schema/cad-incident").CADIncidentSchemaType, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/schema/cad-incident").CADIncidentSchemaType> & import("./models/schema/cad-incident").CADIncidentSchemaType & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        CADIncidentBlock: import("mongoose").Model<import("./models/cad-incident-block").CADIncidentBlock, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/cad-incident-block").CADIncidentBlock> & import("./models/cad-incident-block").CADIncidentBlock & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        CADIncidentStream: import("mongoose").Model<import("./models/cad-incident-stream").CADIncidentStream, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/cad-incident-stream").CADIncidentStream> & import("./models/cad-incident-stream").CADIncidentStream & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        CADSimulation: import("mongoose").Model<import("./models/cad-simulation").CADSimulation, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/cad-simulation").CADSimulation> & import("./models/cad-simulation").CADSimulation & {
            _id: import("mongoose").Types.ObjectId;
        }, any>;
        CADStatus: import("mongoose").Model<import("./models/cad-status").CADStatus, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/cad-status").CADStatus> & import("./models/cad-status").CADStatus & {
            _id: import("mongoose").Types.ObjectId;
        }, any>;
        CADStatusMap: import("mongoose").Model<import("./models/cad-status-map").CADStatusMap, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/cad-status-map").CADStatusMap> & import("./models/cad-status-map").CADStatusMap & {
            _id: import("mongoose").Types.ObjectId;
        }, any>;
        CADVehicle: import("mongoose").Model<import("./models/cad-vehicle").CADVehicle, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/cad-vehicle").CADVehicle> & import("./models/cad-vehicle").CADVehicle & {
            _id: import("mongoose").Types.ObjectId;
        }, any>;
        CADVehicleStatus: import("mongoose").Model<import("./models/cad-vehicle-status").CADVehicleStatus, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/cad-vehicle-status").CADVehicleStatus> & import("./models/cad-vehicle-status").CADVehicleStatus & {
            _id: import("mongoose").Types.ObjectId;
        }, any>;
        CADVehicleStatusHistory: import("mongoose").Model<import("./models/cad-vehicle-status-history").CADVehicleStatusHistory, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/cad-vehicle-status-history").CADVehicleStatusHistory> & import("./models/cad-vehicle-status-history").CADVehicleStatusHistory & {
            _id: import("mongoose").Types.ObjectId;
        }, any>;
        ChartDeviceStats: import("mongoose").Model<import("./models/chart-device-stats").ChartDeviceStats, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/chart-device-stats").ChartDeviceStats> & import("./models/chart-device-stats").ChartDeviceStats & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        ChartIncident: import("mongoose").Model<import("./models/chart-incident").ChartIncident, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/chart-incident").ChartIncident> & import("./models/chart-incident").ChartIncident & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        ChartManagedIncident: import("mongoose").Model<import("./models/chart-managed-incident").ChartManagedIncident, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/chart-managed-incident").ChartManagedIncident> & import("./models/chart-managed-incident").ChartManagedIncident & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        ChartUser: import("mongoose").Model<import("./models/chart-user").ChartUser, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/chart-user").ChartUser> & import("./models/chart-user").ChartUser & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        Checklist: import("mongoose").Model<import("./models/checklist").Checklist, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/checklist").Checklist> & import("./models/checklist").Checklist & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        ChecklistItem: import("mongoose").Model<import("./models/checklist-item").ChecklistItem, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/checklist-item").ChecklistItem> & import("./models/checklist-item").ChecklistItem & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        CSVImport: import("mongoose").Model<import("./models/csv-import").CSVImport, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/csv-import").CSVImport> & import("./models/csv-import").CSVImport & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        Department: import("mongoose").Model<import("./models/department").Department, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/department").Department> & import("./models/department").Department & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        DeviceMapping: import("mongoose").Model<import("./models/device-mapping").DeviceMapping, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/device-mapping").DeviceMapping> & import("./models/device-mapping").DeviceMapping & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        Esri: import("mongoose").Model<import("./models/esri").Esri, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/esri").Esri> & import("./models/esri").Esri & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        GSTMapping: import("mongoose").Model<import("./models/gst-mapping").GSTMapping, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/gst-mapping").GSTMapping> & import("./models/gst-mapping").GSTMapping & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        IncidentEvent: import("mongoose").Model<import("./models/incident-event").IncidentEvent, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/incident-event").IncidentEvent> & import("./models/incident-event").IncidentEvent & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        IncidentNotified: import("mongoose").Model<import("./models/incident-notified").IncidentNotified, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/incident-notified").IncidentNotified> & import("./models/incident-notified").IncidentNotified & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        IncidentTakeover: import("mongoose").Model<import("./models/incident-takeover").IncidentTakeover, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/incident-takeover").IncidentTakeover> & import("./models/incident-takeover").IncidentTakeover & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        JobLog: import("mongoose").Model<import("./models/job-log").JobLog, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/job-log").JobLog> & import("./models/job-log").JobLog & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        Location: import("mongoose").Model<import("./models/location").Location, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/location").Location> & import("./models/location").Location & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        MailLog: import("mongoose").Model<import("./models/mail-log").MailLog, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/mail-log").MailLog> & import("./models/mail-log").MailLog & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        ManagedIncident: import("mongoose").Model<import("./models/managed-incident").ManagedIncident, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/managed-incident").ManagedIncident> & import("./models/managed-incident").ManagedIncident & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        Mark43IncidentRetry: import("mongoose").Model<import("./models/mark43-incident-retry").Mark43IncidentRetry, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/mark43-incident-retry").Mark43IncidentRetry> & import("./models/mark43-incident-retry").Mark43IncidentRetry & {
            _id: import("mongoose").Types.ObjectId;
        }, any>;
        Message: import("mongoose").Model<import("./models/message").Message, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/message").Message> & import("./models/message").Message & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        Monitor: import("mongoose").Model<import("./models/monitor").Monitor, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/monitor").Monitor> & import("./models/monitor").Monitor & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        PersonnelImport: import("mongoose").Model<import("./models/personnel-import").PersonnelImport, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/personnel-import").PersonnelImport> & import("./models/personnel-import").PersonnelImport & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        PersonnelKnown: import("mongoose").Model<import("./models/personnel-known").PersonnelKnown, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/personnel-known").PersonnelKnown> & import("./models/personnel-known").PersonnelKnown & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        PersonnelRoster: import("mongoose").Model<import("./models/personnel-roster").PersonnelRoster, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/personnel-roster").PersonnelRoster> & import("./models/personnel-roster").PersonnelRoster & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        RateLimit: import("mongoose").Model<import("./models/rate-limit").RateLimit, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/rate-limit").RateLimit> & import("./models/rate-limit").RateLimit & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        ReleaseNote: import("mongoose").Model<import("./models/release-note").ReleaseNote, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/release-note").ReleaseNote> & import("./models/release-note").ReleaseNote & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        RemoteLog: import("mongoose").Model<import("./models/remote-log").RemoteLog, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/remote-log").RemoteLog> & import("./models/remote-log").RemoteLog & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        RemoteLogStream: import("mongoose").Model<import("./models/remote-log-stream").RemoteLogStream, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/remote-log-stream").RemoteLogStream> & import("./models/remote-log-stream").RemoteLogStream & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        Session: import("mongoose").Model<import("./models/session").Session, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/session").Session> & import("./models/session").Session & Required<{
            _id: string;
        }>, any>;
        SMTPUnhandled: import("mongoose").Model<import("./models/smtp-unhandled").SMTPUnhandled, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/smtp-unhandled").SMTPUnhandled> & import("./models/smtp-unhandled").SMTPUnhandled & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        Template: import("mongoose").Model<import("./models/template").Template, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/template").Template> & import("./models/template").Template & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        User: import("mongoose").Model<import("./models/user").User, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/user").User> & import("./models/user").User & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        UserDevice: import("mongoose").Model<import("./models/user-device").UserDevice, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/user-device").UserDevice> & import("./models/user-device").UserDevice & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
        UserRegistration: import("mongoose").Model<import("./models/user-registration").UserRegistration, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/user-registration").UserRegistration> & import("./models/user-registration").UserRegistration & {
            _id: import("mongoose").Types.ObjectId;
        }, any>;
        ValidationReport: import("mongoose").Model<import("./models/validation-report").ValidationReport, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models/validation-report").ValidationReport> & import("./models/validation-report").ValidationReport & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, any>;
    };
}>;
export declare function getMongoose(): Promise<typeof import("mongoose")>;
declare type UnboxPromise<T extends Promise<unknown>> = T extends Promise<infer U> ? U : never;
export declare type BackendModels = UnboxPromise<ReturnType<typeof connect>>["models"];
export declare type MongooseTypes = MongooseModule;
export default connect;
//# sourceMappingURL=index.d.ts.map