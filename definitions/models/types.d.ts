export declare type MongooseModule = typeof import("mongoose");
import { Model, Schema, Document } from "mongoose";
export declare type MongooseModel<T extends Document, QueryHelpers = {}> = Model<T, QueryHelpers>;
export declare type MongooseSchema<T = any> = Schema<T>;
export declare type MongooseDocument = Document;
export declare type UnionToIntersection<T> = (T extends unknown ? (p: T) => unknown : never) extends ((p: infer U) => unknown) ? U : never;
export declare type UnboxPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
