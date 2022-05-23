"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function AssignmentModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        position: {
            type: Number,
            default: 1,
        },
        userId: String,
        uuid: {
            type: String,
            default: uuid.v4,
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
        departmentId: {
            type: String,
            required: true,
            index: true,
        },
        active: {
            type: Boolean,
            default: true,
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
        transform(doc, ret) {
            ret.id = ret._id.toString();
        },
    });
    return (0, helpers_1.createModel)(mongoose, "Assignment", modelSchema);
}
exports.AssignmentModule = AssignmentModule;
exports.default = AssignmentModule;
//# sourceMappingURL=assignment.js.map