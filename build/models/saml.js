"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAMLModule = exports.SAMLSchema = void 0;
const helpers_1 = require("../helpers");
function SAMLSchema(mongoose) {
    const { Schema, Types } = mongoose;
    const SAMLMetadataConfiguration = (0, helpers_1.createSchema)(Schema, {
        // ArcGIS Item id
        selector: {
            type: String,
            required: true,
            unique: true,
        },
        idp: {
            type: String,
            default: "",
        },
        sp: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: Types.ObjectId,
            ref: "Department",
            required: true,
            unique: true,
        },
        // https://mongoosejs.com/docs/api/schema.html#Schema.reserved
        metadata: {
            type: [SAMLMetadataConfiguration],
            default: [],
        },
    }, {
        autoIndex: false,
        collection: "massive_saml",
        timestamps: true,
        toJSON: {
            virtuals: true,
            versionKey: false,
        }
    });
    return modelSchema;
}
exports.SAMLSchema = SAMLSchema;
async function SAMLModule(mongoose) {
    const modelSchema = SAMLSchema(mongoose);
    return (0, helpers_1.createModel)(mongoose, "SAML", modelSchema);
}
exports.SAMLModule = SAMLModule;
exports.default = SAMLModule;
//# sourceMappingURL=saml.js.map