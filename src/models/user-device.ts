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

  const UnitSetting = createSchema(Schema, {
    radioName: {
      type: String,
      default: "",
    },
    notificationType: {
      type: String,
      default: "",
    },
    notificationMode: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const IncidentSetting = createSchema(Schema, {
    incidentType: {
      type: String,
      default: "",
    },
    notificationType: {
      type: String,
      default: "",
    },
    notificationMode: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

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
    // Used by Android, to allow changing notification channel setup between releases
    // Android notification channels are immutable 
    // <https://developer.android.com/develop/ui/views/notifications/channels>
    channelId: {
      type: String,
      default: "",
    },
    bundleIdentifier: {
      type: String,
      default: "",
    },
    silentEnabled: {
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
    // Remove this after all the code is updated to use the device.offDuty flag
    active: {
      type: Boolean,
      default: true,
    },
    // Rename active to offDuty, to match the userDevice.offDuty flag
    offDuty: {
      type: Boolean,
      default: false,
    },
  }, {
    _id: false,
    id: false,
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
    id: false,
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
    id: false,
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
    notificationUnitSettings: {
      type: [UnitSetting],
      default: []
    },
    notificationIncidentSettings: {
      type: [IncidentSetting],
      default: []
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
    criticalAlertsVolume: {
      type: String,
      default: "MED",
    },
    // When running in a production env, this flag is ignored
    // When running in a non-production env (qa, staging), process this user only if this is true
    // This flag would be set by a cron or some other method
    allowInStaging: {
      type: Boolean,
      default: false,
    },
    // Copied from user.restrictedCommentsEnabled
    restrictedCommentsEnabled: {
      type: Boolean,
      default: false,
    },
  }, {
    collection: "massive_user_device",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "UserDevice", modelSchema);
}

export interface UserDevice extends ItemTypeFromTypeSchemaFunction<typeof UserDeviceModule> { }
export interface UserDeviceModel extends ModelTypeFromTypeSchemaFunction<UserDevice> { }
export default UserDeviceModule as ReplaceModelReturnType<typeof UserDeviceModule, UserDeviceModel>;
