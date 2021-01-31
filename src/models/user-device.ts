import {
  createSchema,
  createModel,
  currentDate,
  MongooseModule,
  retrieveCurrentUnixTime,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
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
    ver: {
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
    t: {
      type: Date,
      default: currentDate,
    },
    drift: {
      type: Number,
      default: 0
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
    criticalAlertsEnabled: {
      type: Boolean,
      default: false,
    },
    session: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: true,
    },
  }, {
    _id: false,
  });

  const soundSchemaItem = createSchema(Schema, {
    sound: {
      type: String,
    },
    soundType: {
      type: String,
    },
    os: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
  });

  const soundSchema = createSchema(Schema, {
    ios: {
      type: soundSchemaItem,
    },
    android: {
      type: soundSchemaItem,
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
    notificationSounds: {
      type: soundSchema,
      default: {},
    },
    // When off-duty is true, the device active is flag is set to false
    offDuty: {
      type: Boolean,
      default: false,
    },
    criticalAlerts: {
      type: Boolean,
      default: false,
    }
  }, {
    collection: "massive_user_device",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "UserDevice", modelSchema);
}

export interface UserDevice extends ItemTypeFromTypeSchemaFunction<typeof UserDeviceModule> { }
export interface UserDeviceModel extends ModelTypeFromTypeSchemaFunction<UserDevice> { }
export default UserDeviceModule as ReplaceModelReturnType<typeof UserDeviceModule, UserDeviceModel>;
