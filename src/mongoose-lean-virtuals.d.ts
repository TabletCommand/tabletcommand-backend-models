declare module "mongoose-lean-virtuals" {
  import { Schema } from "mongoose";
  const mongooseLeanVirtuals: (schema: Schema) => Schema;
  export = mongooseLeanVirtuals;
}
