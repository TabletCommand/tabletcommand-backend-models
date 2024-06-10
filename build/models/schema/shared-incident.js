"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedSourceSchema = exports.SharedToSchema = exports.ShareReasonSchema = exports.ReportNumberSchema = exports.RecordSchema = exports.RadioChannelSchema = exports.CADPersonSchema = void 0;
const helpers_1 = require("../../helpers");
function CADPersonSchema(mongoose) {
    const { Schema } = mongoose;
    const Person = new Schema({
        PersonnelID: {
            type: String,
        },
        PersonnelName: {
            type: String,
        },
        PersonnelRank: {
            type: String,
            default: ""
        },
        PersonnelWorkCode: {
            type: String,
            default: ""
        },
        PersonnelNote: {
            type: String,
            default: ""
        },
    }, {
        _id: false,
        id: false,
    });
    return Person;
}
exports.CADPersonSchema = CADPersonSchema;
function RadioChannelSchema(mongoose) {
    const { Schema } = mongoose;
    const RadioChannel = new Schema({
        name: {
            type: String,
            default: "",
        },
        channel: {
            type: String,
            default: "",
        },
        url: {
            type: String,
            default: "",
        },
        channelDescription: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
        toJSON: {
            versionKey: false,
        }
    });
    return RadioChannel;
}
exports.RadioChannelSchema = RadioChannelSchema;
function RecordSchema(mongoose) {
    const { Schema } = mongoose;
    const Record = new Schema({
        name: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
        toJSON: {
            versionKey: false,
        }
    });
    return Record;
}
exports.RecordSchema = RecordSchema;
function ReportNumberSchema(mongoose) {
    const { Schema } = mongoose;
    const ReportNumber = new Schema({
        name: {
            type: String,
            default: "",
        },
        number: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
        toJSON: {
            versionKey: false,
        }
    });
    return ReportNumber;
}
exports.ReportNumberSchema = ReportNumberSchema;
function ShareReasonSchema(mongoose) {
    const { Schema } = mongoose;
    const ShareReason = new Schema({
        name: {
            type: String,
            default: "",
        },
        date: {
            type: Date,
            default: helpers_1.currentDate,
        },
    }, {
        _id: false,
        id: false,
        toJSON: {
            versionKey: false,
        },
    });
    return ShareReason;
}
exports.ShareReasonSchema = ShareReasonSchema;
function SharedToSchema(mongoose) {
    const { Schema } = mongoose;
    const ShareReason = ShareReasonSchema(mongoose);
    const SharedTo = new Schema({
        departmentId: {
            type: String,
            default: "",
        },
        // Department Name
        name: {
            type: String,
            default: "",
        },
        startAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        expireAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        active: {
            type: Boolean,
            default: true, // overwritten later, when expireAt is older than now
        },
        reasons: {
            type: [ShareReason],
            default: [],
        }
    }, {
        _id: false,
        id: false,
        toJSON: {
            versionKey: false,
        }
    });
    return SharedTo;
}
exports.SharedToSchema = SharedToSchema;
function SharedSourceSchema(mongoose) {
    const { Schema } = mongoose;
    const ShareReason = ShareReasonSchema(mongoose);
    const SharedSource = new Schema({
        // Department Name (always matches record .departmentId)
        name: {
            type: String,
            default: "",
        },
        // Output overwritten by backend when record is included in another department's list
        isExternal: {
            type: Boolean,
            default: false,
        },
        // Output will be overwritten by backend
        startAt: {
            type: Date,
        },
        expireAt: {
            type: Date,
        },
        reasons: {
            type: [ShareReason],
            default: [],
        }
    }, {
        _id: false,
        id: false,
        toJSON: {
            versionKey: false,
        }
    });
    return SharedSource;
}
exports.SharedSourceSchema = SharedSourceSchema;
//# sourceMappingURL=shared-incident.js.map