import {
  createModel,
  createSchema,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";

export function SAMLSchema(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const SAMLMetadataConfiguration = createSchema(Schema, {
    // ArcGIS Item id
    selector: {
      type: String,
      required: true,
      unique: true,
    },
    idp: {
      type: String,
      default: "",
    },
    sp: {
      type: String,
      default: "",
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

    departmentId: {
      type: Types.ObjectId,
      ref: "Department",
      required: true,
      unique: true,
    },

    // https://mongoosejs.com/docs/api/schema.html#Schema.reserved
    metadata: {
      type: [SAMLMetadataConfiguration],
      default: [],
    },
  }, {
    autoIndex: false,
    collection: "massive_saml",
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
    }
  });

  return modelSchema;
}

export async function SAMLModule(mongoose: MongooseModule) {
  const modelSchema = SAMLSchema(mongoose);
  return createModel(mongoose, "SAML", modelSchema);
}

export interface SAML extends ItemTypeFromTypeSchemaFunction<typeof SAMLModule> { }
export interface SAMLModel extends ModelTypeFromTypeSchemaFunction<SAML> { }
export default SAMLModule as ReplaceModelReturnType<typeof SAMLModule, SAMLModel>;
