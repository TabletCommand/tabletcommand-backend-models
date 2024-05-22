import * as uuid from "uuid";

import {
  currentDate,
  MongooseModule,
  retrieveCurrentUnixTime,
} from "../helpers";
import { Types } from "mongoose";

export type AssignmentType = {
  _id: Types.ObjectId
  uuid: string,
  active: boolean,
  userId: string,
  departmentId: string,
  isMandatory: boolean,
  modified: Date,
  // Deprecated
  modified_date: string,
  // Deprecated
  modified_unix_date: number,
  position: number,
  name: string,
  description: string,
  full_description: string,
}

export default async function AssignmentModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<AssignmentType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    active: {
      type: Boolean,
      default: true,
    },
    userId: String,
    departmentId: {
      type: String,
      required: true,
      index: true,
    },
    isMandatory: {
      type: Boolean,
      default: false,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    // Deprecated
    modified_date: {
      type: String,
    },
    // Deprecated
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    //
    position: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: "",
    },
    full_description: {
      type: String,
      default: "",
    },
  }, {
    collection: "massive_assignment",
  });
  modelSchema.set("autoIndex", false);
  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    // TODO-VERSION_CHANGE: Check if id is still send to json
    // transform(doc, ret: AssignmentType & { id: string }) {
    //   ret.id = ret._id.toString();
    // },
  });
  // modelSchema.virtual("id").get(function (this: MongooseDocument) {
  //   // tslint:disable-next-line: no-unsafe-any
  //   return this._id.toString();
  // });

  return mongoose.model<AssignmentType>("Assignment", modelSchema);
}
