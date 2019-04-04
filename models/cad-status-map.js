module.exports = function RateLimitModule(mongoose) {
  "use strict";

  var _ = require("lodash");
  var Schema = mongoose.Schema;

  var ToStatusIdSchema = new Schema({
    statusId: {
      type: Number,
      default: 0,
      required: true,
      min: 0
    },
    userEnabled: {
      type: Boolean
    }
  }, {
    _id: false
  });

  // Using hook instead of default values,
  // so we keep the db value if no value was sent by the API/CAD
  ToStatusIdSchema.pre("save", function(next) {
    var self = this;

    if (_.isUndefined(self.userEnabled) || _.isNull(self.userEnabled)) {
      self.userEnabled = true;
    }

    return next();
  });

  // Update static items (keep in sync with the lib/cad-status-map/updateDocument!)
  var modelSchema = new Schema({
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true
    },
    modifiedDate: {
      type: Number,
      default: 0,
      min: 1
    },
    fromStatusId: {
      type: Number,
      default: 0,
      required: true,
      min: 0
    },
    toStatusIds: {
      type: [ToStatusIdSchema],
      required: true
    }
  }, {
    collection: "massive_cad_status_map"
  });
  modelSchema.set("autoIndex", false);

  // Hack for mocha that loads the same models twice
  var Model;
  if (mongoose.models.CADStatusMap) {
    Model = mongoose.model("CADStatusMap");
  } else {
    Model = mongoose.model("CADStatusMap", modelSchema);
  }

  return Model;
};
