import {
  MongooseModule,
  createSchema,
  createModel,
  currentDate,
  retrieveCurrentUnixTime,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export async function BeaconLogModule(mongoose: MongooseModule) {
  const { Types } = mongoose;

  const modelSchema = createSchema({
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
      index: true,
    },
    userId: {
      type: String,
      default: "",
    },
    object: {
      type: Object,
    },
    createdAt: {
      type: Date,
      default: currentDate,
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
  }, {
    collection: "massive_beacon_log",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "BeaconLog", modelSchema);
}

export interface BeaconLog extends ItemTypeFromTypeSchemaFunction<typeof BeaconLogModule> { }
export interface BeaconLogModel extends ModelTypeFromTypeSchemaFunction<BeaconLog> { }
export default BeaconLogModule as ReplaceModelReturnType<typeof BeaconLogModule, BeaconLogModel>;
