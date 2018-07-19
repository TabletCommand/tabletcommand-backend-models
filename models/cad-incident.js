"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var uuid = require("uuid");

var toJSONOpts = {
  versionKey: false,
  transform: function(doc, ret) {
    strictSchema(doc.schema, ret);
  }
};

var CADComment = new Schema({
  Comment: {
    type: String
  },
  CommentSource: {
    type: String
  },
  CommentDateTime: {
    type: String
  }
}, {
  _id: false
});

CADComment.set("toJSON", toJSONOpts);

var CADPerson = new Schema({
  PersonnelID: {
    type: String
  },
  PersonnelName: {
    type: String
  },
  PersonnelRank: {
    type: String
  },
  PersonnelWorkCode: {
    type: String
  },
  PersonnelNote: {
    type: String
  }
}, {
  _id: false
});
CADPerson.set("toJSON", toJSONOpts);

var CADUnit = new Schema({
  UnitID: {
    type: String,
    required: true
  },
  UnitDispatchNumber: {
    type: String,
    required: true
  },
  TimeDispatched: {
    type: String
  },
  TimeEnroute: {
    type: String
  },
  TimeArrived: {
    type: String
  },
  TimeStaged: {
    type: String
  },
  TimeCleared: {
    type: String
  },
  TimeAtHospital: {
    type: String
  },
  TimePatient: {
    type: String
  },
  TimeTransport: {
    type: String
  },
  TimeTransporting: {
    type: String
  },

  PersonnelCount: {
    type: Number
  },
  Personnel: [CADPerson]
}, {
  _id: false
});
CADUnit.set("toJSON", toJSONOpts);

var APNNotificationType = new Schema({
  name: {
    type: String
  },
  value: {
    type: String
  }
}, {
  _id: false
});
APNNotificationType.set("toJSON", toJSONOpts);

var modelSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true
  },
  departmentId: {
    type: String,
    default: "",
    required: true,
    index: true
  },
  AgencyID: {
    type: String,
    required: true
  },
  IncidentNumber: {
    type: String,
    required: true
  },
  TransactionID: {
    type: String,
    required: true
  },

  // Incident Specific
  AgencyIncidentCallTypeDescription: {
    type: String
  },
  AgencyIncidentCallType: {
    type: String
  },
  AgencyIncidentCallSubTypeDescription: {
    type: String
  },
  AgencyIncidentCallSubType: {
    type: String
  },
  AgencyIncidentPriorityDescription: {
    type: String
  },
  PulsePointIncidentCallType: {
    type: String
  },
  AlarmLevel: {
    type: String
  },
  CommandName: {
    type: String
  },
  FireMap: {
    type: String
  },
  TBMap: {
    type: String
  },
  MapPages: {
    type: String
  },
  TacticalChannel: {
    type: String
  },
  TacticalAltChannel: {
    type: String
  },
  CommandChannel: {
    type: String
  },

  // Dates
  EntryDateTime: {
    type: String
  },
  ClosedDateTime: {
    type: String
  },
  CallReceivedDateTime: {
    type: String
  },
  DispatchDateTime: {
    type: String
  },
  IncidentLastUpdate: {
    type: String
  },
  EnrouteDateTime: {
    type: String
  },
  OnSceneDateTime: {
    type: String
  },

  modified_date: {
    type: String
  },
  modified_unix_date: {
    type: Number
  },
  start_unix_date: {
    type: Number
  },
  closed_unix_date: {
    type: Number
  },
  queued_at: {
    type: Number
  },
  scheduled_at: {
    type: Number
  },

  // Address fields
  StreetName: {
    type: String
  },
  StreetSuffix: {
    type: String
  },
  Predirectional: {
    type: String
  },
  Postdirectional: {
    type: String
  },
  CityOrLocality: {
    type: String
  },
  StateOrProvince: {
    type: String
  },
  // Legacy
  StateOfProvince: {
    type: String
  },
  CommonPlaceName: {
    type: String
  },
  CrossStreet1: {
    type: String
  },
  CrossStreet2: {
    type: String
  },
  StreetNumber: {
    type: String
  },
  Building: {
    type: String
  },
  Suite: {
    type: String
  },
  City: {
    type: String
  },
  County: {
    type: String
  },
  PostalCode: {
    type: String
  },
  CrossStreetName: {
    type: String
  },
  // TC Address
  full_address: {
    type: String
  },
  address: {
    type: String
  },
  cross_streets: {
    type: String
  },

  // Coordinate
  Latitude: {
    type: String
  },
  Longitude: {
    type: String
  },

  Comment: {
    type: [CADComment]
  },

  units: {
    type: [CADUnit]
  },

  // Tablet Command Internal fields
  preference_location: {
    type: String
  },

  // Leaked
  admin_note: {
    type: String
  },
  Interface: {
    type: String
  },
  InterfaceVersion: {
    type: String
  },

  notificationType: {
    type: [APNNotificationType]
  },

  // Anaheim
  ReportNumber: {
    type: [String]
  },

  uuid: {
    type: String,
    default: uuid.v4
  }
}, {
  collection: "massive_incident_cad",
  strict: false // Because we accept all kind of data in
});
modelSchema.set("autoIndex", false);

modelSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {
    strictSchema(doc.schema, ret);
    ret.id = ret._id;
  }
});

modelSchema.virtual("id").get(function() {
  return this._id.toString();
});

function strictSchema(schema, ret) {
  Object.keys(ret).forEach(function(element, index) {
    // Don't complain about the virtuals
    if (element === "id") {
      return;
    }
    if (schema.paths[element] === undefined) {
      console.log("undefined schema.paths[element]:", element, schema.paths[element]);
      delete ret[element];
    }
  });
}

module.exports = mongoose.model("CADIncident", modelSchema);
