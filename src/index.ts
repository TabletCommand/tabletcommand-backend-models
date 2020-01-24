"use strict";

import { MongooseModule } from "./helpers";

async function wireModels(mongoose: MongooseModule) {
  type ModelType<TModule extends Record<"default", (m: MongooseModule) => unknown>> = ReturnType<TModule["default"]>;
  async function getModel<TModule extends Record<"default", (m: MongooseModule) => unknown>>(m: Promise<TModule>): Promise<ModelType<TModule>> {
    const module = await m;
    return module.default(mongoose) as Promise<ModelType<TModule>>;
  }

  return {
    ActionLog: await getModel(import("./models/action-log")),
    BeaconLog: await getModel(import("./models/beacon-log")),
    CADIncident: await getModel(import("./models/cad-incident")),
    CADStatusMap: await getModel(import("./models/cad-status-map")),
    CADStatus: await getModel(import("./models/cad-status")),
    CADVehicle: await getModel(import("./models/cad-vehicle")),
    CADVehicleStatus: await getModel(import("./models/cad-vehicle-status")),
    Department: await getModel(import("./models/department")),
    DeviceMapping: await getModel(import("./models/device-mapping")),
    IncidentEvent: await getModel(import("./models/incident-event")),
    IncidentTakeover: await getModel(import("./models/incident-takeover")),
    Location: await getModel(import("./models/location")),
    ManagedIncident: await getModel(import("./models/managed-incident")),
    RateLimit: await getModel(import("./models/rate-limit")),
    Session: await getModel(import("./models/session")),
    User: await getModel(import("./models/user")),
    UserRegistration: await getModel(import("./models/user-registration")),
    UserDevice: await getModel(import("./models/user-device")),
    PersonnelImport: await getModel(import("./models/personnel-import")),
  };
}

export { ActionLog, ActionLogModel } from "./models/action-log";
export { BeaconLog, BeaconLogModel} from "./models/beacon-log";
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
