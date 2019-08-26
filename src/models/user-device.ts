import {
  createSchema,
  createModel,
  ModelItemType,
  MongooseModule,
  UnboxPromise,
  retrieveCurrentUnixTime,
} from "../helpers";

export async function UserDeviceModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const deviceSchema = createSchema(Schema, {
    token: {
      type: String,
      default: "",
    },
    env: {
      type: String,
      default: "",
    },
    ua: {
      type: String,
      default: "",
    },
    time: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    bundleIdentifier: {
      type: String,
      default: "",
    },
    silentEnabled: {
      type: Boolean,
      default: false,
    },
    richEnabled: {
      type: Boolean,
      default: false,
    },
    session: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
  });

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    userId: {
      type: String,
    },
    departmentId: {
      type: String,
    },
    devices: {
      type: [deviceSchema],
      default: [],
    },
    notificationCount: {
      type: Number,
      default: 0,
    },
    notificationUnits: {
      type: [String],
      default: [],
    },
    notificationIncidentTypes: {
      type: [String],
      default: [],
    },
  }, {
    collection: "massive_user_device",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "UserDevice", modelSchema);
}

export default UserDeviceModule;
export type UserDeviceModel = UnboxPromise<ReturnType<typeof UserDeviceModule>>;
export type UserDevice = ModelItemType<UserDeviceModel>;
