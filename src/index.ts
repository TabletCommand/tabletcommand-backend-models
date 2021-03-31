import { MongooseModule } from "./helpers";

async function wireModels(mongoose: MongooseModule) {
  type ModelType<TModule extends Record<"default", (m: MongooseModule) => unknown>> = ReturnType<TModule["default"]>;
  async function getModel<TModule extends Record<"default", (m: MongooseModule) => unknown>>(m: Promise<TModule>): Promise<ModelType<TModule>> {
    const module = await m;
    return module.default(mongoose) as Promise<ModelType<TModule>>;
  }

  return {
    ActionLog: await getModel(import("./models/action-log")),
    Agency: await getModel(import("./models/agency")),
    Assignment: await getModel(import("./models/assignment")),
    Battalion: await getModel(import("./models/battalion")),
    BeaconLog: await getModel(import("./models/beacon-log")),
    CADIncident: await getModel(import("./models/cad-incident")),
    CADIncidentStream: await getModel(import("./models/cad-incident-stream")),
    CADStatus: await getModel(import("./models/cad-status")),
    CADStatusMap: await getModel(import("./models/cad-status-map")),
    CADVehicle: await getModel(import("./models/cad-vehicle")),
    CADVehicleStatus: await getModel(import("./models/cad-vehicle-status")),
    CADVehicleStatusHistory: await getModel(import("./models/cad-vehicle-status-history")),
    ChartIncident: await getModel(import("./models/chart-incident")),
    ChartManagedIncident: await getModel(import("./models/chart-managed-incident")),
    ChartUser: await getModel(import("./models/chart-user")),
    Checklist: await getModel(import("./models/checklist")),
    ChecklistItem: await getModel(import("./models/checklist-item")),
    Department: await getModel(import("./models/department")),
    DeviceMapping: await getModel(import("./models/device-mapping")),
    Esri: await getModel(import("./models/esri")),
    GSTMapping: await getModel(import("./models/gst-mapping")),
    IncidentEvent: await getModel(import("./models/incident-event")),
    IncidentNotified: await getModel(import("./models/incident-notified")),
    IncidentTakeover: await getModel(import("./models/incident-takeover")),
    Location: await getModel(import("./models/location")),
    MailLog: await getModel(import("./models/mail-log")),
    Message: await getModel(import("./models/message")),
    Monitor: await getModel(import("./models/monitor")),
    ManagedIncident: await getModel(import("./models/managed-incident")),
    PersonnelImport: await getModel(import("./models/personnel-import")),
    RateLimit: await getModel(import("./models/rate-limit")),
    RemoteLog: await getModel(import("./models/remote-log")),
    SMTPUnhandled: await getModel(import("./models/smtp-unhandled")),
    Session: await getModel(import("./models/session")),
    Template: await getModel(import("./models/template")),
    User: await getModel(import("./models/user")),
    UserDevice: await getModel(import("./models/user-device")),
    UserRegistration: await getModel(import("./models/user-registration")),
  };
}

export { ActionLog, ActionLogModel } from "./models/action-log";
export { Agency, AgencyModel } from "./models/agency";
export { Assignment, AssignmentModel } from "./models/assignment";
export { Battalion, BattalionModel } from "./models/battalion";
export { BeaconLog, BeaconLogModel } from "./models/beacon-log";
export { CADIncident, CADIncidentModel } from "./models/cad-incident";
export { CADIncidentStream, CADIncidentStreamModel } from "./models/cad-incident-stream";
export { CADStatus, CADStatusModel } from "./models/cad-status";
export { CADStatusMap, CADStatusMapModel } from "./models/cad-status-map";
export { CADVehicle, CADVehicleModel } from "./models/cad-vehicle";
export { CADVehicleStatus, CADVehicleStatusModel } from "./models/cad-vehicle-status";
export { CADVehicleStatusHistory, CADVehicleStatusHistoryModel } from "./models/cad-vehicle-status-history";
export { ChartIncident, ChartIncidentModel } from "./models/chart-incident";
export { ChartManagedIncident, ChartManagedIncidentModel } from "./models/chart-managed-incident";
export { ChartUser, ChartUserModel } from "./models/chart-user";
export { Checklist, ChecklistModel } from "./models/checklist";
export { ChecklistItem, ChecklistItemModel } from "./models/checklist-item";
export { Department, DepartmentModel } from "./models/department";
export { DeviceMapping, DeviceMappingModel } from "./models/device-mapping";
export { Esri, EsriModel } from "./models/esri";
export { GSTMapping, GSTMappingModel } from "./models/gst-mapping";
export { IncidentEvent, IncidentEventModel } from "./models/incident-event";
export { IncidentNotified, IncidentNotifiedModel } from "./models/incident-notified";
export { IncidentTakeover, IncidentTakeoverModel } from "./models/incident-takeover";
export { Location, LocationModel } from "./models/location";
export { MailLog, MailLogModel } from "./models/mail-log";
export { ManagedIncident, ManagedIncidentModel } from "./models/managed-incident";
export { Message, MessageModel } from "./models/message";
export { Monitor, MonitorModel } from "./models/monitor";
export { PersonnelImport, PersonnelImportModel } from "./models/personnel-import";
export { RateLimit, RateLimitModel } from "./models/rate-limit";
export { RemoteLog, RemoteLogModel } from "./models/remote-log";
export { SMTPUnhandled, SMTPUnhandledModel } from "./models/smtp-unhandled";
export { Session, SessionModel } from "./models/session";
export { Template, TemplateModel } from "./models/template";
export { User, UserModel } from "./models/user";
export { UserDevice, UserDeviceModel } from "./models/user-device";
export { UserRegistration, UserRegistrationModel } from "./models/user-registration";

export * from "./helpers";

export async function connect(url: string) {
  const mongoose = await import("mongoose");
  mongoose.Promise = await import("bluebird");

  const models = await wireModels(mongoose);
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const connection = await mongoose.connect(url, opts);

  return { mongoose, connection, models };
}

type UnboxPromise<T extends Promise<unknown>> = T extends Promise<infer U> ? U : never;
export type BackendModels = UnboxPromise<ReturnType<typeof connect>>["models"];
export default connect;
