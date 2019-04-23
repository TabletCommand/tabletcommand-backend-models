"use strict";

import { MongooseModule, UnionToIntersection } from "./models/types";

async function wireModels(mongoose: MongooseModule) {
  type ModelType<TModule extends Record<'default', (m: MongooseModule)=> any>> = ReturnType<TModule['default']>;
  async function getModel<TModule extends Record<'default', (m: MongooseModule)=> any>>(m: Promise<TModule>): Promise<ModelType<TModule>>  {
    const module = await m;
    return module.default(mongoose);
  }
  
  return {
    ActionLog: await getModel(import("./models/action-log")),
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
  }
}

export { ActionLog } from './models/action-log';
export { CADIncident } from './models/cad-incident';
export { CADStatusMap } from './models/cad-status-map';
export { CADStatus } from './models/cad-status';
export { CADVehicle } from './models/cad-vehicle';
export { CADVehicleStatus } from './models/cad-vehicle-status';
export { Department } from './models/department';
export { DeviceMapping } from './models/device-mapping';
export { IncidentEvent } from './models/incident-event';
export { IncidentTakeover } from './models/incident-takeover';
export { Location } from './models/location';
export { ManagedIncident } from './models/managed-incident';
export { RateLimit } from './models/rate-limit';
export { Session } from './models/session';
export { User} from './models/user';
export { UserRegistration } from './models/user-registration';

export async function connect(url: string) {
  const mongoose = await import("mongoose");
  mongoose.Promise = await import("bluebird");

  const models = await wireModels(mongoose);
  const opts = {
    useNewUrlParser: true
  };
  const connection = await mongoose.connect(url, opts);

  return { mongoose, connection, models };
}

type UnboxPromise<T extends Promise<any>> = T extends Promise<infer U>? U : never;
export type BackendModels =  UnboxPromise<ReturnType<typeof connect>>['models']