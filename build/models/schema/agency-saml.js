"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AgencySAMLSchema(mongoose) {
    const { Schema } = mongoose;
    const AgencySAML = new Schema({
        selector: {
            type: String,
            required: true,
            // Index set at schema level, to be able to specify name and/or other options
        },
        idp: {
            type: String,
            default: "",
        },
        sp: {
            type: String,
            default: "",
        },
        env: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        // For Google Accounts, append https://accounts.google.com/accountchooser?continue=
        // Options: none, google
        jumpPoint: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
        timestamps: true,
        autoIndex: false,
        toJSON: {
            virtuals: true,
            versionKey: false,
        }
    });
    return AgencySAML;
}
exports.default = AgencySAMLSchema;
//# sourceMappingURL=agency-saml.js.map