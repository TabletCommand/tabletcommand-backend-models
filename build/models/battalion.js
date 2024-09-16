"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattalionSchema = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
function BattalionSchema(mongoose) {
    const { Schema } = mongoose;
    const BattalionUnit = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
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
            default: helpers_1.retrieveCurrentUnixTime,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        // Deprecated: remove these from there, but include them in the output.
        api_battalion_id: {
            type: String,
        },
        battalion_uuid: {
            type: String,
        },
        battalion_name: {
            type: String,
        },
        agencyId: {
            type: Schema.Types.ObjectId,
            ref: "Agency",
            default: null,
        },
    }, {
        autoIndex: false,
        toJSON: {
            virtuals: true,
            versionKey: false,
            transform(doc, ret) {
                strictSchema(doc.schema, ret);
            },
        }
    });
    BattalionUnit.virtual("id").get(function () {
        // tslint:disable-next-line: no-unsafe-any
        return this._id.toString();
    });
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
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
            default: helpers_1.retrieveCurrentUnixTime,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        isMandatory: {
            type: Boolean,
            default: false,
        },
        userId: {
            type: String,
            default: "",
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        departmentId: {
            type: String,
            required: true,
        },
        agencyId: {
            type: Schema.Types.ObjectId,
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
        autoIndex: false,
        toJSON: {
            virtuals: true,
            versionKey: false,
            transform(doc, ret) {
                strictSchema(doc.schema, ret);
            },
        }
    });
    modelSchema.virtual("id").get(function () {
        // tslint:disable-next-line: no-unsafe-any
        return this._id.toString();
    });
    modelSchema.index({
        departmentId: 1,
        isMandatory: 1,
    }, {
        name: "departmentId_1_isMandatory_1",
    });
    modelSchema.index({
        departmentId: 1,
        modified_date: 1,
    }, {
        name: "departmentId_1_modified_date_1",
    });
    modelSchema.index({
        departmentId: 1,
        userId: 1,
    }, {
        name: "departmentId_1_userId_1",
    });
    modelSchema.index({
        uuid: 1,
    }, {
        name: "uuid_1",
    });
    function strictSchema(schema, ret) {
        Object.keys(ret).forEach(function (element) {
            // Don't complain about the virtuals
            if (element === "id") {
                return;
            }
            const pathSchema = schema;
            if (pathSchema.paths[element] === undefined) {
                // console.log("backend-models.battalion: undefined schema.paths[element]:", element, pathSchema.paths[element]);
                delete ret[element];
            }
        });
    }
    return modelSchema;
}
exports.BattalionSchema = BattalionSchema;
async function BattalionModule(mongoose) {
    const modelSchema = BattalionSchema(mongoose);
    return mongoose.model("Battalion", modelSchema, "massive_battalion", { overwriteModels: true });
}
exports.default = BattalionModule;
//# sourceMappingURL=battalion.js.map