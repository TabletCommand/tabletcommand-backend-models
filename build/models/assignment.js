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
            default: helpers_1.currentDate,
        },
        // Deprecated
        modified_date: {
            type: String,
        },
        // Deprecated
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
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
        transform(doc, ret) {
            ret.id = ret._id.toString();
        },
    });
    return (0, helpers_1.createModel)(mongoose, "Assignment", modelSchema);
}
exports.AssignmentModule = AssignmentModule;
exports.default = AssignmentModule;
//# sourceMappingURL=assignment.js.map