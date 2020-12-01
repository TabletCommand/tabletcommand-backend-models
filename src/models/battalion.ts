import * as uuid from "uuid";

import {
  MongooseModule,
  MongooseDocument,
  createSchema,
  DocumentTypeFromSchema,
  ModelFromSchema,
  createModel,
  FieldsOfDocument,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
  retrieveCurrentUnixTime
} from "../helpers";

export async function BattalionModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;
  const toJSONOpts = {
      virtuals: true,
      versionKey: false,
      transform(doc: DocumentTypeFromSchema<typeof modelSchema>, ret: FieldsOfDocument<DocumentTypeFromSchema<typeof modelSchema>>) {
        strictSchema(doc.schema, ret);
        ret.id = ret._id;
      },
  };

  const BattalionUnit = createSchema(Schema, {
      _id: {
          type: Types.ObjectId,
          auto: true,
      },
      name: {
          type: String,
          default: ""
      },
      friendly_id: {
          type: String,
          default: ""
      },
      local_id: {
        type: Number,
      },
      personnel: {
          type: Number,
          default: 0
      },
      position: {
          type: Number,
          default: 1,
      },
      active: {
          type: Boolean,
          default: true,
      },
      isMandatory: {
          type: Boolean,
          default: false,
      },
      modified_date: {
          type: String,
      },
      modified_unix_date: {
          type: Number,
          default: retrieveCurrentUnixTime,
      },
      uuid: {
          type: String,
          default: uuid.v4,
      },
      departmentId: {
          type: String,
      },
      userId: {
          type: String,
      },
      api_battalion_id: {
          type: String,
      },
      battalion_uuid: {
          type: String,
      },
      battalion_name: {
          type: String,
      },
      unit_type_id: {
          type: Number,
      }
  }, {});

  BattalionUnit.set("toJSON", toJSONOpts);

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    name: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: true
    },
    modified_date: {
      type: String,
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    isMandatory: {
      type: Boolean,
      default: false,
    },
    userId: String,
    uuid: {
      type: String,
      default: uuid.v4,
    },
    departmentId: {
      type: String,
      required: true,
      index: true,
    },
    agencyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agency",
      default: null,
    },
    position: {
      type: Number,
      default: 1,
    },
    units: {
      type: [BattalionUnit],
      default: []
    },
  }, {
    collection: "massive_battalion",
  });
  modelSchema.set("autoIndex", false);
  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc: ModelFromSchema<typeof modelSchema>, ret: DocumentTypeFromSchema<typeof modelSchema>) {
      strictSchema(doc.schema as typeof modelSchema, ret);
      ret.id = ret._id;
    },
  });

  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  const ignoreFields: ReadonlyArray<string> = [];

  function strictSchema(schema: typeof modelSchema, ret: Record<string, unknown>) {
    Object.keys(ret).forEach(function(element) {
      // Don't complain about the virtuals
      if (element === "id") {
        return;
      }

      if (ignoreFields.indexOf(element) !== -1) {
        delete ret[element];
        return;
      }
      const pathSchema = schema as unknown as { paths: Record<string, string> };
      if (pathSchema.paths[element] === undefined) {
        // console.log("backend-models.cad-incident: undefined schema.paths[element]:", element, pathSchema.paths[element]);
        delete ret[element];
      }
    });
  }

  return createModel(mongoose, "Battalion", modelSchema);
}

export interface Battalion extends ItemTypeFromTypeSchemaFunction<typeof BattalionModule> { }
export interface BattalionModel extends ModelTypeFromTypeSchemaFunction<Battalion> { }
export default BattalionModule as ReplaceModelReturnType<typeof BattalionModule, BattalionModel>;
