declare module "mongoose-lean-virtuals" {
  import { Schema } from "mongoose";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function mongooseLeanVirtuals<T>(schema: Schema<T>, opts?: any): void;
}
