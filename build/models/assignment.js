"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function AssignmentModule(mongoose) {
    const { Schema } = mongoose;
    const modelSchema = new Schema({
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
        autoIndex: false,
        toJSON: {
            virtuals: true,
            versionKey: false,
        }
    });
    modelSchema.virtual("id").get(function () {
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
    return mongoose.model("Assignment", modelSchema, "massive_assignment", { overwriteModels: true });
}
exports.default = AssignmentModule;
//# sourceMappingURL=assignment.js.map