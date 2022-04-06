"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattalionModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function BattalionModule(mongoose) {
    const { Schema, Types } = mongoose;
    const toJSONOpts = {
        virtuals: true,
        versionKey: false,
        transform(doc, ret) {
            strictSchema(doc.schema, ret);
            ret.id = ret._id;
        },
    };
    const BattalionUnit = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
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
            type: mongoose.Schema.Types.ObjectId,
            ref: "Agency",
            default: null,
        },
        agencyName: {
            type: String,
        },
        agencyCode: {
            type: String,
        },
    }, {});
    BattalionUnit.set("toJSON", toJSONOpts);
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
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
            index: true,
        },
        agencyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Agency",
            default: null,
        },
        agencyName: {
            type: String,
        },
        agencyCode: {
            type: String,
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
        collection: "massive_battalion",
    });
    modelSchema.set("autoIndex", false);
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        transform(doc, ret) {
            strictSchema(doc.schema, ret);
            ret.id = ret._id;
        },
    });
    modelSchema.virtual("id").get(function () {
        // tslint:disable-next-line: no-unsafe-any
        return this._id.toString();
    });
    function strictSchema(schema, ret) {
        Object.keys(ret).forEach(function (element) {
            // Don't complain about the virtuals
            if (element === "id") {
                return;
            }
            const pathSchema = schema;
            if (pathSchema.paths[element] === undefined) {
                // console.log("backend-models.cad-incident: undefined schema.paths[element]:", element, pathSchema.paths[element]);
                delete ret[element];
            }
        });
    }
    return (0, helpers_1.createModel)(mongoose, "Battalion", modelSchema);
}
exports.BattalionModule = BattalionModule;
exports.default = BattalionModule;
//# sourceMappingURL=battalion.js.map