declare module "mongoose-lean-virtuals" {
  import { Schema } from "mongoose";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mongooseLeanVirtuals: <T>(schema: Schema<T>, opts?: any) => void;
  export default mongooseLeanVirtuals;
}
