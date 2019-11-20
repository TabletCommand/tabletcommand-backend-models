declare module 'mongoose-lean-virtuals' {
    const mongooseLeanVirtuals: (schema:import("mongoose").Schema) => import("mongoose").Schema
    export = mongooseLeanVirtuals;
}