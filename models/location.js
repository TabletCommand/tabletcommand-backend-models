module.exports = function LocationModule(mongoose) {
  "use strict";

  var Schema = mongoose.Schema;
  var uuid = require("uuid");
  var _ = require("lodash");

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
    userId: {
      type: String,
      default: "",
      required: true
    },
    uuid: {
      type: String,
      default: uuid.v4
    },
    username: {
      type: String,
      default: "",
      required: true
    },
    device_type: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    modified_unix_date: {
      type: Number,
      required: true,
      default: 0,
      min: 1
    },
    version: {
      type: Number,
      default: 2
    },
    session: {
      type: String,
      default: ""
    },

    location: {
      longitude: {
        type: Number,
        required: true,
        default: 0
      },
      latitude: {
        type: Number,
        required: true,
        default: 0
      }
    }
  }, {
    collection: "massive_location"
  });
  modelSchema.set("autoIndex", false);

  modelSchema.methods.propagateToObject = function propagateToObject(dbItem, callback) {
    const that = this; // Reassign this to silence standard/no-callback-literal
    if (!_.isObject(dbItem)) {
      return callback(that);
    }

    // We keep the same value for _id, uuid, departmentId
    dbItem.userId = this.userId;
    dbItem.username = this.username;
    dbItem.device_type = this.device_type;
    dbItem.active = this.active;
    dbItem.modified_unix_date = this.modified_unix_date;
    dbItem.version = this.version;
    dbItem.session = this.session;
    dbItem.location.latitude = this.location.latitude;
    dbItem.location.longitude = this.location.longitude;

    return callback(dbItem);
  };

  // Hack for mocha that loads the same models twice
  var Model;
  if (mongoose.models.Location) {
    Model = mongoose.model("Location");
  } else {
    Model = mongoose.model("Location", modelSchema);
  }

  return Model;
};
