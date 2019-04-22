export type MongooseModule = typeof import("mongoose")
import { Model, Schema, Document  } from "mongoose";
export type MongooseModel<T extends Document, QueryHelpers = {}> = Model<T, QueryHelpers>;
export type MongooseSchema<T = any>  = Schema<T>;
export type MongooseDocument = Document;
export type UnionToIntersection<T> = (T extends unknown ? (p: T) => unknown : never) extends ((p: infer U) => unknown) ? U : never;
export type UnboxPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;